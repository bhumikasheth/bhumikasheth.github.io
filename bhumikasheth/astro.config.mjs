// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://bhumikasheth.com",
  base: "/bhumikasheth.github.io",
  output: "static",
  build: {
    assets: "astro",
  },
});
