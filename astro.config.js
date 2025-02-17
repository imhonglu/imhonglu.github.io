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
    routing: {
      defaultLocale: "en",
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          ko: "ko-KR",
        },
      },
    }),
  ],

  build: {
    format: "preserve",
  },
});
