import { sanityArrayOf } from 'api/sanity/array/types'
import { SanityBlock } from 'api/sanity/block/types'
import { SanityDocument } from 'api/sanity/document/types'
import { z } from 'zod'

const PersonAttributes = z.object({
  name: z.string(),
  location: z.string(),
  bio: z.array(sanityArrayOf(SanityBlock)),
})

export const Person = SanityDocument.merge(PersonAttributes)
