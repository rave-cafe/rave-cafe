import 'server-only'

import { runQuery } from 'domains/sanity/utils/client'
import { q } from 'groqd'

import { staticContentSelection } from '../types'

async function getStaticContent(slug: string) {
  const staticContent = await runQuery(
    q('*')
      .filter(`_type == "staticContent" && slug.current == "${slug}"`)
      .grab$(staticContentSelection)
      .slice(0)
  )
  console.log({ staticContent })

  return staticContent
}

export type TGetStaticContentResponse = Awaited<
  ReturnType<typeof getStaticContent>
>
export default getStaticContent
