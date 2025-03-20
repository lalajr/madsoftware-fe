export default {
  name: 'trustedBrands',
  title: 'Trusted Brands Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string', // "TRUSTED BY THE BEST"
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text', // "From startups to big companies..."
    },
    {
      name: 'brands',
      title: 'Brand Logos',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string' },
          { name: 'logo', type: 'image' },
          { name: 'link', type: 'url' },
        ]
      }]
    }
  ]
} 