import { z } from 'zod'

export function sanityArrayOf<T extends z.ZodTypeAny>(type: T) {
  return z.object({
    style: z.string(),
    _key: z.string(),
    markDefs: z.array(z.unknown()),
    children: z.array(type),
    _type: z.string(),
  })
}
