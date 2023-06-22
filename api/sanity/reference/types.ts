import { z } from 'zod'

export const SanityReference = z.object({
  _weak: z.boolean(),
  _ref: z.string(),
  _type: z.literal('reference'),
})
