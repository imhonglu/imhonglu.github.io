import type { MarkdownHeading } from "astro";

export interface TocItem extends MarkdownHeading {
  children: TocItem[];
}

export function createTocItems(
  headings: MarkdownHeading[],
  options?: {
    minLevel?: number;
    maxLevel?: number;
  },
): TocItem[] {
  const tocItems: TocItem[] = [];
  const minLevel = options?.minLevel ?? 2;
  const maxLevel = options?.maxLevel ?? 3;

  let stack: TocItem[] = [];

  for (const heading of headings) {
    const tocItem = { ...heading, children: [] };

    // if the current item is deeper than the last item in the stack, pop the stack
    while (stack.length > 0 && stack[stack.length - 1].depth >= tocItem.depth) {
      stack.pop();
    }

    if (tocItem.depth <= minLevel) {
      tocItems.push(tocItem);
      stack = [tocItem];
    } else if (stack.length > 0 && tocItem.depth <= maxLevel) {
      stack[stack.length - 1].children.push(tocItem);
      stack.push(tocItem);
    }
  }

  return tocItems;
}
