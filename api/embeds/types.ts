import { relatedPostsQuery } from 'api/post/queries'
import { q, type Selection } from 'groqd'

export const embedSelection = {
  url: q.string().optional(),
  embedCode: q.string().optional(),
  posts: relatedPostsQuery,
} satisfies Selection
