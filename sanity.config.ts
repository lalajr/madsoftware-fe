import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "@/sanity/schemas";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/admin",
  plugins: [deskTool()],
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  schema: {
    types: schemaTypes,
  },
});
