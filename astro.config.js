import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://imhonglu.github.io",
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "en",
  },
  integrations: [mdx(), sitemap()],
});
