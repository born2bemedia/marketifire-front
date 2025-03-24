'use client';

import type { Order } from '@/features/account/lib';
import { paymentIcon, statusIcon } from '@/features/account/lib/status-icon';

import { downloadFile } from '@/shared/lib/browser';
import { format } from '@/shared/lib/date';
import { columnDefBuilder } from '@/shared/lib/table';
import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';

import st from './order-history.module.scss';

const columns = columnDefBuilder<Order>([
  {
    accessorKey: 'orderId',
    header: 'Order ID',
    size: 200,
    cell: ({ getValue }) => (
      <Text color="black100" weight={400}>
        {getValue<string>()}
      </Text>
    ),
  },
  {
    accessorKey: 'orderDate',
    header: 'Order Date',
    size: 200,
    cell: ({ getValue }) => (
      <Text color="black100" weight={400}>
        {format(getValue<string>(), 'dd-MM-yyyy')}
      </Text>
    ),
  },
  {
    accessorKey: 'services',
    header: 'Services',
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
    header: 'Order Status',
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
    header: 'Payment Method',
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
    header: 'Get Invoice',
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
          Download
        </Text>
      </button>
    ),
  },
]);

export function OrderHistory({ orders }: { orders: Order[] }) {
  return (
    <section className={st.layout}>
      <Table data={orders} columns={columns} />
    </section>
  );
}
