import { groq } from "next-sanity";
import { client } from "@/sanity/config/client-config";
import type { SiteSettings } from "@/types/SiteSettings";

export async function getSiteSettings(): Promise<SiteSettings> {
    return client.fetch(
        groq`*[_type == "siteSettings"][0]{
            footer {
                "logo": logo.asset->url,
                tagline,
                socialLinks {
                    linkedin,
                    instagram,
                    twitter
                },
                contact {
                    phone,
                    address
                },
            },
            otherServices {
                title,
                subtitle
            },
            meetTheTeam {
                title,
                subtitle
            },
            howToBecomeClient {
                title,
                subtitle,
                steps[] {
                    title,
                    description,
                    cta,
                    ctaUrl
                }
            }
        }`
    );
} 