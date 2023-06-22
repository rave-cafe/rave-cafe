import { z } from 'zod'

export const SanityDocument = z.object({
  _id: z.string(),
  _createdAt: z.string(),
  _updatedAt: z.string(),
  _rev: z.string(),
  _type: z.string(),
})

const keys = Object.keys(SanityDocument.shape)

export const groqProjection = keys.join(', ')
