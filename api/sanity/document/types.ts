import { q } from 'groqd'

export const SanityDocument = q.object({
  _id: q.string(),
  _createdAt: q.string(),
  _updatedAt: q.string(),
  _rev: q.string(),
  _type: q.string(),
})
