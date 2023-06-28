import { SchemaTypeDefinition } from 'sanity'

const staticContent: SchemaTypeDefinition = {
  name: 'staticContent',
  title: 'Static content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        //Change to schema title to automatically populate
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'body',
      of: [{ type: 'block' }],
      title: 'Body',
      type: 'array',
    },
  ],
}

export default staticContent
