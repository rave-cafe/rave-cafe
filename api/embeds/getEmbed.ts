import 'server-only'

import { SanityDocument } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'

async function getEmbed(albumId: number, trackId?: number) {
  const query = trackId
    ? `albumId == "${albumId}" && trackId == "${trackId}"`
    : `albumId == "${albumId}"`

  const embeds = await runQuery(
    q('*')
      .filter(`_type == "bandcamp" && ${query}`)
      .grab$({
        ...SanityDocument.shape,
        albumId: q.number(),
        trackId: q.number().optional(),
        posts: q('*', { isArray: true })
          .filter('_type == "post" && references(^._id)')
          .grab$({
            ...SanityDocument.shape,
            title: q.string(),
            slug: q.slug('slug'),
          }),
      })
      .slice(0)
  )

  return embeds
}

export type TGetEmbedResponse = Awaited<ReturnType<typeof getEmbed>>
export default getEmbed
