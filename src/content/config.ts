import { defineCollection, z } from "astro:content"

const postCollection = defineCollection({
	schema: z.object({
		category: z.union([z.literal("Code"), z.literal("Design"), z.literal("Life")]),
		publishedAt: z.date(),
		summary: z.string(),
		tags: z.array(z.string()).optional(),
		title: z.string(),
	}),
	type: "content",
})

export const collections = {
	post: postCollection,
}
