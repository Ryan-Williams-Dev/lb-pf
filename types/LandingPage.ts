import { PortableTextBlock } from "sanity";

export type LandingPage = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  jobTitle: string;
  url: string;
  typewriter: string[];
  content: PortableTextBlock[];
};
