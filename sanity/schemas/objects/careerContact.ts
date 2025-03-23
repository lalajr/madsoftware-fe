// Career Contact Background Schema
export const careerContact = {
  name: 'careerContactSection',
  title: 'Contact Form',
  type: 'document',
  // This makes the document singleton (only one instance allowed)
  __experimental_actions: [/*'create',*/ 'update', 'publish', 'delete'],
  // Add a custom preview to make it clear this is a singleton
  preview: {
    prepare: () => ({
      title: 'Contact Form'
    })
  },
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'mainText',
          title: 'Main Text',
          type: 'string'
        },
        {
          name: 'highlightedText',
          title: 'Highlighted Text (Red)',
          type: 'string'
        }
      ]
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text'
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string'
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string'
        }
      ]
    },
    {
      name: 'contactForm_title',
      title: 'Contact Form Title',
      type: 'string'
    },
    {
      name: 'contactForm_subtitle',
      title: 'Contact Form Subtitle',
      type: 'text'
    }
  ]
} 