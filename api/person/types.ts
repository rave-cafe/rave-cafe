import { q, type Selection } from 'groqd'

export const personSelection = {
  name: q.string(),
  slug: q.slug('slug'),
  bio: q.contentBlocks().optional(),
  location: q.string().optional(),
} satisfies Selection
