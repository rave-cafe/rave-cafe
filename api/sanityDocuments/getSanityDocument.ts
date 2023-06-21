import 'server-only'

import { cache } from 'react'
import { SanityDocument } from 'sanity'

import { clientFetch } from '../../sanity/lib/client'

const getSanityDocument = async <T extends SanityDocument>(id: string) => {
  const query = `*[_id == "${id}"][0]`
  return await clientFetch<T | undefined>(query)
}

export default getSanityDocument
