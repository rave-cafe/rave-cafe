import { ImageIcon } from '@sanity/icons'
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
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alternative text',
          description: `Describe the image to help screen readers`,
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'body',
      of: [
        { type: 'block' },
        { type: 'embed' },
        {
          type: 'image',
          icon: ImageIcon,
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alternative text',
              description: `Describe the image to help screen readers`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
      title: 'Body',
      type: 'array',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default post
