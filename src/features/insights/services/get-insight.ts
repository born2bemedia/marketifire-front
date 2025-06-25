'use server';

export async function getInsight({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/insights?where[slug][in]=${slug}&locale=${locale}`,
    {
      method: 'GET',
    },
  );

  if (!res.ok) {
    console.error('Failed to fetch insights:', res.statusText);
    return [];
  }

  const results = await res.json();
  return results?.docs ?? [];
}
