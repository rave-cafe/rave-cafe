import { documentSelection } from 'api/sanity/document/types'
import { q, type Selection } from 'groqd'

export const embedSelectionMinimal = {
  url: q.string(),
  type: q.string(),
  embedCode: q.string().optional(),
} satisfies Selection

export const embedSelection = {
  ...documentSelection,
  ...embedSelectionMinimal,
} satisfies Selection
