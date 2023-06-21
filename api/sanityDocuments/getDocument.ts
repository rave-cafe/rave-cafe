import 'server-only'

import { cache } from 'react'
import { SanityDocument } from 'sanity'

import { client } from '../../sanity/lib/client'

export const getDocument = cache(
  async <T extends SanityDocument>(id: string) => {
    const query = `*[_id == "${id}"][0]`
    return (await client.fetch(query)) as T | undefined
  }
)
