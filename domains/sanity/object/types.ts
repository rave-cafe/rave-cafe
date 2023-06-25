import { type Selection, z } from 'groqd'

export const objectSelection = {
  _type: z.string(),
  _key: z.string(),
} satisfies Selection
