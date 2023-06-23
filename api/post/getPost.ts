import 'server-only'

import { SanityDocument } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'

async function getPost(slug: string) {
  const post = await runQuery(
    q('*')
      .filter(`_type == "post" && slug.current == "${slug}"`)
      .grab$({
        ...SanityDocument.shape,
        title: q.string(),
        slug: q.slug('slug'),
        body: q.contentBlocks(),
        author: q('author').deref().grabOne('name', q.string()),
      })
      .slice(0)
  )

  return post
}

export type TGetPostResponse = Awaited<ReturnType<typeof getPost>>
export default getPost
