import { getCollection } from "astro:content";
import { faker } from "@faker-js/faker";
import { expect, test, vi } from "vitest";
import { getLocalizedBlogPosts } from "./get-localized-blog-posts";

vi.mock("astro:content", () => ({
  getCollection: vi.fn(),
}));

test("returns filtered blog posts and sorts them correctly", async () => {
  vi.mocked(getCollection).mockResolvedValue([
    {
      id: "post-1",
      collection: "blog",
      data: {
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        publishedAt: new Date("2024-03-15"),
        createdAt: new Date("2024-03-10"),
      },
    },
    {
      id: "post-2",
      collection: "blog",
      data: {
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        publishedAt: new Date("2024-03-20"),
        createdAt: new Date("2024-03-18"),
      },
    },
  ]);

  expect(await getLocalizedBlogPosts("ko")).toEqual([
    expect.objectContaining({
      id: "post-2",
    }),
    expect.objectContaining({
      id: "post-1",
    }),
  ]);

  expect(vi.mocked(getCollection)).toHaveBeenCalledWith(
    "blog",
    expect.any(Function),
  );
});

test("sorts by createdAt when publishedAt is not available", async () => {
  vi.mocked(getCollection).mockResolvedValue([
    {
      id: "post-1",
      collection: "blog",
      data: {
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        createdAt: new Date("2024-03-10"),
      },
    },
    {
      id: "post-2",
      collection: "blog",
      data: {
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        createdAt: new Date("2024-03-18"),
      },
    },
  ]);

  expect(await getLocalizedBlogPosts("ko")).toEqual([
    expect.objectContaining({
      id: "post-2",
    }),
    expect.objectContaining({
      id: "post-1",
    }),
  ]);
});

test("returns empty array when no matching locale found", async () => {
  vi.mocked(getCollection).mockResolvedValue([]);

  expect(await getLocalizedBlogPosts("fr")).toEqual([]);
});
