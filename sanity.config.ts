import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "@/sanity/schemas";

export default defineConfig({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  basePath: "/admin",
  plugins: [deskTool()],
  apiVersion: process.env.SANITY_API_VERSION!,
  schema: {
    types: schemaTypes,
  },
});
