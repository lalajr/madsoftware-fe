import type { Rule } from '@sanity/types'

export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', 'publish', 'delete'],
  preview: {
    prepare: () => ({
      title: 'Site Settings'
    })
  },
  fields: [
    {
      name: 'footer',
      title: 'Footer Settings',
      type: 'object',
      fields: [
        {
          name: 'logo',
          title: 'Footer Logo',
          type: 'image'
        },
        {
          name: 'tagline',
          title: 'Footer Tagline',
          type: 'text'
        },
        {
          name: 'socialLinks',
          title: 'Social Media Links',
          type: 'object',
          fields: [
            {
              name: 'linkedin',
              title: 'LinkedIn URL',
              type: 'url'
            },
            {
              name: 'instagram',
              title: 'Instagram URL',
              type: 'url'
            },
            {
              name: 'twitter',
              title: 'X (Twitter) URL',
              type: 'url'
            }
          ]
        },
        {
          name: 'contact',
          title: 'Contact Information',
          type: 'object',
          fields: [
            {
              name: 'phone',
              title: 'Phone Number',
              type: 'string'
            },
            {
              name: 'address',
              title: 'Address',
              type: 'array',
              of: [{ type: 'string' }]
            },
          ]
        },
      ]
    },
    {
      name: 'otherServices',
      title: 'Other Services (Section)',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text'
        },
      ]
    },
    {
      name: 'meetTheTeam',
      title: 'Meet The Team (Section)',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text'
        },
      ]
    },
    {
      name: 'howToBecomeClient',
      title: 'How To Become A Client (Section)',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text'
        },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            { type: 'object', fields: [
                { name: 'title', title: 'Title', type: 'string' }, 
                { name: 'description', title: 'Description', type: 'text' },
                { name: 'cta', title: 'CTA', type: 'string' },
                { name: 'ctaUrl', title: 'CTA URL', type: 'string' }
              ]
            }
          ]
        },
      ]
    },
  ]
} 