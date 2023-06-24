import { SchemaTypeDefinition } from 'sanity'

import embed from './embed'
import person from './person'
import post from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [embed, post, person],
}
