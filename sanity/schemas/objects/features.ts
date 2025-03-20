export default {
  name: 'features',
  title: 'Work With The Best Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string', // "WORK WITH THE BEST"
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text', // "At Mad Software, we bring together..."
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' }, // "Experience", "Work", etc.
          { name: 'description', type: 'text' },
          { name: 'icon', type: 'image' },
        ]
      }]
    }
  ]
} 