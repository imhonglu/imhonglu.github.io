import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { useTranslations } from "../i18n/utils/use-translations";

export async function GET(context) {
  const posts = await getCollection("blog");
  const t = useTranslations("en");

  return rss({
    title: t("title"),
    description: t("description"),
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.id}/`,
    })),
  });
}
