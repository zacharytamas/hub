import { z, defineCollection } from 'astro:content'

const writingsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lastUpdated: z.date().optional(),
    showDate: z.boolean().default(false),
    evergreen: z.boolean().default(false),
  }),
})

export const collections = {
  writings: writingsCollection,
}
