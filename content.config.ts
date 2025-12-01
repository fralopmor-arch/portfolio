import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        publishedAt: z.string().optional(),
        date: z.string().optional(),
      }),
    }),
  },
});
