import { groq } from 'next-sanity';
import { client } from "@/sanity/config/client-config";
import { Page } from '@/types/Page';

const pageQuery = groq`*[_type == "page" && internalName == $internalName][0] {
  _id,
  internalName,
  title {
    highlightedText,
    mainText
  },
  blocks[] {
    internalName,
    blockType,
    // Paragraph
    content[]{
      ...,
    },
    // Two Column Paragraph
    leftColumn[]{
      ...,
    },
    rightColumn[]{
      ...,
    },
    // Statistics
    statistics[] {
      count,
      label
    },
    // Get in Touch
    email,
    phone,
    office,
    // Banner
    image {
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    }
  }
}`;

export async function getPage(internalName: string): Promise<Page | null> {
  try {
    const page = await client.fetch<Page>(pageQuery, { internalName });
    return page;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
} 