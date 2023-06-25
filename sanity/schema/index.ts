import embedSchema from 'api/embed/schema'
import personSchema from 'api/person/schema'
import postSchema from 'api/post/schema'
import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [embedSchema, postSchema, personSchema],
}
