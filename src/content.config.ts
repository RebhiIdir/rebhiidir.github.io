import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const researchSchema = z.object({
  title: z.string(),
  summary: z.string(),
  status: z.string(),
  date: z.string(),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  collaborators: z.array(z.string()).default([]),
  links: z.array(linkSchema).default([]),
});

const projectSchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.string(),
  featured: z.boolean().default(false),
  technologies: z.array(z.string()).default([]),
  collaborators: z.array(z.string()).default([]),
  links: z.array(linkSchema).default([]),
});

const research = defineCollection({
  loader: glob({ base: "./src/content/research", pattern: "**/*.{md,mdx}" }),
  schema: researchSchema,
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: projectSchema,
});

const researchFr = defineCollection({
  loader: glob({ base: "./src/content/research-fr", pattern: "**/*.{md,mdx}" }),
  schema: researchSchema,
});

const projectsFr = defineCollection({
  loader: glob({ base: "./src/content/projects-fr", pattern: "**/*.{md,mdx}" }),
  schema: projectSchema,
});

export const collections = { research, projects, researchFr, projectsFr };
