'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import type { Order } from '@/features/account/lib';
import { paymentIcon, statusIcon } from '@/features/account/lib/status-icon';

import { downloadFile } from '@/shared/lib/browser';
import { format } from '@/shared/lib/date';
import { columnDefBuilder } from '@/shared/lib/table';
import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';

import st from './order-history.module.scss';

export function OrderHistory({ orders }: { orders: Order[] }) {
  const t = useTranslations('account');

  const columns = useMemo(
    () =>
      columnDefBuilder<Order>([
        {
          accessorKey: 'orderId',
          header: t('orderId'),
          size: 200,
          cell: ({ getValue }) => (
            <Text color="black100" weight={400}>
              {getValue<string>()}
            </Text>
          ),
        },
        {
          accessorKey: 'orderDate',
          header: t('orderDate'),
          size: 200,
          cell: ({ getValue }) => (
            <Text color="black100" weight={400}>
              {format(getValue<string>(), 'dd-MM-yyyy')}
            </Text>
          ),
        },
        {
          accessorKey: 'services',
          header: t('services'),
          size: 200,
          cell: ({ getValue }) => {
            return (
              <Text color="black100" weight={400} className={st.servicesLine}>
                {getValue<string[]>().join(', ')}
              </Text>
            );
          },
        },
        {
          accessorKey: 'orderStatus',
          header: t('orderStatus'),
          size: 200,
          cell: ({ getValue }) => (
            <Text color="black100" weight={400} className={st.status}>
              {getValue<string>()}
              {statusIcon[getValue<string>()]?.()}
            </Text>
          ),
        },
        {
          accessorKey: 'paymentMethod',
          header: t('paymentMethod'),
          size: 200,
          cell: ({ getValue }) => (
            <Text color="black100" weight={400} className={st.status}>
              {getValue<string>() ?? 'Awaiting Payment'}
              {paymentIcon[getValue<string>() ?? 'awaitingPayment']?.()}
            </Text>
          ),
        },
        {
          accessorKey: 'getInvoice',
          header: t('getInvoice'),
          size: 200,
          cell: ({ getValue }) => (
            <button
              className={st.downloadBtn}
              disabled={!getValue<string>()}
              onClick={() =>
                getValue<string>()
                  ? downloadFile({
                      url: getValue<string>(),
                      fileName: 'invoice.pdf',
                    })
                  : null
              }
            >
              <Text color="black100" weight={400}>
                {t('download')}
              </Text>
            </button>
          ),
        },
      ]),
    [t],
  );

  return (
    <section className={st.layout}>
      <Table data={orders} columns={columns} />
    </section>
  );
}
