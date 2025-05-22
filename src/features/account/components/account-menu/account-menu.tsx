'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import type { Order } from '@/features/account/lib';

import { TabContent, Tabs } from '@/shared/ui/kit/tabs';

import { OrderHistory } from '../order-history';
import { PersonalSettings } from '../personal-settings';
import st from './account-menu.module.scss';

export function AccountMenu({ orders }: { orders: Order[] }) {
  const t = useTranslations('account');

  const defaultTabs = useMemo(
    () => [
      { id: 'orderHistory', label: t('orderHistory') },
      { id: 'accountSettings', label: t('accountSettings') },
    ],
    [t],
  );

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
