import { createClient } from "next-sanity";

const config = {
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: process.env.SANITY_DATASET!,
    apiVersion: process.env.SANITY_API_VERSION!,
    useCdn: true,
}

export const client = createClient(config);