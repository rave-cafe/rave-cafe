import { sanityArrayOf } from 'api/sanity/arrays/types'
import { SanityBlock } from 'api/sanity/blocks/types'
import { SanityDocument } from 'api/sanity/documents/types'
import { z } from 'zod'

const PersonAttributes = z.object({
  name: z.string(),
  location: z.string(),
  bio: z.array(sanityArrayOf(SanityBlock)),
})

export const Person = SanityDocument.merge(PersonAttributes)
