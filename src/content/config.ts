import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  schema: z.object({
    category: z.string(),
    cover: z.string(),
    publishedAt: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
  type: 'content',
})

export const collections = {
  post: postCollection,
}
