import 'server-only'

import { SanityDocument } from 'sanity'

import { clientFetch } from '../../../sanity/lib/client'

async function getSanityDocument<T extends Record<string, any>>(
  id: string,
  projection: string = ''
) {
  const query = `*[_id == "${id}"]${projection}[0]`
  return await clientFetch<T | undefined>(query)
}

export default getSanityDocument
