import { objectSelection } from 'domains/sanity/types'
import { q, type Selection, z } from 'groqd'

export const embedSelection = {
  ...objectSelection,
  url: q.string(),
  type: q.string(),
  embedCode: q.string().optional(),
} satisfies Selection

export type TEmbed = z.infer<z.ZodObject<typeof embedSelection>>
