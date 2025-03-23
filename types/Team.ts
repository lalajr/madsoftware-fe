export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: {
    url: string;
    alt: string;
  };
  linkedinUrl?: string;
  quote?: string;
  order: number;
}

export interface TeamSection {
  title: string;
  subtitle: string;
  members: TeamMember[];
} 