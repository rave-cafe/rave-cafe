import 'server-only'

import { clientFetch } from '../../sanity/lib/client'
import { Posts, postsQuery, TPost } from './types'

async function getPosts() {
  const posts = await clientFetch<TPost[]>(postsQuery)

  const parsedPosts: TPost[] = Posts.parse(posts)

  return parsedPosts
}

export default getPosts
