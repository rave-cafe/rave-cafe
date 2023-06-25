import { embedSelection } from 'domains/embed/types'
import { documentSelection } from 'domains/sanity/types'
import { q, type Selection } from 'groqd'

export const postSelection = {
  ...documentSelection,
  title: q.string(),
  slug: q.slug('slug'),
  body: q.array(q.contentBlock().or(q.object(embedSelection))),
  author: q('author')
    .deref()
    .grab$({ name: q.string(), slug: q.slug('slug') }),
} satisfies Selection
