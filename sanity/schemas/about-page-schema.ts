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
      name: "headerPreLine",
      title: "Text before underline",
      type: "string",
    },
    {
      name: "headerUnderlined",
      title: "Unerlined Text",
      type: "string",
    },
    {
      name: "headerPostLine",
      title: "Text after underline",
      type: "string",
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
  ],
};

export default aboutPage;
