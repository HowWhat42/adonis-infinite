import { createTuyau } from "@tuyau/client";
import { api } from "@iflab/site/api";

export const client = createTuyau({
  api,
  baseUrl: "http://localhost:3333",
});