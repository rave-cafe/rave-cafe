import { z } from 'zod'

export const Slug = z.object({
  current: z.string(),
  _type: z.literal('slug'),
})
