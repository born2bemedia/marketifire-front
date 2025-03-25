'use server';

import type { User } from '@/core/user/lib/types';

import type { CartProduct } from '@/features/lib/types';

import type { OrderBilling } from '../lib/types';

export async function createOrder({
  products,
  billing,
  totalPrice,
  user,
  message,
}: {
  billing: OrderBilling;
  products: CartProduct[];
  totalPrice: number;
  user: User | null;
  message: string;
}) {
  const items = products.map(({ title, quantity, price }) => ({
    product_name: title,
    price,
    quantity,
  }));

  const res = await fetch(`${process.env.SERVER_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      orderNumber: String(Date.now()),
      billingAddress: billing,
      total: totalPrice,
      status: 'pending',
      paymentMethod: 'Bank transfer',
      orderNotes: message,
      items,
    }),
  });
  return await res.json();
}
