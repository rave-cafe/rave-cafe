import { z } from 'zod'

export const Post = z.object({
  title: z.string(),
  author: z.string(),
  body: z.string(),
  _createdAt: z.string(),
})

export const Posts = z.array(Post)

export type TPost = z.infer<typeof Post>
