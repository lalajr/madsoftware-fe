import { client } from '@/sanity/config/client-config';
import { TeamMember } from '@/types/Team';

export async function getTeamMembers(): Promise<TeamMember[]> {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height
    },
    linkedinUrl,
    quote,
    order
  }`;

  return await client.fetch(query);
} 