import { SanityDocument } from 'api/sanityDocuments/types'
import { z } from 'zod'

const PostAttributes = z.object({
  title: z.string(),
  author: z.string(),
  body: z.string(),
})

export const Post = z.intersection(PostAttributes, SanityDocument)

export const Posts = z.array(Post)

export type TPost = z.infer<typeof Post>
