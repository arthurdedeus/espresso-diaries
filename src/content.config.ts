import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(), titlePt: z.string(), date: z.coerce.date(), excerpt: z.string(), excerptPt: z.string(), pullQuote: z.string().optional(), pullQuotePt: z.string().optional(), storyPt: z.array(z.string()), heroImage: z.string().optional(),
    coffee: z.object({ beans: z.string(), roaster: z.string().optional(), origin: z.string().optional(), dose: z.number(), yield: z.number(), extractionTime: z.number(), grind: z.union([z.string(), z.number()]).optional() }),
    milk: z.object({ amount: z.number().optional(), type: z.string().optional(), typePt: z.string().optional(), temperature: z.number().optional() }).optional(),
    equipment: z.object({ machine: z.string().optional(), grinder: z.string().optional(), basket: z.string().optional() }).optional(),
    latteArt: z.object({ pattern: z.string().optional(), patternPt: z.string().optional(), notes: z.string().optional() }).optional(),
    nextTime: z.array(z.string()).default([]), nextTimePt: z.array(z.string()).default([]), images: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
  }),
});
export const collections = { posts };
