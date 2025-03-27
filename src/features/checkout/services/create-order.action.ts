'use server';

import { google } from 'googleapis';

import type { User } from '@/core/user/lib/types';

import { orderLetter } from '@/features/letters/components/order-letter';
import type { CartProduct } from '@/features/lib/types';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_USER,
} from '@/shared/config/env';
import { format } from '@/shared/lib/date';
import { makeBody } from '@/shared/lib/email';

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

  console.log('@user', user);

  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    EMAIL_CLIENT_ID,
    EMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground',
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.EMAIL_REFRESH_TOKEN,
  });
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const orderNumber = String(Date.now());

  const res = await fetch(`${process.env.SERVER_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      orderNumber,
      billingAddress: billing,
      total: totalPrice,
      status: 'pending',
      paymentMethod: 'Bank transfer',
      orderNotes: message,
      items,
    }),
  });

  const userEmailBody = makeBody({
    to: billing.email,
    from: EMAIL_USER,
    subject: 'Thank You for Order in Marketifire',
    message: orderLetter({
      username: `${billing.firstName} ${billing.lastName}`,
      orderDate: format(new Date(), 'MMMM dd, yyyy'),
      description: message,
      total: totalPrice,
      orderNumber,
    }),
  });

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: userEmailBody },
  });

  return await res.json();
}
