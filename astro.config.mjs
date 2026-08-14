// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const base = process.env.ASTRO_BASE || '/';

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://ninjaseidel.de',
  base: base,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
