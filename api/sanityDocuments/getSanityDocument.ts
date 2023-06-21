import 'server-only'

import { cache } from 'react'
import { SanityDocument } from 'sanity'

import { client } from '../../sanity/lib/client'

const getSanityDocument = cache(
  async <T extends SanityDocument>(id: string) => {
    const query = `*[_id == "${id}"]`
    return (await client.fetch(query)) as T | undefined
  }
)

export default getSanityDocument
