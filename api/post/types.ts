import { embedSelection } from 'api/embed/types'
import { documentSelection } from 'api/sanity/document/types'
import { objectSelection } from 'api/sanity/object/types'
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
