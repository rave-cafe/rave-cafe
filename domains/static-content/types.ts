import { documentSelection } from 'domains/sanity/types'
import { q, type Selection } from 'groqd'

export const staticContentSelection = {
  ...documentSelection,
  title: q.string(),
  slug: q.slug('slug'),
  body: q.contentBlocks(),
} satisfies Selection
