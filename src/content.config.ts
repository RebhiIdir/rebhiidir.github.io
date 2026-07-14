import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const research = defineCollection({
  loader: glob({ base: "./src/content/research", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    links: z.array(linkSchema).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
    technologies: z.array(z.string()).default([]),
    links: z.array(linkSchema).default([]),
  }),
});

export const collections = { research, projects };
