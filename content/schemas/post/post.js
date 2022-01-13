export default {
  type: 'document',
  name: 'post',
  title: 'Post',
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
      type: 'array',
      name: 'tags',
      title: 'Tags',
      of: [
        {
          type: 'string',
          name: 'tag',
          title: 'Tag',
        }
      ],
      options: {
        layout: 'tags'
      },
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
    {
      type: 'date',
      name: 'publishedAt',
      title: 'Published at',
      validation: Rule => Rule.required()
    },
  ]
}
