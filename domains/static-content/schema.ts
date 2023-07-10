import { SchemaTypeDefinition } from 'sanity'

const staticContentSchema: SchemaTypeDefinition = {
  name: 'staticContent',
  title: 'Static content',
  type: 'document',
  description:
    'Static site copy/pages, optionally accessible by slug as the top-level route (e.g. localhost:3000/[slug])',
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
      of: [{ type: 'block', validation: (Rule) => Rule.required() }],
      title: 'Body',
      type: 'array',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default staticContentSchema
