export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'object',
      fields: [
        { name: 'emphasisText', type: 'string', title: 'Emphasis Text' }, // "EXPERT"
        { name: 'mainText', type: 'string', title: 'Main Text' }, // "SOFTWARE DEVELOPMENT"
      ]
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text', // "Unleashing Meticulous Engineering Genius..."
    },
    {
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'object',
      fields: [
        { name: 'text', type: 'string' }, // "Get it Now!"
        { name: 'link', type: 'string' },
      ]
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    }
  ]
} 