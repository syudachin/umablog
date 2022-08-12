import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "umablog",
  apiKey: process.env.API_KEY,
});
