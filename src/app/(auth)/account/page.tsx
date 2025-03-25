import type { Metadata } from 'next';

import { AccountMenu } from '@/features/account/components';
import { originOrdersMapping } from '@/features/account/lib';
import { getUserOrders } from '@/features/account/services';

export const metadata: Metadata = {
  title: 'Account | Business & Marketing Consulting for Entrepreneurs',
  description:
    'Unlock your business’s potential with Marketfire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
};

export default async function Account() {
  const res = await getUserOrders();
  const orders = originOrdersMapping(res);

  return <AccountMenu orders={orders} />;
}
