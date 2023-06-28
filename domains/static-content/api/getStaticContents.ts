import 'server-only'

import { runQuery } from 'domains/sanity/utils/client'
import { q } from 'groqd'

import { staticContentSelection } from '../types'

async function getStaticContents() {
  const staticContents = await runQuery(
    q('*', { isArray: true })
      .filterByType('staticContent')
      .grab$(staticContentSelection)
  )

  return staticContents
}

export type TGetStaticContentsResponse = Awaited<
  ReturnType<typeof getStaticContents>
>
export default getStaticContents
