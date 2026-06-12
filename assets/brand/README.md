# EstiPro Global — Brand Assets

Sharper, rebuilt version of the EstiPro Global logo. Same identity as before:
large italic **EstiPro** wordmark, **Global** at lower-right, amber underline beneath
the left/middle of the wordmark. Navy + amber only.

## Colors

| Role   | Hex       |
|--------|-----------|
| Navy   | `#0A1F33` |
| Amber  | `#FF8A1E` |
| Light neutral (reverse text only) | `#F4EDE2` |

Typeface: Montserrat (italic, ExtraBold for "EstiPro", SemiBold for "Global"),
converted to outlines. No font dependency — every SVG is self-contained vector paths.

## Which file to use where

| File | Use it for |
|------|------------|
| `estipro-logo-primary.svg` | **Default.** Light/white backgrounds. Navy wordmark, amber underline. |
| `estipro-logo-reverse.svg` | Dark / navy sections, footers, hero overlays. Light wordmark, amber Global + underline. |
| `estipro-logo-navy.svg` | One-color navy. Print, documents, faxable/mono contexts on light bg. |
| `estipro-logo-amber.svg` | One-color amber. Accent use on dark backgrounds. |
| `estipro-logo-header.svg` | **Navbar.** Tighter vertical padding so it sits clean at 40–52px height. |
| `estipro-logo-square.svg` | LinkedIn / social profile / large square avatar. Navy rounded tile, full wordmark. |
| `favicon.svg` | Browser tab + small avatars. **EP monogram** (the full wordmark is unreadable below ~64px). |

### Raster exports
Every logo ships as PNG at `1x`, `@2x`, `@4x` (transparent background, except square/favicon which are navy):

- `estipro-logo-primary.png` / `@2x` / `@4x` — 1x = 400px wide
- `estipro-logo-reverse.png` / `@2x` / `@4x`
- `estipro-logo-navy.png` / `@2x` / `@4x`
- `estipro-logo-amber.png` / `@2x` / `@4x`
- `estipro-logo-header.png` / `@2x` / `@4x` — 1x = 360px wide
- `estipro-logo-square.png` / `@2x` / `@4x` — 1x = 256px

### Icons & meta
- `favicon.svg` — modern browsers (scales perfectly)
- `favicon.ico` — legacy fallback (16/32/48/64)
- `apple-touch-icon.png` — 180×180, iOS home screen
- `estipro-og.png` — 1200×630 Open Graph / link-preview image (navy bg, reverse wordmark)

## Usage rules

- Prefer **SVG** everywhere on the web. Use PNG only where SVG isn't supported.
- Keep clear space around the logo equal to the height of the "E".
- Do not recolor, add gradients, shadows, or 3D. Navy and amber only.
- Do not stretch. Scale proportionally.
- On photos or busy backgrounds, use `reverse` or place on a solid navy panel.

## Folder structure

```
assets/
  brand/
    estipro-logo-primary.svg   (+ .png @2x @4x)
    estipro-logo-reverse.svg   (+ .png @2x @4x)
    estipro-logo-navy.svg      (+ .png @2x @4x)
    estipro-logo-amber.svg     (+ .png @2x @4x)
    estipro-logo-header.svg    (+ .png @2x @4x)
    estipro-logo-square.svg    (+ .png @2x @4x)
    favicon.svg
    favicon.ico
    apple-touch-icon.png
    estipro-og.png
    README.md
```
