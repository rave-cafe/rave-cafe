import 'server-only'

import { relatedPostsQuery } from 'domains/post/queries'
import { runQuery } from 'domains/sanity/utils/client'
import { q } from 'groqd'

import { embedSelection } from '../types'

async function getEmbed(id: string) {
  const embeds = await runQuery(
    q('*')
      .filter(`_type == "embed" && _id == "${id}"`)
      .grab$({
        ...embedSelection,
        posts: relatedPostsQuery,
      })
      .slice(0)
  )

  return embeds
}

export type TGetEmbedResponse = Awaited<ReturnType<typeof getEmbed>>
export default getEmbed
