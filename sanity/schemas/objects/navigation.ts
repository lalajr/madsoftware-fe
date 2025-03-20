import { Rule } from '@sanity/types';

// Regular navigation item
export const navigationItem = {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'isDropdown',
      title: 'Is Dropdown Menu?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'dropdownItems',
      title: 'Dropdown Items',
      type: 'array',
      hidden: ({ document }: { document: Record<string, any> }) => !document?.isDropdown,
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: Rule) => Rule.required()
          },
          {
            name: 'link',
            title: 'Link',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
          }
        ]
      }]
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}

// Main navigation schema
export const navigation = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
      description: 'For internal reference (e.g., "Main Navigation")'
    },
    {
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'navigationItem' }]
        }
      ]
    }
  ]
}