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
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default post
