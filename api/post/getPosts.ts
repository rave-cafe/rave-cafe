import 'server-only'

import { SanityDocument } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'

async function getPosts() {
  const posts = await runQuery(
    q('*', { isArray: true })
      .filterByType('post')
      .grab$({
        ...SanityDocument.shape,
        title: q.string(),
        slug: q.slug('slug'),
        body: q.contentBlocks(),
        author: q('author')
          .deref()
          .grab$({ name: q.string(), slug: q.slug('slug') }),
      })
  )

  return posts
}

export type TGetPostsResponse = Awaited<ReturnType<typeof getPosts>>
export default getPosts
