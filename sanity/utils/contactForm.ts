import { groq } from "next-sanity";
import { client } from "@/sanity/config/client-config";
import { CareerContact } from "@/types/CareersContactForm";

export async function getCareerContact(): Promise<CareerContact> {
    const careerContact = await client.fetch(
        groq`
            *[_type == "careerContactSection"][0]{
                "backgroundImage": {
                    "asset": {
                        "url": backgroundImage.asset->url
                    }
                },
                title {
                    mainText,
                    highlightedText
                },
                subtitle,
                ctaButton {
                    text,
                    link
                },
                contactForm_title,
                contactForm_subtitle
            }
        `
    );

    return careerContact;
} 