import { z } from 'zod'

export const SanityBlock = z.object({
  marks: z.array(z.unknown()),
  text: z.string(),
  _key: z.string(),
  _type: z.string(),
})
