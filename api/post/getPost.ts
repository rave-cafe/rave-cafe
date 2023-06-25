import 'server-only'

import { documentSelection } from 'api/sanity/document/types'
import { q } from 'groqd'

import { runQuery } from '../../sanity/lib/client'
import { postSelection } from './types'

async function getPost(slug: string) {
  const post = await runQuery(
    q('*')
      .filter(`_type == "post" && slug.current == "${slug}"`)
      .grab$({ ...documentSelection, ...postSelection })
      .slice(0)
  )

  return post
}

export type TGetPostResponse = Awaited<ReturnType<typeof getPost>>
export default getPost
