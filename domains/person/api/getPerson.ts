import 'server-only'

import { relatedPostsQuery } from 'domains/post/queries'
import { runQuery } from 'domains/sanity/utils/client'
import { q } from 'groqd'

import { personSelection } from '../types'

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
