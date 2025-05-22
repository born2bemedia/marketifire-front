import type { OriginInsight } from './types';

export function insightsMapping(insight: OriginInsight) {
  return {
    title: insight.title,
    slug: insight.slug,
    thumbnail: `${process.env.SERVER_URL}${insight.thumbnail?.url}`,
    excerpt: insight.excerpt,
    content: insight.content.root.children,
  };
}

export function previewInsightMapping(insight: OriginInsight) {
  return {
    title: insight.title,
    slug: insight.slug,
    thumbnail: `${process.env.SERVER_URL}${insight.thumbnail?.url}`,
    excerpt: insight.excerpt,
  };
}
