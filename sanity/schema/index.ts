import { SchemaTypeDefinition } from 'sanity'

import bandcamp from './embeds/bandcamp'
import person from './person'
import post from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bandcamp, post, person],
}
