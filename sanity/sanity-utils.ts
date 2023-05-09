import { createClient, groq } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "xj641pkx",

  dataset: "production",

  apiVersion: "2023-05-02",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getLandingPage() {
  const data = await client.fetch(
    groq`*[_type == "landingPage"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset,
      jobTitle,
      url,
      typewriter,
      content
    }`
  );

  return data[0];
}

export async function getAboutPage() {
  const data = await client.fetch(
    groq`*[_type == "aboutPage"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset,
      headerPreLine,
      headerUnderlined,
      headerPostLine,
      bio,
      url,
    }`
  );

  return data[0];
}
