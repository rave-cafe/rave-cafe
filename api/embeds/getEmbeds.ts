import 'server-only'

import { SanityDocument } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'

async function getEmbeds() {
  const embeds = await runQuery(
    q('*', { isArray: true })
      .filter('_type == "bandcamp"')
      .grab$({
        ...SanityDocument.shape,
        trackId: q.number(),
        albumId: q.number().optional(),
        posts: q('*', { isArray: true })
          .filter('_type == "post" && references(^._id)')
          .grab$({
            ...SanityDocument.shape,
            title: q.string(),
            slug: q.slug('slug'),
          }),
      })
  )

  return embeds
}

export type TGetEmbedsResponse = Awaited<ReturnType<typeof getEmbeds>>
export default getEmbeds
