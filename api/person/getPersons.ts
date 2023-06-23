import 'server-only'

import { SanityDocument } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'

async function getPersons() {
  const persons = await runQuery(
    q('*', { isArray: true })
      .filterByType('person')
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
  )

  return persons
}

export type TGetPersonsResponse = Awaited<ReturnType<typeof getPersons>>
export default getPersons
