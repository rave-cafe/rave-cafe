import { objectSelection } from 'api/sanity/object/types'
import { q, type Selection } from 'groqd'

export const embedSelection = {
  ...objectSelection,
  url: q.string(),
  type: q.string(),
  embedCode: q.string().optional(),
} satisfies Selection
