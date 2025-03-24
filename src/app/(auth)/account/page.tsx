import { AccountMenu } from '@/features/account/components';
import { originOrdersMapping } from '@/features/account/lib';
import { getUserOrders } from '@/features/account/services';

export default async function Account() {
  const res = await getUserOrders();
  const orders = originOrdersMapping(res);

  return <AccountMenu orders={orders} />;
}
