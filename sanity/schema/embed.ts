import { SchemaTypeDefinition } from 'sanity'

import InputEmbedType from '../../sanity/components/InputEmbedType'

const iframe: SchemaTypeDefinition = {
  name: 'embed',
  title: 'Embedded media',
  type: 'document',
  fields: [
    {
      name: 'url',
      title: 'URL',
      description:
        'The URL to the content. Make sure the linked service is identified correctly in the "Type" field, or your content might not display correctly. If your service is not listed, make a request to the dev team!',
      type: 'url',
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context.document?.embedCode === undefined && field === undefined
            ? 'Either "URL" or "Embed code" must have a value.'
            : true
        ),
    },
    {
      name: 'embedCode',
      title: 'Embed code',
      description:
        'The embed HTML, generally copy/pasted from the source website, e.g. Bandcamp "Share/Embed" button.',
      type: 'text',
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context.document?.url === undefined && field === undefined
            ? 'Either "URL" or "Embed code" must have a value.'
            : true
        ),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      components: {
        input: InputEmbedType,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default iframe
