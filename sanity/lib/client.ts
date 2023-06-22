import { createClient } from 'next-sanity'
import { cache } from 'react'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

// Wrap the Sanity fetch with React cache to dedupe requests app-wide
export const clientFetch: <R>(query: string) => Promise<R> = cache(
  client.fetch.bind(client)
)
