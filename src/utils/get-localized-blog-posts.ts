import { getCollection } from "astro:content";

export async function getLocalizedBlogPosts(locale: string) {
  return getCollection("blog", (entry) => entry.id.startsWith(locale)).then(
    (posts) =>
      posts
        .map((post) => ({
          ...post,
          id: post.id.replace(`${locale}/`, ""),
        }))
        .sort(
          (a, b) =>
            (b.data.publishedAt ?? b.data.createdAt).valueOf() -
            (a.data.publishedAt ?? a.data.createdAt).valueOf(),
        ),
  );
}
