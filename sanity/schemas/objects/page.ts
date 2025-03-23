import { Rule } from "sanity";

export const page = {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'internalName',
      title: 'Internal Name',
      type: 'string',
      options: {
        list: [
          { title: 'About Us', value: 'aboutUs' },
          { title: 'Services', value: 'services' },
          { title: 'Case Studies', value: 'caseStudies' },
          { title: 'Blog', value: 'blog' },
          { title: 'Knowledge Base', value: 'knowledgeBase' },
          { title: 'Careers', value: 'careers' },
          { title: 'Get In Touch', value: 'getInTouch' }
        ]
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'mainText',
          title: 'Main Text (White)',
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
      name: 'blocks',
      title: 'Page Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pageBlock',
          fields: [
            {
              name: 'blockType',
              title: 'Block Type',
              type: 'string',
              options: {
                list: [
                  'paragraph',
                  'twoColumnParagraph',
                  'statistics',
                  'getInTouch',
                  'banner'
                ]
              },
              validation: (Rule: Rule) => Rule.required()
            },
            // Paragraph Fields
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }],
              hidden: ({ parent }) => parent?.blockType !== 'paragraph'
            },
            // Two Column Paragraph Fields
            {
              name: 'leftColumn',
              title: 'Left Column',
              type: 'array',
              of: [{ type: 'block' }],
              hidden: ({ parent }) => parent?.blockType !== 'twoColumnParagraph'
            },
            {
              name: 'rightColumn',
              title: 'Right Column',
              type: 'array',
              of: [{ type: 'block' }],
              hidden: ({ parent }) => parent?.blockType !== 'twoColumnParagraph'
            },
            // Statistics Fields
            {
              name: 'statistics',
              title: 'Statistics',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  {
                    name: 'count',
                    title: 'Count',
                    type: 'string'
                  },
                  {
                    name: 'label',
                    title: 'Label',
                    type: 'string'
                  }
                ]
              }],
              validation: (Rule: Rule) => 
                Rule.custom((stats, context) => {
                  if (context.parent?.blockType !== 'statistics') return true;
                  return stats?.length === 3 ? true : 'Must have exactly 3 statistics';
                }),
              hidden: ({ parent }) => parent?.blockType !== 'statistics'
            },
            // Get in Touch Fields
            {
              name: 'email',
              title: 'Email',
              type: 'string',
              hidden: ({ parent }) => parent?.blockType !== 'getInTouch'
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string',
              hidden: ({ parent }) => parent?.blockType !== 'getInTouch'
            },
            {
              name: 'office',
              title: 'Office',
              type: 'string',
              hidden: ({ parent }) => parent?.blockType !== 'getInTouch'
            },
            // Banner Fields
            {
              name: 'image',
              title: 'Banner Image',
              type: 'image',
              options: {
                hotspot: true
              },
              hidden: ({ parent }) => parent?.blockType !== 'banner'
            }
          ]
        }
      ]
    }
  ]
} 