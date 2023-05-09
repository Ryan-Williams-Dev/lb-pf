const aboutPage = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "typewriter",
      title: "Typewriter Lines",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default aboutPage;
