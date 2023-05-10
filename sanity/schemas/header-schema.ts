const header = {
  name: "header",
  title: "Header",
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
      name: "socialLinks",
      titles: "Social Links",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};

export default header;
