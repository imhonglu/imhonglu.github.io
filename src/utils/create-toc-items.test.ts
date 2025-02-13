import { expect, test } from "vitest";
import { createTocItems } from "./create-toc-items";

test("should generate TOC from basic headings", () => {
  expect(
    createTocItems([
      { depth: 2, text: "Section 1", slug: "section-1" },
      { depth: 3, text: "Subsection 1", slug: "subsection-1" },
      { depth: 2, text: "Section 2", slug: "section-2" },
      { depth: 4, text: "Subsection 3", slug: "subsection-3" },
    ]),
  ).toEqual([
    {
      children: [
        {
          children: [],
          depth: 3,
          slug: "subsection-1",
          text: "Subsection 1",
        },
      ],
      depth: 2,
      slug: "section-1",
      text: "Section 1",
    },
    {
      children: [
        {
          children: [],
          depth: 4,
          slug: "subsection-3",
          text: "Subsection 3",
        },
      ],
      depth: 2,
      slug: "section-2",
      text: "Section 2",
    },
  ]);
});

test("should handle skipped heading levels", () => {
  expect(
    createTocItems([
      { depth: 2, text: "Section 1", slug: "section-1" },
      { depth: 4, text: "Deep Subsection", slug: "deep-subsection" },
      { depth: 2, text: "Section 2", slug: "section-2" },
    ]),
  ).toEqual([
    {
      depth: 2,
      text: "Section 1",
      slug: "section-1",
      children: [
        {
          depth: 4,
          text: "Deep Subsection",
          slug: "deep-subsection",
          children: [],
        },
      ],
    },
    {
      depth: 2,
      text: "Section 2",
      slug: "section-2",
      children: [],
    },
  ]);
});
