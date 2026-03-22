import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const kurse = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kurse' }),
  schema: z.object({
    wochentag: z.string(),
    kursart: z.string(),
    uhrzeit: z.string(),
    kursstart: z.string(),
    kursende: z.string(),
    termine: z.number(),
    preis: z.number(),
    reihenfolge: z.number(),
  }),
});

export const collections = { kurse };
