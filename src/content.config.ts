import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cvCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cv" }),
  schema: z.object({
    // Optional frontmatter schema
  }).optional(),
});

export const collections = {
  'cv': cvCollection,
};
