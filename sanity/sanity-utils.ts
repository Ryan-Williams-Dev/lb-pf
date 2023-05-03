import { createClient, groq } from "next-sanity";

export async function getLandingPage() {
  const client = createClient({
    projectId: "xj641pkx",

    dataset: "production",

    apiVersion: "2023-05-02",
  });

  client.fetch(
    groq`*[_type === "landingPage"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset-->url
    }`
  );
}
