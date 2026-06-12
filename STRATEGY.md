# EstiPro Global — Website Strategy & Copy Deck

This is the thinking behind the rebuild: the sitemap, navigation, homepage copy,
section layouts, CTA wording, and how each service page is structured. Use it as
the single source of truth when editing copy or briefing a developer.

---

## 1. What we fixed from the old site

The current site (estiproglobal.com) reads like a generic offshore estimating
agency: heavy on "precision," "expertise," and "comprehensive," a long list of
trades, and no clear reason to pick them over the ten other sites that say the
same thing. There was no single, memorable offer.

**The rebuild is organized around one thing the competition mostly doesn't say
out loud:** *Start with zero upfront. See a preview. Pay only if it's good.*
That offer is the spine of the homepage, every service page, and every CTA.

We also:
- Reframed the company as a **backup / overflow estimator** (a teammate), not an
  outsourcing vendor.
- Cut buzzwords. Wrote like we're talking to a busy contractor before a bid.
- Made the **deliverables concrete**: color-coded PDF markups, Excel takeoffs,
  scope notes, bid support.
- Gave every page a single, obvious next step: **Upload Plans / Get a Quote.**

---

## 2. Improved sitemap

```
Home (index.html)
├── Services (services.html)            ← overview / hub
│   ├── Construction Estimating
│   ├── Quantity Takeoff
│   ├── Residential Estimating
│   ├── Commercial Estimating
│   └── Trade-Specific Services
├── Portfolio / Sample Estimates (portfolio.html)
├── About (about.html)
├── Contact (contact.html)             ← quote form lives here
├── Privacy Policy (privacy-policy.html)   [footer]
├── Terms & Conditions (terms.html)        [footer]
└── 404 (404.html)
```

**Why this shape:** Services is a hub page so the five service pages have a clean
parent for SEO and navigation. Legal pages live in the footer only. Contact
doubles as the conversion page (the quote form).

---

## 3. Navigation menu

**Primary nav (left → right):**
`Home · Services ▾ · Portfolio · About · Contact · [Upload Plans]`

- **Services** is a dropdown containing the five service pages.
- The right-hand **Upload Plans** is a solid amber button — the persistent CTA on
  every page.
- Mobile: hamburger menu; the Services dropdown expands inline.

**Footer nav:** Services list · Company (About, Portfolio, Contact, All Services)
· Get in touch (email, phone, coverage, Get a Quote button) · legal row.

---

## 4. CTA wording (used site-wide)

| Context | Primary CTA | Secondary CTA |
|---|---|---|
| Header (every page) | **Upload Plans** | — |
| Hero | **Upload Plans** | **Get a Quote** |
| Mid-page bands | **Send Plans, Get a Quote** | — |
| Service pages | **Get a Quote** | **Upload Plans** |
| Final CTA band | **Upload Plans** | **Get a Quote** |
| Portfolio | **Request Full Samples** | — |

Supporting microcopy that reinforces the offer near CTAs:
- "Zero upfront — pay only if the work looks good."
- "Send the plans. We'll quote it flat."
- "See the preview. Then decide."

Keep CTAs verb-first and concrete. Avoid "Learn more" as a primary action (used
only as a soft link on service cards).

---

## 5. Homepage copy & section-by-section layout

**Hero**
- Badge: `Zero upfront — pay only if the work looks good`
- H1: **Your backup estimating team, ready when the bids pile up.**
- Sub: EstiPro Global does construction cost estimating, quantity takeoffs, and
  bid support for U.S. general contractors and subs. Send us the plans, we quote
  a flat price, and you don't pay a dime until you've seen the preview.
- 3 proof bullets (markups + Excel, scope notes, fast turnaround).
- CTAs: Upload Plans / Get a Quote.
- Right side: a **"How it works" offer card** (the 4-step pay-after-preview flow)
  — this is the differentiator, so it sits in the hero.

**Trust strip** — "Built for the way contractors actually bid" + audience chips
(GCs, Subs, Builders, Remodelers, Design-Build).

**The offer (deep dive)** — Explains "try us with nothing to lose": zero upfront,
preview first, full files after payment. Panel lists what "preview first" means.

**Who we help** — 4 cards: General Contractors, Subcontractors, Home Builders,
Remodelers. (Overflow framing.)

**What we deliver** — 4 cards: color-coded PDF markups, Excel takeoff summaries,
scope notes & clarifications, bid support.

**Why choose us** (navy band) — 4 points: fast turnaround, overflow on demand,
flat pricing, clear/usable files.

**Process** — 4 numbered steps: send the plans → get your quote → review the
preview → pay & get files.

**What we estimate** — 6 service cards linking to each service page + samples.

**FAQ** — the 5 objections contractors raise first (pay nothing upfront?, how
fast?, are you replacing my estimator?, software/formats?, cost?).

**Final CTA band** — "Send us a set of plans. See the preview. Then decide."

---

## 6. Service page structure (repeatable template)

Every service page (`construction-estimating`, `quantity-takeoff`,
`residential-estimating`, `commercial-estimating`, `trade-specific-services`)
follows the same skeleton so they're consistent and easy to extend:

1. **Page hero** — H1, one-line value prop, Upload Plans / Get a Quote.
2. **Intro split** — what the service is + a "What's in the package" tick-list of
   deliverables.
3. **Who it's for** — 3 audience cards.
4. **Why us** — 4 short benefit cards (deadline, flat price, clean files,
   overflow).
5. **Process** — the same 4-step zero-upfront band (consistency = trust).
6. **FAQ** — 4 service-specific questions.
7. **CTA band** — send plans / get a quote.

This template lives in the page markup; to add a new service, copy any service
page and swap the copy blocks.

---

## 7. Contact page copy

- H1: **Send your plans. Get a flat quote.**
- Sub reinforces the offer (review scope → flat price → $0 upfront → pay after
  preview).
- Left: quote form (name, company, email, phone, service type, bid deadline, link
  to plans, project details). Submits via `js/main.js`; see README to wire a real
  backend.
- Right: direct contact panel (email, phone, hours, coverage) + a restated "the
  deal" tick-list.
- Closing CTA: "Got the plans handy? Email them now…"

---

## 8. Tone rules (for anyone editing copy later)

- Talk like a contractor, to a contractor. Short sentences. Plain words.
- Lead with the offer and the deadline, not the company history.
- **Banned/over-used words:** precision, innovative, comprehensive, tailored,
  cutting-edge, solutions (as filler), synergy.
- Don't sound like an outsourcing agency. We're a *backup teammate*.
- Always make the next step obvious: upload plans / get a quote.

---

## 9. Developer handoff

Full build, run, deploy, form-wiring, and placeholder-replacement instructions
are in **`README.md`**. Quick version: it's static HTML/CSS/JS with no build step
— host it anywhere, replace the contact placeholders, wire the form to Formspree
or Netlify Forms, and ship.
