import { CodeBlockIcon } from '@sanity/icons'
import { SchemaTypeDefinition } from 'sanity'

import InputEmbedType from '../../sanity/components/InputEmbedType'

const iframe: SchemaTypeDefinition = {
  name: 'embed',
  title: 'Embed',
  type: 'object',
  icon: CodeBlockIcon,
  fields: [
    {
      name: 'url',
      title: 'URL',
      description:
        'The URL to the content. Make sure the linked service is identified correctly in the "Type" field, or your content might not display correctly. If your service is not listed, make a request to the dev team!',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'embedCode',
      title: 'Embed code (optional)',
      description:
        'The embed HTML, generally copy/pasted from the source website, e.g. Bandcamp "Share/Embed" button.',
      type: 'text',
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
