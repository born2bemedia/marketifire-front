import type { Metadata } from 'next';

import { BillingDetails } from './components/checkout-form';
import { OrderSummary } from './components/order-summary';
import st from './page.module.scss';

export const metadata: Metadata = {
  title: 'Marketifire | Checkout',
  openGraph: {
    title: 'Marketifire | Checkout',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default function Checkout() {
  return (
    <div className={st.layout}>
      <OrderSummary />
      <BillingDetails />
    </div>
  );
}
