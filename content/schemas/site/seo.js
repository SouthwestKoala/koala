export default {
  type: 'object',
  name: 'seo',
  title: 'SEO',
  fields: [
    {
      type: 'text',
      name: 'description',
      title: 'Description',
    },
    {
      type: 'array',
      name: 'keywords',
      title: 'Keywords',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags'
      },
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
}