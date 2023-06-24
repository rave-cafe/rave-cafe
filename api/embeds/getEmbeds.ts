import 'server-only'

import { documentSelection } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'
import { embedSelection } from './types'

async function getEmbeds() {
  const embeds = await runQuery(
    q('*', { isArray: true })
      .filter('_type == "embed"')
      .grab$({
        ...documentSelection,
        ...embedSelection,
      })
  )

  return embeds
}

export type TGetEmbedsResponse = Awaited<ReturnType<typeof getEmbeds>>
export default getEmbeds
