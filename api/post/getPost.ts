import 'server-only'

import { clientFetch } from '../../sanity/lib/client'
import { buildPostQuery, Post, TPost } from './types'

async function getPost(slug: string) {
  const query = buildPostQuery(slug)
  const post = await clientFetch<TPost>(query)

  const parsedPost: TPost = Post.parse(post)

  return parsedPost
}

export default getPost
