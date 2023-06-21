import 'server-only'

import { cache } from 'react'

import { client } from '../../sanity/lib/client'
import { Posts, TPost } from './types'

const query = `*[_type == "post"]`

export const getPosts = cache(async () => {
  const posts = await client.fetch(query)
  const parsedPosts: TPost[] = Posts.parse(posts)

  return parsedPosts
})
