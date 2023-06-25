import 'server-only'

import { runQuery } from 'domains/sanity/utils/client'
import { q } from 'groqd'

import { embedSelection } from '../types'

async function getEmbeds() {
  const embeds = await runQuery(
    q('*', { isArray: true }).filter('_type == "embed"').grab$(embedSelection)
  )

  return embeds
}

export type TGetEmbedsResponse = Awaited<ReturnType<typeof getEmbeds>>
export default getEmbeds
