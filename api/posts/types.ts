import { Person } from 'api/people/types'
import { sanityArrayOf } from 'api/sanity/arrays/types'
import { SanityBlock } from 'api/sanity/blocks/types'
import { SanityDocument } from 'api/sanity/documents/types'
import { SanityReference } from 'api/sanity/references/types'
import { z } from 'zod'

/**
 * Exhaustive definition
 */
const PostAttributes = z.object({
  title: z.string(),
  author: SanityReference,
  body: z.array(sanityArrayOf(SanityBlock)),
})

const Post = SanityDocument.merge(PostAttributes)

/**
 * Query definitions
 */

export const getPostsQuery = `*[_type == "post"]{
  _id,
  title,
  body,
  author->
}`

const PostPick = Post.pick({ _id: true, title: true, body: true })

const PostRes = PostPick.merge(z.object({ author: Person }))
export const Posts = z.array(PostRes)
export type TPost = z.infer<typeof PostRes>
