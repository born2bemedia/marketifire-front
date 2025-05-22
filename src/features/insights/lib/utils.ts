import type { OriginInsight, PreviewInsight, Thumbnail } from './types';

export function insightsMapping(insight: OriginInsight) {
  return {
    title: insight.title,
    slug: insight.slug,
    thumbnail: `${process.env.SERVER_URL}${insight.thumbnail?.url}`,
    excerpt: insight.excerpt,
    content: insight.content.root.children,
  };
}

export function previewInsightMapping(
  insight: Omit<PreviewInsight, 'thumbnail'> & { thumbnail: Thumbnail },
) {
  return {
    title: insight.title,
    slug: insight.slug,
    thumbnail: `${process.env.SERVER_URL}${insight.thumbnail?.url}`,
    excerpt: insight.excerpt,
  };
}
