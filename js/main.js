/* EstiPro Global — small site script
   - Mobile nav toggle
   - Mark current page link as active
   - Friendly contact/quote form handler (no backend wired yet)
*/
(function () {
  "use strict";

  // ----- Mobile nav -----
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // ----- Active link highlight -----
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // ----- Current year in footer -----
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ----- Quote / contact form (Formspree AJAX) -----
  // Submits to the form's `action` (Formspree endpoint) without leaving the
  // page, and shows an inline status message. Falls back to a normal submit
  // if JS fails. To change the destination, edit the form's action in
  // contact.html and the delivery address in your Formspree dashboard.
  document.querySelectorAll("form[data-quote-form]").forEach(function (form) {
    var status = form.querySelector("[data-form-status]");
    var submit = form.querySelector("[type=submit]");
    var submitLabel = submit ? submit.innerHTML : "";

    function show(msg, isError) {
      if (!status) return;
      status.hidden = false;
      status.style.color = isError ? "#c0392b" : "var(--green)";
      status.textContent = msg;
    }

    form.addEventListener("submit", function (e) {
      // If there's no endpoint configured, let the browser submit normally.
      if (!form.action || form.action.indexOf("formspree.io") === -1) return;
      e.preventDefault();

      var name = (new FormData(form).get("name") || "").toString().trim();
      if (submit) { submit.disabled = true; submit.textContent = "Sending…"; }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          show("Thanks" + (name ? ", " + name : "") + " — we've got your details and will get back to you shortly with a quote. Prefer email? Write to estimating@estiproglobal.com.", false);
          if (submit) { submit.textContent = "Sent ✓"; }
        } else {
          response.json().then(function (d) {
            var msg = d && d.errors ? d.errors.map(function (x) { return x.message; }).join(", ")
                                    : "Something went wrong. Please email estimating@estiproglobal.com.";
            show(msg, true);
          }).catch(function () {
            show("Something went wrong. Please email estimating@estiproglobal.com.", true);
          });
          if (submit) { submit.disabled = false; submit.innerHTML = submitLabel; }
        }
      }).catch(function () {
        show("Network error — please email estimating@estiproglobal.com.", true);
        if (submit) { submit.disabled = false; submit.innerHTML = submitLabel; }
      });
    });
  });
})();
