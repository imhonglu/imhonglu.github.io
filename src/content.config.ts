import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    publishedAt: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ base: "./src/content/about", pattern: "**/*.{md,mdx}" }),
});

export const collections = { blog, about };
