import { documentSelection } from 'api/sanity/document/types'
import { q, type Selection } from 'groqd'

export const embedSelection = {
  ...documentSelection,
  url: q.string(),
  embedCode: q.string().optional(),
} satisfies Selection
