import { SchemaTypeDefinition } from 'sanity'

const person: SchemaTypeDefinition = {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'bio',
      of: [{ type: 'block' }],
      title: 'Bio',
      type: 'array',
    },
  ],
}

export default person
