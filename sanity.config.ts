import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "xj641pkx",

  dataset: "production",

  title: "Portfolio - Larissa Baroboskin",

  apiVersion: "2023-05-02",

  basePath: "/admin",

  plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;
