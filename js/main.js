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

  // ----- Quote / contact form -----
  // No backend is wired up yet. This gives the visitor immediate feedback
  // and opens their email client as a fallback. Replace with a real
  // endpoint (Formspree, Netlify Forms, or your own API) — see README.
  document.querySelectorAll("form[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var subject = encodeURIComponent("Plan / Quote request — " + (name || "New lead"));
      var lines = [];
      data.forEach(function (val, key) {
        if (val) lines.push(key + ": " + val);
      });
      var body = encodeURIComponent(lines.join("\n"));
      var status = form.querySelector("[data-form-status]");
      if (status) {
        status.hidden = false;
        status.textContent =
          "Thanks, " + (name || "there") + " — opening your email app so you can send this to us. " +
          "Prefer to email directly? Write to estimating@estiproglobal.com.";
      }
      window.location.href =
        "mailto:estimating@estiproglobal.com?subject=" + subject + "&body=" + body;
    });
  });
})();
