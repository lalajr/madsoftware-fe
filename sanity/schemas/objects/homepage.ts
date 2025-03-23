import { Rule } from "sanity";

export const homepage = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  // This makes the document singleton (only one instance allowed)
  __experimental_actions: [/*'create',*/ 'update', 'publish', 'delete'],
  // Add a custom preview to make it clear this is a singleton
  preview: {
    prepare: () => ({
      title: 'Homepage Content'
    })
  },
  fields: [
    // Hero Section
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'backgroundImages',
          title: 'Background Images',
          type: 'array',
          of: [{ type: 'image' }],
          validation: (Rule: Rule) => Rule.min(1)
        },
        {
          name: 'title',
          title: 'Title',
          type: 'object',
          fields: [
            {
              name: 'highlightedText',
              title: 'Highlighted Text (Red)',
              type: 'string'
            },
            {
              name: 'mainText',
              title: 'Main Text (White)',
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
        }
      ]
    },

    // Clients Section
    {
      name: 'clientsSection',
      title: 'Clients Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'object',
          fields: [
            {
              name: 'highlightedText',
              title: 'Highlighted Text (Red)',
              type: 'string'
            },
            {
              name: 'mainText',
              title: 'Main Text (White)',
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
          name: 'clients',
          title: 'Client Logos',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Client Name',
                type: 'string'
              },
              {
                name: 'logo',
                title: 'Client Logo',
                type: 'image'
              }
            ]
          }]
        }
      ]
    },

    // Work With Best Section
    {
      name: 'workWithBestSection',
      title: 'Work With The Best Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text'
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Feature Title',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Feature Description',
                type: 'text'
              },
              {
                name: 'icon',
                title: 'Icon Type',
                type: 'string',
                options: {
                  list: [
                    'experience',
                    'work',
                    'industry',
                    'quality'
                  ]
                }
              },
              {
                name: 'column',
                title: 'Column Position',
                type: 'string',
                options: {
                  list: [
                    'left',
                    'right'
                  ]
                }
              }
            ]
          }]
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
        }
      ]
    },

    // What We Do Section
    {
      name: 'whatWeDoSection',
      title: 'What We Do Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text'
        },
      ]
    },

    // Case Studies Section
    {
      name: 'caseStudiesSection',
      title: 'Case Studies Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text'
        },
        {
          name: 'studies',
          title: 'Case Studies',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'category',
                title: 'Category',
                type: 'string'
              },
              {
                name: 'title',
                title: 'Case Study Title',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text'
              },
              {
                name: 'image',
                title: 'Case Study Image',
                type: 'image',
                options: {
                  hotspot: true
                }
              }
            ]
          }]
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
        }
      ]
    }
  ]
} 