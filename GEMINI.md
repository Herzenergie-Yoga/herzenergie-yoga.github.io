# GEMINI.md

This file provides context and guidelines for Gemini CLI when working with code, reviewing PRs, and triaging issues in this repository.

## Project Overview

**Herzenergie Yoga** is the official website for Ninja Seidel's yoga studio located in Georgsmarienhütte, offering courses at Physiopraxis Lina Eichler in Kloster Oesede.

- **URL**: [ninjaseidel.de](https://ninjaseidel.de) / [herzenergie-yoga.github.io](https://herzenergie-yoga.github.io)
- **Language**: German (all public-facing content is in German)
- **Framework**: [Astro](https://astro.build) (Static Site Generation)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin and `@tailwindcss/typography`
- **Deployment**: GitHub Pages via `gh-pages` branch (`.github/workflows/deploy.yml` and `.github/workflows/preview.yml`)

---

## Commands & Tooling

```bash
# Start local development server (localhost:4321)
npm run dev

# Build static production output to ./dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Architecture & Project Structure

```
├── public/                     # Static assets, favicon, icons, images (/public/img/)
├── src/
│   ├── components/
│   │   └── header/
│   │       └── HeaderCarousel.astro # Animated header carousel with swipe/fade
│   ├── content/
│   │   └── kurse/              # Course collection data files (e.g. freitag.md, samstag.md)
│   ├── content.config.ts       # Astro Content Collections definition and Zod schemas
│   ├── layouts/
│   │   └── Layout.astro        # Master layout: navigation, hero, font imports, footer, view transitions
│   ├── pages/
│   │   ├── index.md            # Home page (/)
│   │   ├── about.md            # About Ninja Seidel (/about)
│   │   ├── agb.md              # Terms & Conditions (/agb)
│   │   ├── kontakt.md          # Contact page (/kontakt)
│   │   ├── eft.md              # EFT Emotional Freedom Techniques (/eft)
│   │   ├── aetherische-oele.md # Essential oils (/aetherische-oele)
│   │   ├── cacao-ritual.md     # Cacao ritual (/cacao-ritual)
│   │   ├── yoga-special-event.md # Yoga special events (/yoga-special-event)
│   │   ├── specials.astro      # Specials overview (/specials)
│   │   └── kurse/
│   │       ├── index.astro     # Dynamic course listings (/kurse)
│   │       ├── hatha-yoga.astro # Hatha Yoga page (/kurse/hatha-yoga)
│   │       ├── yin-yoga.astro   # Yin Yoga page (/kurse/yin-yoga)
│   │       └── kinder-yoga.astro# Kinder Yoga page (/kurse/kinder-yoga)
│   ├── styles/
│   │       └── global.css      # Tailwind v4 configuration, theme tokens, custom utilities
│   └── utils/
│           └── paths.ts        # Base-aware URL helper `toHref()` for root & PR preview subpaths
├── astro.config.mjs            # Astro configuration (Vite Tailwind plugin, sitemap, prefetching, base path)
└── package.json                # Node.js dependencies and scripts
```

---

## Key Conventions & Architecture Rules

### 1. Routing & Markdown Pages
- All `.md` content pages in `src/pages/` must include YAML frontmatter with:
  - `layout: ../layouts/Layout.astro`
  - `title: "..."` (Page title)
- Dynamic pages and complex views use `.astro` components (e.g. `src/pages/kurse/*.astro`, `src/pages/specials.astro`).

### 2. Layout, Paths & Header Carousel
- Single master layout (`src/layouts/Layout.astro`) manages:
  - Header navigation (menu arrays `angebote` and `footerLinks`).
  - Base-aware link resolution using `toHref()` from `src/utils/paths.ts` for preview subpath support (`/pr-preview/pr-XX/`).
  - Hero header image carousel (`<HeaderCarousel />` from `src/components/header/HeaderCarousel.astro`).
  - View transitions via Astro `<ClientRouter />`.
  - Global `<slot />` main content container with `.prose` styling.
  - Scroll-reveal animations via `IntersectionObserver` on `.prose > *`.
  - Footer with legal/contact links and copyright notice.

### 3. Content Collections
- `src/content.config.ts` defines the `kurse` collection using Astro's `glob` loader (`./src/content/kurse/*.md`).
- Schema validation with Zod enforces fields: `wochentag`, `kursart`, `uhrzeit`, `kursstart`, `kursende`, `termine`, `preis`, `reihenfolge`, and optional `hinweis`, `ort`, `ortAnfahrt`.

### 4. Design System & Styling Rules
- **Tailwind CSS v4**: Theme tokens are defined directly in `src/styles/global.css` under `@theme` (no `tailwind.config.js`):
  - `brand-bg`: `#f5f2ef` (warm neutral background)
  - `brand-primary`: `#a68d71` (warm earth/gold accent)
  - `brand-secondary`: `#b28e65` (richer earth tone)
  - `brand-text`: `#737373` (soft dark neutral for text)
- **Typography**: Google Fonts loaded in `Layout.astro`:
  - `Nunito` (`font-nunito`) – Body copy
  - `Alex Brush` (`font-alex-brush`) – Elegant script headings/accents
  - `Antic Didone` (`font-antic-didone`) – Refined serif headlines

---

## Guidelines for Code Changes & PR Reviews

1. **Build Validation**: Always verify that `npm run build` succeeds without Astro or TypeScript compilation errors.
2. **Content Tone & Language**: All customer-facing copy must be written in natural, welcoming, grammatically correct German with a warm, mindful tone suitable for a yoga and wellness studio.
3. **Accessibility & SEO**: Maintain clean semantic HTML (`<main>`, `<header>`, `<nav>`, `<footer>`), appropriate heading levels (`<h1>` -> `<h2>` -> `<h3>`), and valid image `alt` tags.
4. **Responsive Layout**: Ensure design looks great on mobile, tablet, and desktop viewports.
