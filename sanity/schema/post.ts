import { SchemaTypeDefinition } from 'sanity'

const post: SchemaTypeDefinition = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      to: [{ type: 'person' }],
      type: 'reference',
      weak: true,
    },
    {
      name: 'body',
      of: [{ type: 'block' }],
      title: 'Body',
      type: 'array',
    },
  ],
}

export default post
