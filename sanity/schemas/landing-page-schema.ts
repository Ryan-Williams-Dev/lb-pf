const landingPage = {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "picture",
      title: "Picture",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default landingPage;
