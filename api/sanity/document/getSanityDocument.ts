import 'server-only'

import { SanityDocument } from 'sanity'

import { clientFetch } from '../../../sanity/lib/client'

async function getSanityDocument<T extends SanityDocument>(id: string) {
  const query = `*[_id == "${id}"][0]`
  return await clientFetch<T | undefined>(query)
}

export default getSanityDocument
