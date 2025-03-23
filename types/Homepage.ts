export interface Hero {
    backgroundImages: {
        url: string
    }[];
    title: {
        highlightedText: string;
        mainText: string;
    };
    subtitle: string;
    ctaButton: {
        text: string;
        link: string;
    };
}

export interface Clients {
    title: {
        highlightedText: string;
        mainText: string;
    };
    subtitle: string;
    clients: Array<{
        name: string;
        logo: string;
    }>;
}

export interface WorkWithBest {
    title: string;
    subtitle: string;
    features: Array<{
        title: string;
        description: string;
        icon: 'experience' | 'work' | 'industry' | 'quality';
        column: 'left' | 'right';
    }>;
    ctaButton: {
        text: string;
        link: string;
    };
}

export interface WhatWeDoService {
    title: string;
    description: string;
    image: string;
    direction: 'left' | 'right' | 'top' | 'bottom';
}

export interface WhatWeDo {
    title: string;
    subtitle: string;
    // services: WhatWeDoService[];
}

export interface CaseStudies {
    title: string;
    subtitle: string;
    studies: Array<{
        category: string;
        title: string;
        description: string;
        image: {
            asset: {
                url: string;
            };
        };
    }>;
    ctaButton: {
        text: string;
        link: string;
    };
}

export interface Homepage {
    hero: Hero;
    clientsSection: Clients;
    workWithBestSection: WorkWithBest;
    whatWeDoSection: WhatWeDo;
    caseStudiesSection: CaseStudies;
}