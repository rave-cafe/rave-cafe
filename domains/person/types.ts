import { documentSelection } from 'domains/sanity/document/types'
import { q, type Selection } from 'groqd'

export const personSelection = {
  ...documentSelection,
  name: q.string(),
  slug: q.slug('slug'),
  bio: q.contentBlocks().optional(),
  location: q.string().optional(),
} satisfies Selection
