import { Person } from 'api/person/types'
import { sanityArrayOf } from 'api/sanity/array/types'
import { SanityBlock } from 'api/sanity/block/types'
import { SanityDocument } from 'api/sanity/document/types'
import { SanityReference } from 'api/sanity/reference/types'
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

export const postProjection = `
  {
    _id,
    title,
    body,
    author->
  }
`

export const getPostsQuery = `*[_type == "post"]${postProjection}`

const PostPick = Post.pick({ _id: true, title: true, body: true })

const PostRes = PostPick.merge(z.object({ author: Person }))
export const Posts = z.array(PostRes)
export type TPost = z.infer<typeof PostRes>
