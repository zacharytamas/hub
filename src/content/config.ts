import { z, defineCollection } from 'astro:content'

const tags = z.enum(['typescript', 'website', 'thoughts', 'personal'])

const writingsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lastUpdated: z.date().optional(),
    showDate: z.boolean().default(false),
    evergreen: z.boolean().default(false),
    tags: z.array(tags),
  }),
})

export const collections = {
  writings: writingsCollection,
}
