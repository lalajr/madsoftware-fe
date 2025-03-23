import { PortableTextBlock } from '@portabletext/types'

interface ImageAsset {
    url: string;
    alt?: string;
    caption?: string;
    dimensions?: {
        width: number;
        height: number;
    };
}

interface CustomIcon {
    _type: 'customIcon';
    icon: {
        asset: {
            url: string;
        };
    };
    size: 'sm' | 'md' | 'lg';
    alignment: 'left' | 'center' | 'right';
}

interface Divider {
    _type: 'divider';
    style: 'solid' | 'dashed' | 'dotted' | 'double';
    width: 'full' | 'md' | 'sm';
    spacing: 'sm' | 'md' | 'lg';
}

interface WhatWeOffer {
    title: string;
    description: string;
}

interface Benefit {
    title: string;
    description: string;
    icon: string;
}

export interface Service {
    _id: string;
    _type: 'service';
    title: string;
    slug: string;
    excerpt: string;
    description: Array<PortableTextBlock | ImageAsset | CustomIcon | Divider>;
    thumbnail: string;
    thumbnailAlt: string;
    banner: string;
    bannerAlt: string;
    whatWeOffer: WhatWeOffer[];
    benefits: Benefit[];
}

// Helper type for service preview data
export interface ServicePreview {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    thumbnail: {
        url: string;
        alt?: string;
    };
} 