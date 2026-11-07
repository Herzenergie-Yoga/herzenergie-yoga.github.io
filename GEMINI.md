# GEMINI.md

This file provides context and guidelines for Gemini CLI when working with code in this repository.

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

```text
├── public/                     # Static assets, favicon, icons, images (/public/img/)
├── src/
│   ├── components/
│   │   └── header/
│   │       └── HeaderCarousel.astro # Animated header carousel with swipe/fade
│   ├── content/
│   │   └── kurse/              # Course schedule entries (freitag.md, samstag.md, sonntag.md)
│   ├── content.config.ts       # Astro Content Collections definition and Zod schemas
│   ├── layouts/
│   │   └── Layout.astro        # Master layout: navigation, hero, font imports, footer, view transitions
│   ├── pages/
│   │   ├── index.md            # Home page (/)
│   │   ├── about.md            # About Ninja Seidel (/about)
│   │   ├── agb.md              # Terms & Conditions (/agb)
│   │   ├── kontakt.md          # Contact page (/kontakt)
│   │   ├── aetherische-oele.md # Essential oils (/aetherische-oele)
│   │   ├── specials.astro      # Specials & events (/specials)
│   │   └── kurse/
│   │       ├── index.astro     # Dynamic course overview (/kurse)
│   │       ├── hatha-yoga.astro# Hatha Yoga details (/kurse/hatha-yoga)
│   │       ├── yin-yoga.astro  # Yin Yoga details (/kurse/yin-yoga)
│   │       └── kinder-yoga.astro# Kinder Yoga details (/kurse/kinder-yoga)
│   ├── styles/
│   │   └── global.css          # Tailwind v4 configuration, theme tokens, custom utilities
│   └── utils/
│       └── paths.ts            # Base-aware URL helper `toHref()` for root & PR preview subpaths
├── astro.config.mjs            # Astro configuration (Vite Tailwind plugin, sitemap, prefetching, base path)
└── package.json                # Node.js dependencies and scripts
```

---

## Key Conventions & Rules

1. **Course Schedule Data (`src/content/kurse/*.md`)**:
   - Validated by `src/content.config.ts` with required frontmatter fields:
     - `wochentag` (string), `kursart` (string), `uhrzeit` (string), `kursstart` (string), `kursende` (string), `termine` (number), `preis` (number), `reihenfolge` (number)
     - Optional: `hinweis` (string), `ort` (string), `ortAnfahrt` (string)
2. **Markdown Content Pages (`src/pages/*.md`)**:
   - Must include frontmatter with `layout: ../layouts/Layout.astro` and `title: "..."`.
3. **Links & Images in `.astro` Files**:
   - Always wrap internal links and image paths in `toHref("/...")` imported from `src/utils/paths.ts` so PR preview deployments under `/pr-preview/pr-XX/` resolve paths properly.
4. **Styling & Design System (`src/styles/global.css`)**:
   - Uses Tailwind CSS v4 `@theme` tokens:
     - `brand-bg`: `#f5f2ef`
     - `brand-primary`: `#a68d71`
     - `brand-secondary`: `#b28e65`
     - `brand-text`: `#737373`
   - Fonts: `font-nunito` (body), `font-alex-brush` (script headings), `font-antic-didone` (uppercase serif accents).
5. **Verification**:
   - Always run `npm run build` after making changes to verify there are no Astro, TypeScript, or content schema errors.
