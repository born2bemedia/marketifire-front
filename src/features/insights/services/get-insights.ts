'use server';

export async function getInsights({ locale }: { locale: string }) {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/insights?locale=${locale}`,
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
