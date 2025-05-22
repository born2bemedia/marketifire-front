'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { CloseIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { getCartProducts } from '../../services';
import { useCartModalStore } from '../../services/modal.store';
import { CartContent } from '../cart-content/cart-content';
import st from './modal.module.scss';

export function CartModal() {
  const t = useTranslations('cart');

  const { isCartOpen, setIsCartOpen, setCartProducts, cartProducts } =
    useCartModalStore();
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
    setCartProducts(getCartProducts());
  }, [setCartProducts]);

  useEffect(() => {
    setIsCartOpen(false);
  }, [pathname, setIsCartOpen]);

  if (!isClient) {
    return <div className={st.modalWrapper} />;
  }

  const handleClose = () => {
    setIsCartOpen(false);
  };

  return (
    <div className={`${st.modalWrapper} ${isCartOpen ? st.open : ''}`}>
      {cartProducts.length ? (
        <div className={st.modal}>
          <div className={st.modalTop}>
            <div className={st.modalTopLeft}>
              <Title level={2}>{t('cart')}</Title>
            </div>
            <button className={st.close} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <CartContent />
        </div>
      ) : (
        <div className={st.modal}>
          <div className={st.modalTop}>
            <div className={st.modalTopLeft}>
              <Title level={2}>{t('cart')}</Title>
            </div>
            <button className={st.close} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <div className={st.modalEmpty}>
            <Title level={2}>{t('emptyCart')}</Title>
            <Text>{t('browseOurRange')}</Text>
            <Image
              className={st.thanksImageMob}
              src="/star.png"
              alt="Thank you"
              width={230}
              height={230}
            />
            <Button variant="black" onClick={handleClose}>
              {t('startExploring')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
