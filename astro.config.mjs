import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://lit-fic-laura.netlify.app/",
  integrations: [preact()]
});