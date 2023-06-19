import 'server-only'

import { cache } from 'react'

import { client } from '../../sanity/lib/client'

export const getPosts = cache(async () => {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
})
