export interface CareerContact {
    backgroundImage: {
        asset: {
            url: string;
        };
    };
    title: {
        mainText: string;
        highlightedText: string;
    };
    subtitle: string;
    ctaButton: {
        text: string;
        link: string;
    };
    contactForm_title: string;
    contactForm_subtitle: string;
}
