import type { Order, OriginOrder } from './types';

export function originOrdersMapping(res: OriginOrder): Order[] {
  return res.docs.map(order => ({
    orderId: order.orderNumber,
    orderDate: order.createdAt,
    services: order.items.map(item => item.product_name),
    orderStatus: order.status,
    paymentMethod: order.paymentMethod,
    getInvoice:
      order.status === 'completed'
        ? `${process.env.SERVER_URL}${order.invoice?.url}`
        : null,
  }));
}
