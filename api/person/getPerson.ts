import 'server-only'

import { relatedPostsQuery } from 'api/post/queries'
import { documentSelection } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'
import { personSelection } from './types'

async function getPerson(slug: string) {
  const person = await runQuery(
    q('*')
      .filter(`_type == "person" && slug.current == "${slug}"`)
      .grab$({
        ...personSelection,
        posts: relatedPostsQuery,
      })
      .slice(0)
  )

  return person
}

export type TGetPersonResponse = Awaited<ReturnType<typeof getPerson>>
export default getPerson
