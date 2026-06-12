# Website Integration — EstiPro Global logo

Apply these changes to **every page** in `estipro-website/` (index.html, services.html,
contact.html, about.html, portfolio.html, and the service sub-pages). The navbar and
`<head>` are repeated on each page, so the same edits go everywhere.

---

## 1. Add the assets

Copy the whole `assets/` folder into the repo root:

```
estipro-website/
  assets/
    brand/
      estipro-logo-primary.svg
      estipro-logo-reverse.svg
      estipro-logo-header.svg
      estipro-logo-square.svg
      favicon.svg
      favicon.ico
      apple-touch-icon.png
      estipro-og.png
      ...all PNGs...
      README.md
  index.html
  contact.html
  ...
```

---

## 2. Replace the navbar logo

**Find** the current brand link in the navbar. It looks roughly like this
(text-based "EP EstiPro Global"):

```html
<a class="navbar-brand" href="index.html">EP Esti<strong>Pro</strong> Global</a>
```

**Replace it with** the SVG image:

```html
<a class="navbar-brand" href="index.html">
  <img src="assets/brand/estipro-logo-header.svg"
       alt="EstiPro Global"
       class="brand-logo"
       width="180" height="40">
</a>
```

> Keep the `href` pointing to whatever the original used (`index.html`).
> The `width`/`height` are just intrinsic-ratio hints; CSS controls the real size.

---

## 3. CSS for the navbar logo

Add this to your main stylesheet (or a `<style>` block in `<head>`):

```css
.navbar-brand { display: inline-flex; align-items: center; }

.brand-logo {
  height: 46px;          /* desktop: sits in the 40–52px range */
  width: auto;
  display: block;
}

@media (max-width: 768px) {
  .brand-logo { height: 38px; }   /* mobile: 34–44px range */
}
```

If the navbar has a dark/navy background, use the reverse logo instead:

```html
<img src="assets/brand/estipro-logo-reverse.svg" alt="EstiPro Global" class="brand-logo">
```

---

## 4. Favicon + meta references

Add inside `<head>` on every page (replace any existing favicon line):

```html
<!-- Favicons -->
<link rel="icon" href="assets/brand/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/brand/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="assets/brand/apple-touch-icon.png">

<!-- Open Graph / link preview -->
<meta property="og:image" content="https://estiproglobal.github.io/estipro-website/assets/brand/estipro-og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://estiproglobal.github.io/estipro-website/assets/brand/estipro-og.png">
```

---

## 5. Footer logo (optional but recommended)

The footer currently repeats the same text logo. If the footer background is dark/navy,
swap it for the reverse logo:

```html
<a href="index.html">
  <img src="assets/brand/estipro-logo-reverse.svg" alt="EstiPro Global"
       style="height:44px;width:auto;">
</a>
```

On a light footer, use `estipro-logo-primary.svg` instead.

---

## Final GitHub-ready paths

```
assets/brand/estipro-logo-primary.svg
assets/brand/estipro-logo-reverse.svg
assets/brand/estipro-logo-navy.svg
assets/brand/estipro-logo-amber.svg
assets/brand/estipro-logo-header.svg     <-- used in navbar
assets/brand/estipro-logo-square.svg
assets/brand/favicon.svg                  <-- used in <head>
assets/brand/favicon.ico                  <-- used in <head>
assets/brand/apple-touch-icon.png         <-- used in <head>
assets/brand/estipro-og.png               <-- used in <head> og:image
assets/brand/README.md
(+ all @2x / @4x PNG exports)
```

URL once pushed (example):
`https://estiproglobal.github.io/estipro-website/assets/brand/estipro-logo-header.svg`
