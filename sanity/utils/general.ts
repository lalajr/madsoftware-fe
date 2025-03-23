import { groq } from "next-sanity";
import { client } from "@/sanity/config/client-config";
import { Navigation } from "@/types/Navigation";

export async function getNavigation(): Promise<Navigation> {
    const navigation = await client.fetch(
        groq`
            *[_type == "navigation" && title == 'Main Navigation'][0]{
                title,
                items[]->{
                    title,
                    link,
                    isDropdown,
                    dropdownItems
                }
            }
        `
    );

    // console.log('Raw navigation data:', JSON.stringify(navigation, null, 2));
    return navigation;
}