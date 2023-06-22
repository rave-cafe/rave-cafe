import { sanityArrayOf } from 'api/sanity/array/types'
import { SanityBlock } from 'api/sanity/block/types'
import { SanityObject } from 'api/sanity/object/types'
import { z } from 'zod'

const PersonAttributes = z.object({
  name: z.string(),
  location: z.string(),
  bio: z.array(sanityArrayOf(SanityBlock)),
})

export const Person = SanityObject.merge(PersonAttributes)
