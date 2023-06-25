import { embedSelection } from 'api/embeds/types'
import {
  contentBlockSelection,
  makeContentBlockQuery,
} from 'api/sanity/contentBlock/types'
import { q, type Selection } from 'groqd'

export const postSelection = {
  title: q.string(),
  slug: q.slug('slug'),
  body: q.array(
    makeContentBlockQuery(
      // A union type of all the possible values of the `body` array:
      // Content Block
      q.object(contentBlockSelection).or(
        // Embed
        q.object(embedSelection)
      )
    )
  ),
  author: q('author')
    .deref()
    .grab$({ name: q.string(), slug: q.slug('slug') }),
} satisfies Selection
