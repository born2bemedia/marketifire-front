'use client';

import { useEffect, useState } from 'react';

import { useCartModalStore } from '@/features/cart/services/modal.store';

import { Title } from '@/shared/ui/kit/title';

import st from './order-summary.module.scss';

export function OrderSummary() {
  const { cartProducts, cartTotal } = useCartModalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={st.orderSummary}>
        <Title level={3}>Your Order Summary</Title>
        <div className={st.orderSummaryWrapper}></div>
      </div>
    );
  }

  return (
    <div className={st.orderSummary}>
      <Title level={3}>Your Order Summary</Title>
      <div className={st.orderSummaryWrapper}>
        <div className={st.orderSummaryItems}>
          {cartProducts.map((product, index) => (
            <div key={index} className={st.orderSummaryItem}>
              <div className={st.orderSummaryItemTitle}>
                <span>{product.title}</span>
                <span>x{product.quantity}</span>
              </div>
              <div className={st.orderSummaryItemPrice}>
                €{product.price * product.quantity}
              </div>
            </div>
          ))}
        </div>
        <div className={st.orderSummaryTotal}>
          <span className={st.orderSummaryTotalTitle}>Total: </span>
          <span className={st.orderSummaryTotalPrice}>€{cartTotal}</span>
        </div>
      </div>
    </div>
  );
}
