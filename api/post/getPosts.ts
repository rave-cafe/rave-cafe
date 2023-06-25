import 'server-only'

import { documentSelection } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'
import { postSelection } from './types'

async function getPosts() {
  const posts = await runQuery(
    q('*', { isArray: true })
      .filterByType('post')
      .grab$({ ...documentSelection, ...postSelection })
  )

  return posts
}

export type TGetPostsResponse = Awaited<ReturnType<typeof getPosts>>
export default getPosts
