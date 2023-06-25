import 'server-only'

import { relatedPostsQuery } from 'domains/post/queries'
import { runQuery } from 'domains/sanity/utils/client'
import { q } from 'groqd'

import { personSelection } from '../types'

async function getPersons() {
  const persons = await runQuery(
    q('*', { isArray: true })
      .filterByType('person')
      .grab$({
        ...personSelection,
        posts: relatedPostsQuery.slice(0, 5),
      })
  )

  return persons
}

export type TGetPersonsResponse = Awaited<ReturnType<typeof getPersons>>
export default getPersons
