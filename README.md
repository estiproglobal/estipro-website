# EstiPro Global — Website

A fast, no-build, static website for EstiPro Global: remote backup construction
estimating, quantity takeoffs, and bid support for U.S. general contractors and
subcontractors.

> **Core offer the whole site is built around:** *Send plans → get a flat quote →
> we start at $0 upfront → you review preview files → you only pay if it looks
> good → after payment we send the full Excel/source files.*

---

## What this is

- **Plain HTML, CSS, and a little vanilla JS.** No framework, no build step, no
  dependencies to install. Open the files and they work.
- **12 pages** plus a 404, sitemap, and robots file.
- Every page shares one stylesheet (`css/styles.css`) and one script
  (`js/main.js`).

## File structure

```
.
├── index.html                     # Home
├── services.html                  # Services overview
├── construction-estimating.html   # Service page
├── quantity-takeoff.html          # Service page
├── residential-estimating.html    # Service page
├── commercial-estimating.html     # Service page
├── trade-specific-services.html   # Service page
├── portfolio.html                 # Portfolio / sample estimates
├── about.html                     # About
├── contact.html                   # Contact + quote form
├── privacy-policy.html            # Legal
├── terms.html                     # Legal
├── 404.html                       # Not-found page
├── css/styles.css                 # All styles (design tokens at top)
├── js/main.js                     # Mobile nav, active link, form handler
├── sitemap.xml                    # Update domain if it changes
├── robots.txt
└── README.md
```

## Run it locally

It's static, so any of these work:

```bash
# Option 1: just open index.html in a browser

# Option 2: tiny local server (recommended, mirrors production paths)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy

Pick whichever is easiest — no build command is needed for any of them.

### GitHub Pages
1. Push to the repo (default branch, e.g. `main`).
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Choose your branch and `/ (root)`. Save.
4. For the custom domain `www.estiproglobal.com`, add a `CNAME` file containing
   `www.estiproglobal.com` and set the DNS `CNAME` record to
   `<user>.github.io`.

### Netlify / Cloudflare Pages / Vercel
- Connect the repo. **Build command:** *(leave empty)*. **Publish directory:** `/`
  (the repo root). Deploy.

## Before you go live — fill these in

These are placeholders in the code. Search-and-replace across all files:

| Placeholder | Replace with |
|---|---|
| `estimating@estiproglobal.com` | Your real inbound email |
| `+1 (000) 000-0000` and `tel:+10000000000` | Your real phone |
| `Mon–Fri, 8am–6pm CT` (contact page) | Your real hours |
| Stat numbers on `about.html` | Real numbers once you have them |
| Sample projects on `portfolio.html` | Real (anonymized) sample files/images |

## Wire up the contact form

`contact.html` has a working quote form. Right now `js/main.js` validates it and
opens the visitor's email client as a fallback (no server required). To capture
submissions properly, pick one:

- **Formspree** — change the `<form>` to
  `<form action="https://formspree.io/f/XXXX" method="POST">` and remove the
  `data-quote-form` attribute (or keep JS as a fallback).
- **Netlify Forms** — add `netlify` and `name="quote"` to the `<form>` tag; no JS
  needed.
- **Your own endpoint** — POST the `FormData` in `js/main.js` to your API.

Field names are already set (`name`, `company`, `email`, `phone`, `service`,
`deadline`, `plans_link`, `message`) so any of the above receives clean data.

## Editing content

- **Colors, spacing, fonts:** the `:root` design tokens at the top of
  `css/styles.css`. Change `--amber` / `--navy` to rebrand the whole site.
- **Nav and footer:** these are repeated in each HTML file (kept identical on
  purpose so the site stays dependency-free). If you change a nav/footer link,
  update it in every page, or move them into a JS include if you prefer.
- **Copy:** edit the HTML directly. Tone guide: simple, direct, contractor-
  friendly. Avoid "precision / innovative / comprehensive / tailored."

## SEO notes

- Each page has its own `<title>` and meta description.
- Update `sitemap.xml` and `robots.txt` if the domain changes.
- Add a favicon and Open Graph image (`og:image`) before launch for nicer link
  previews — drop the tags in each `<head>`.

## A note on the legal pages

`privacy-policy.html` and `terms.html` are practical starting templates, **not
legal advice.** Have a qualified attorney review them before publishing.
