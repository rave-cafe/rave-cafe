import { q, type Selection, z } from 'groqd'

const baseMarkdefsType = z
  .object({
    _type: z.string(),
    _key: z.string(),
  })
  .catchall(z.unknown())

export const contentBlockSelection = {
  _key: z.string(),
  _type: z.string(),
  text: z.string(),
  marks: z.array(z.string()),
} satisfies Selection

export function makeContentBlockQuery<T extends z.ZodType, U extends z.ZodType>(
  children: T,
  markDefs?: U
) {
  return z.object({
    _type: z.string(),
    _key: z.string().optional(),
    children: z.array(children),
    markDefs: z.array(markDefs || baseMarkdefsType).optional(),
    style: z.string().optional(),
    listItem: z.string().optional(),
    level: z.number().optional(),
  })
}
