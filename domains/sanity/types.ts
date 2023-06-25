import { q, type Selection } from 'groqd'

export const objectSelection = {
  _type: q.string(),
  _key: q.string(),
} satisfies Selection

export const documentSelection = {
  _id: q.string(),
  _createdAt: q.string(),
  _updatedAt: q.string(),
  _rev: q.string(),
  _type: q.string(),
} satisfies Selection
