'use client';

import type { Order } from '@/features/account/lib';

import { TabContent, Tabs } from '@/shared/ui/kit/tabs';

import { OrderHistory } from '../order-history';
import { PersonalSettings } from '../personal-settings';
import st from './account-menu.module.scss';

const defaultTabs = [
  { id: 'orderHistory', label: 'My Order History' },
  { id: 'accountSettings', label: 'Account Settings' },
];

export function AccountMenu({ orders }: { orders: Order[] }) {
  return (
    <main className={st.layout}>
      <Tabs values={defaultTabs} defaultId="orderHistory">
        <TabContent id="orderHistory">
          <OrderHistory orders={orders} />
        </TabContent>
        <TabContent id="accountSettings">
          <PersonalSettings />
        </TabContent>
      </Tabs>
    </main>
  );
}
