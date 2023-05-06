import { createClient, groq } from "next-sanity";

export const client = createClient({
  projectId: "xj641pkx",

  dataset: "production",

  apiVersion: "2023-05-02",
});

export async function getLandingPage() {
  const data = await client.fetch(
    groq`*[_type == "landingPage"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset,
      url,
      typewriter,
      content
    }`
  );

  console.log(data);

  return data[0];
}
