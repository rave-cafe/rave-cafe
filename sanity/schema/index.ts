import { SchemaTypeDefinition } from 'sanity'

import person from './person'
import post from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, person],
}
