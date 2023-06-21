import 'server-only'

import { clientFetch } from '../../sanity/lib/client'
import { getPostsQuery, Posts, TPost } from './types'

async function getPosts() {
  const posts = await clientFetch<TPost[]>(getPostsQuery)

  const parsedPosts: TPost[] = Posts.parse(posts)

  return parsedPosts
}

export default getPosts
