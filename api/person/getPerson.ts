import 'server-only'

import { SanityDocument } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'

async function getPerson(slug: string) {
  const person = await runQuery(
    q('*')
      .filter(`_type == "person" && slug.current == "${slug}"`)
      .grab$({
        ...SanityDocument.shape,
        name: q.string(),
        slug: q.slug('slug'),
        bio: q.contentBlocks().optional(),
        location: q.string().optional(),
        posts: q('*', { isArray: true })
          .filter('_type == "post" && references(^._id)')
          .grab$({
            ...SanityDocument.shape,
            title: q.string(),
            slug: q.slug('slug'),
          }),
      })
      .slice(0)
  )

  return person
}

export type TGetPersonResponse = Awaited<ReturnType<typeof getPerson>>
export default getPerson
