import 'server-only'

import { clientFetch } from '../../sanity/lib/client'
import { Posts, TPost } from './types'

const query = `*[_type == "post"]`

export const getPosts = async () => {
  const posts = await clientFetch(query)
  const parsedPosts: TPost[] = Posts.parse(posts)

  return parsedPosts
}
