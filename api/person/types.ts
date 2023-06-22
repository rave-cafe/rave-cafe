import { SanityDocument } from 'api/sanity/document/types'
import { q } from 'groqd'

const PersonAttributes = q.object({
  name: q.string(),
  location: q.string(),
  bio: q.contentBlocks(),
})

export const Person = SanityDocument.merge(PersonAttributes)
