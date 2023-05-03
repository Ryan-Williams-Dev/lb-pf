import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "xj641pkx",

  dataset: "production",

  title: "Portfolio - Larissa Baroboskin",

  apiVersion: "2023-05-02",

  basePath: "/admin",

  plugins: [deskTool()],
});

export default config;
