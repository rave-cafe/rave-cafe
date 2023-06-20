import 'server-only'

import { cache } from 'react'
import { z } from 'zod'

import { client } from '../../sanity/lib/client'

const Post = z.object({
  title: z.string(),
  author: z.string(),
  body: z.string(),
  _createdAt: z.string(),
})

const Posts = z.array(Post)

const query = `*[_type == "post"]`

export const getPosts = cache(async () => {
  const posts = await client.fetch(query)
  return Posts.parse(posts)
})
