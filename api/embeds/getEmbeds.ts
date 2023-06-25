import 'server-only'

import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'
import { embedSelection } from './types'

async function getEmbeds() {
  const embeds = await runQuery(
    q('*', { isArray: true }).filter('_type == "embed"').grab$(embedSelection)
  )

  return embeds
}

export type TGetEmbedsResponse = Awaited<ReturnType<typeof getEmbeds>>
export default getEmbeds
