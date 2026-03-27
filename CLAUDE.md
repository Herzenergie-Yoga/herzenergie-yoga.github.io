# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build locally
```

## Architecture

This is an [Astro](https://astro.build) static site deployed to GitHub Pages at `herzenergie-yoga.github.io`.

**Pages** live in `src/pages/` as `.md` files (or `.astro` for dynamic pages) with frontmatter. Each file maps directly to a route:
- `index.md` → `/`
- `about.md` → `/about`
- `kurse/index.astro` → `/kurse` (dynamic Astro component)
- `agb.md` → `/agb`
- `kontakt.md` → `/kontakt`

All `.md` pages use `layout: ../layouts/Layout.astro` and must set a `title` in frontmatter.

**Single layout** (`src/layouts/Layout.astro`) handles everything: navigation, header image, main content via `<slot />`, and footer. Nav links are hardcoded in the `navItems` array in that file.

**Styling** uses Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, no `tailwind.config.js`) with the `@tailwindcss/typography` plugin for Markdown prose rendering. Brand tokens are defined in `src/styles/global.css` under `@theme`:
- Colors: `brand-bg` (#f5f2ef), `brand-primary` (#a68d71), `brand-secondary` (#b28e65), `brand-text` (#737373)
- Fonts: `font-nunito`, `font-alex-brush`, `font-antic-didone` (loaded from Google Fonts in the layout)

**Animations**: Astro's `<ClientRouter />` enables view transitions. Scroll-reveal animations are applied to `.prose > *` elements via IntersectionObserver in the layout's inline script. The header image has a slow zoom-out animation on page load.

**Content** is written in German. The site represents a yoga studio in Georgsmarienhütte offering courses at Physiopraxis Lina Eichler in Kloster Oesede.
