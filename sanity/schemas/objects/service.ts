export const service = {
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                }
            ]
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'banner',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                }
            ]
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: 'A short summary of the service (max 160 characters)',
            validation: (Rule: any) => Rule.max(160)
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                        {title: 'Quote', value: 'blockquote'}
                    ],
                    marks: {
                        decorators: [
                            {title: 'Strong', value: 'strong'},
                            {title: 'Emphasis', value: 'em'},
                            {title: 'Code', value: 'code'},
                            {title: 'Underline', value: 'underline'},
                            {title: 'Strike', value: 'strike-through'},
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL'
                                    },
                                    {
                                        name: 'blank',
                                        type: 'boolean',
                                        title: 'Open in new tab',
                                        initialValue: true
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Important for SEO and accessibility.',
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }
                    ]
                },
                {
                    type: 'object',
                    name: 'customIcon',
                    title: 'Icon',
                    fields: [
                        {
                            name: 'icon',
                            type: 'image',
                            title: 'Icon Image',
                            options: {
                                accept: 'image/svg+xml,image/png,image/jpeg'
                            }
                        },
                        {
                            name: 'size',
                            type: 'string',
                            title: 'Size',
                            options: {
                                list: [
                                    {title: 'Small', value: 'sm'},
                                    {title: 'Medium', value: 'md'},
                                    {title: 'Large', value: 'lg'}
                                ]
                            },
                            initialValue: 'md'
                        },
                        {
                            name: 'alignment',
                            type: 'string',
                            title: 'Alignment',
                            options: {
                                list: [
                                    {title: 'Left', value: 'left'},
                                    {title: 'Center', value: 'center'},
                                    {title: 'Right', value: 'right'}
                                ]
                            },
                            initialValue: 'left'
                        }
                    ],
                    preview: {
                        select: {
                            image: 'icon',
                            size: 'size'
                        },
                        prepare({image, size}: any) {
                            return {
                                title: 'Icon',
                                subtitle: `Size: ${size}`,
                                media: image
                            }
                        }
                    }
                },
                {
                    type: 'object',
                    name: 'divider',
                    title: 'Divider',
                    fields: [
                        {
                            name: 'style',
                            type: 'string',
                            title: 'Style',
                            options: {
                                list: [
                                    {title: 'Solid', value: 'solid'},
                                    {title: 'Dashed', value: 'dashed'},
                                    {title: 'Dotted', value: 'dotted'},
                                    {title: 'Double', value: 'double'}
                                ]
                            },
                            initialValue: 'solid'
                        },
                        {
                            name: 'width',
                            type: 'string',
                            title: 'Width',
                            options: {
                                list: [
                                    {title: 'Full', value: 'full'},
                                    {title: 'Medium', value: 'md'},
                                    {title: 'Small', value: 'sm'}
                                ]
                            },
                            initialValue: 'full'
                        },
                        {
                            name: 'spacing',
                            type: 'string',
                            title: 'Spacing',
                            options: {
                                list: [
                                    {title: 'Small', value: 'sm'},
                                    {title: 'Medium', value: 'md'},
                                    {title: 'Large', value: 'lg'}
                                ]
                            },
                            initialValue: 'md'
                        }
                    ],
                    preview: {
                        prepare() {
                            return {
                                title: 'Divider'
                            }
                        }
                    }
                }
            ]
        },
    ]
} 