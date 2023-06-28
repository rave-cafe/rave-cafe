import embedSchema from 'domains/embed/schema'
import personSchema from 'domains/person/schema'
import postSchema from 'domains/post/schema'
import staticContentSchema from 'domains/static-content/schema'
import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [embedSchema, postSchema, personSchema, staticContentSchema],
}
