# Swayam Mehta — Portfolio

Personal portfolio site. Single-page, dark, minimal — built to present software and
AI/ML engineering work with clarity.

**Live:** https://swayammehta.me/

## Stack

- **React 18** + **Vite** — SPA, fast dev/build
- **Tailwind CSS** — utility styling; accent color driven by CSS variables in `src/index.css`
- **Framer Motion** — scroll-in and entrance animations
- **react-icons** — skill / social iconography
- **Web3Forms** — serverless contact-form delivery (no backend)
- Deployed on **Vercel** (with `@vercel/speed-insights`)

## Structure

```
src/
  constants/index.js   # single source of truth: hero, experience, projects, skills, socials
  components/
    Navbar.jsx          # sticky nav + social links
    Hero.jsx            # identity, bio, résumé CTA
    Section.jsx         # shared section wrapper (eyebrow + heading)
    Skills.jsx          # grouped skill chips
    Experience.jsx      # timeline
    Projects.jsx        # image-free project card grid (metric-led)
    Footer.jsx          # contact form + footer
    icons.jsx           # string-keyed react-icons registry
public/                 # résumé PDFs, logo, favicon
```

All site content lives in `src/constants/index.js` — edit there to update copy.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Contact form (Web3Forms)

The footer form posts to [Web3Forms](https://web3forms.com). Set the access key via an
environment variable (preferred) or the fallback in `src/constants/index.js`:

```bash
# .env.local
VITE_WEB3FORMS_KEY=your-access-key
```

The key is public-safe to expose client-side.

## Changing the accent color

Swap the two `--accent` / `--accent-soft` RGB values under `:root` in `src/index.css`.
Cyan and emerald presets are noted in the comment there.
