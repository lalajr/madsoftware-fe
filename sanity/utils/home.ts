import { groq } from "next-sanity";
import { client } from "@/sanity/config/client-config";
import { Homepage } from '@/types/Homepage';

export async function getHomepage(): Promise<Homepage> {
    const homepage = await client.fetch(
        groq`
            *[_type == "homepage"][0]{
                hero {
                    backgroundImages[] {
                        "url": asset->url
                    },
                    title {
                        highlightedText,
                        mainText
                    },
                    subtitle,
                    ctaButton {
                        text,
                        link
                    }
                },
                clientsSection {
                    title {
                        highlightedText,
                        mainText
                    },
                    subtitle,
                    clients[] {
                        name,
                        "logo": logo.asset->url
                    }
                },
                workWithBestSection {
                    title,
                    subtitle,
                    features[] {
                        title,
                        description,
                        icon,
                        column
                    },
                    ctaButton {
                        text,
                        link
                    }
                },
                whatWeDoSection {
                    title,
                    subtitle
                },
                caseStudiesSection {
                    title,
                    subtitle,
                    studies[] {
                        category,
                        title,
                        description,
                        "image": image.asset->url
                    },
                    ctaButton {
                        text,
                        link
                    }
                }
            }
        `
    );

    return homepage;
}
