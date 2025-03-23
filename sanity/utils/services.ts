import { groq } from "next-sanity";
import { client } from "@/sanity/config/client-config";

export async function getService(slug: string) {
    return client.fetch(
        groq`*[_type == "service" && slug.current == $slug][0]{
            title,
            "slug": slug.current,
            excerpt,
            description[] {
                ...,
                _type == "image" => {
                    "url": asset->url,
                    "dimensions": asset->metadata.dimensions,
                    alt,
                    caption
                },
                _type == "customIcon" => {
                    "iconUrl": icon.asset->url,
                    size,
                    alignment
                },
                _type == "divider" => {
                    style,
                    width,
                    spacing
                }
            },
            "thumbnail": thumbnail.asset->url,
            "thumbnailAlt": thumbnail.alt,
            "banner": banner.asset->url,
            "bannerAlt": banner.alt,
        }`,
        { slug }
    );
} 


export async function getServices(excludeSlug?: string) {
    return client.fetch(
        groq`*[_type == "service" ${excludeSlug ? '&& slug.current != $excludeSlug' : ''}]{
            title,
            "slug": slug.current,
            excerpt,
            description[] {
                ...,
                _type == "image" => {
                    "url": asset->url,
                    "dimensions": asset->metadata.dimensions,
                    alt,
                    caption
                },
                _type == "customIcon" => {
                    "iconUrl": icon.asset->url,
                    size,
                    alignment
                },
                _type == "divider" => {
                    style,
                    width,
                    spacing
                }
            },
            "thumbnail": thumbnail.asset->url,
            "thumbnailAlt": thumbnail.alt,
            "banner": banner.asset->url,
            "bannerAlt": banner.alt,
        }`,
        excludeSlug ? { excludeSlug } : undefined
    );
} 