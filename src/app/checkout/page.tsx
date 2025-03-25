import { BillingDetails } from './components/checkout-form';
import { OrderSummary } from './components/order-summary';
import st from './page.module.scss';

export default function Checkout() {
  return (
    <div className={st.layout}>
      <OrderSummary />
      <BillingDetails />
    </div>
  );
}
