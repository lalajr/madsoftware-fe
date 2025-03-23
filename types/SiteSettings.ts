export type SiteSettings = {
    footer: {
        logo: string;
        tagline: string;
        socialLinks: {
            linkedin: string;
            instagram: string;
            twitter: string;
        };
        contact: {
            phone: string;
            address: string[];
        };
    },
    otherServices: SectionHeading;
    meetTheTeam: SectionHeading;
    howToBecomeClient: HowToBecomeClient;
} 

export type SectionHeading = {
    title: string;
    subtitle: string;
}

export type HowToBecomeClient = {
    title: string;
    subtitle: string;
    steps: Step[];
}

export type Step = {
    title: string;
    description: string;
    cta: string;
    ctaUrl: string;
}
