import 'server-only'

import { relatedPostsQuery } from 'api/post/queries'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'
import { personSelection } from './types'

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
