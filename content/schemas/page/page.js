export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required()
    },
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    },
    {
      type: 'text',
      name: 'lead',
      title: 'Lead'
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      }
    },
    {
      type: 'blockContent',
      name: 'body',
      title: 'Body'
    },
  ]
}
