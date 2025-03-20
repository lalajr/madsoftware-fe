export default {
  name: 'workSection',
  title: 'Work Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' },
          { name: 'image', type: 'image' },
          { name: 'link', type: 'url' },
        ]
      }]
    }
  ]
} 