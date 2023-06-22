import { Person } from 'api/person/types'
import { sanityArrayOf } from 'api/sanity/array/types'
import { SanityBlock } from 'api/sanity/block/types'
import {
  groqProjection as documentProjection,
  SanityDocument,
} from 'api/sanity/document/types'
import { SanityReference } from 'api/sanity/reference/types'
import { Slug } from 'api/sanity/slug/types'
import { z } from 'zod'

/**
 * Exhaustive definition
 */
const PostAttributes = z.object({
  title: z.string(),
  author: SanityReference,
  slug: Slug,
  body: z.array(sanityArrayOf(SanityBlock)),
})

const _Post = SanityDocument.merge(PostAttributes)

/**
 * Query definitions
 */
const postProjection = `
  {
    ${documentProjection},
    title,
    body,
    slug,
    author->
  }
`
export const postsQuery = `*[_type == "post"]${postProjection}`
export function buildPostQuery(slug: string) {
  return `*[_type == "post"  && slug.current == "${slug}"]${postProjection}[0]`
}

export const Post = _Post.merge(z.object({ author: Person }))
export const Posts = z.array(Post)
export type TPost = z.infer<typeof Post>
