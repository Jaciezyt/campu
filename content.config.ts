import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      // Define custom schema for docs collection
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string().optional(),
        author: z.object({
          name: z.string(),

        }),
        category: z.string(),
        tags: z.array(z.string()),
        cover: z.string().optional(),
        pinned: z.number().optional(),
        created: z.date(),
        updated: z.date().optional(),
      }),
    }),
  },
});
