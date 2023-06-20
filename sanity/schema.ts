import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'post',
      type: 'document',
      title: 'Post',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'author',
          type: 'string',
          title: 'Author',
        },
        {
          name: 'body',
          type: 'text',
          title: 'Body',
        },
      ],
    },
  ],
}
