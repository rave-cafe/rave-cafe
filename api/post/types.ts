import { documentSelection } from 'api/sanity/document/types'
import { q, type Selection } from 'groqd'

export const postSelection = {
  ...documentSelection,
  title: q.string(),
  slug: q.slug('slug'),
  body: q.contentBlocks(),
  author: q('author')
    .deref()
    .grab$({ name: q.string(), slug: q.slug('slug') }),
} satisfies Selection
