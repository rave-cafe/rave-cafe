import 'server-only'

import { q } from 'groqd'

import { runQuery } from '../../sanity/utils/client'
import { postSelection } from '../types'

async function getPosts() {
  const posts = await runQuery(
    q('*', { isArray: true }).filterByType('post').grab$(postSelection)
  )

  return posts
}

export type TGetPostsResponse = Awaited<ReturnType<typeof getPosts>>
export default getPosts
