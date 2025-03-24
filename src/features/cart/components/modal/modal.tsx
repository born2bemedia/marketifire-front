'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { CloseIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { CartProduct } from '../../lib/types';
import { getCartProducts } from '../../services';
import { useCartModalStore } from '../../services/modal.store';
import st from './modal.module.scss';

export function CartModal({}) {
  const { isOpen, setIsOpen } = useCartModalStore();

  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    if (isOpen) {
      setCartProducts(getCartProducts());
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${st.modalWrapper} ${isOpen ? st.open : ''}`}>
      {cartProducts.length === 0 ? (
        <div className={st.modal}>
          <div className={st.modalTop}>
            <div className={st.modalTopLeft}>
              <Title level={2}>Cart</Title>
            </div>
            <button className={st.close} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <div className={st.modalEmpty}>
            <Title level={2}>Your cart is empty.</Title>
            <Text>
              Browse our range of business and marketing consulting services to
              find the perfect strategy to elevate your brand and achieve your
              goals.
            </Text>
            <Image
              className={st.thanksImageMob}
              src="/star.png"
              alt="Thank you"
              width={230}
              height={230}
            />
            <Button variant="black" onClick={handleClose}>
              Start Exploring
            </Button>
          </div>
        </div>
      ) : (
        <div className={st.modal}>
          <div className={st.modalTop}>
            <div className={st.modalTopLeft}>
              <Title level={2}>Cart</Title>
            </div>
            <button className={st.close} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
