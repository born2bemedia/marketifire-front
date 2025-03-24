'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

import { getCartProducts, getCartTotal } from '@/features/cart/services';
import { useCartModalStore } from '@/features/cart/services/modal.store';
import { type CartProduct } from '@/features/lib/types';
import { useModalStore } from '@/features/request-popup/services/modal.store';

import { lsRead, lsWrite } from '@/shared/lib/browser';
import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './pricing.module.scss';
import { type PricingItem } from './types';

export default function Pricing({
  categoryLabel,
  categoryTitle,
  categoryDescription,
  pricingItems,
  index,
  sectionBackground,
  cardBackground,
}: {
  categoryLabel: string;
  categoryTitle: string;
  categoryDescription: string;
  pricingItems: PricingItem[];
  index: string;
  sectionBackground: string;
  cardBackground: string;
}) {
  const { setIsOpen, setType, setProduct } = useModalStore();
  const { setIsCartOpen, setCartProducts, cartProducts, setCartTotal } =
    useCartModalStore();

  useEffect(() => {
    setCartProducts(getCartProducts());
  }, []);

  const handleOpenCartModal = () => {
    setIsCartOpen(true);
  };

  const handleOpenModal = (type: 'service' | 'package', product: string) => {
    setIsOpen(true);
    setType(type);
    setProduct(product);
  };

  const handleAddToCart = (item: PricingItem) => {
    const cart = lsRead<CartProduct[]>('cart', []);
    cart.push({
      title: item.title,
      quantity: 1,
      price: item.price,
    });
    lsWrite('cart', cart);
    setCartProducts(cart);
    setCartTotal(getCartTotal());
    toast.success(`Product ${item.title} added to cart`);
  };

  return (
    <div
      className={st.layout}
      style={{
        background: sectionBackground,
      }}
    >
      <div className={st.col1}>
        <div>
          <Tag color={index === '06' ? 'white' : 'yellow'}>
            <Asterisk />
            <Text>{categoryLabel}</Text>
          </Tag>
          <Title level={2}>{categoryTitle}</Title>
          <Text>{categoryDescription}</Text>
        </div>
        <Image
          src={`/pricing/${index}.svg`}
          alt={categoryTitle}
          width={404}
          height={324}
        />
      </div>
      <div className={st.col2}>
        {pricingItems.map((item, index) => (
          <div
            key={index}
            className={st.item}
            style={{
              top: `calc(50px + ${index * 50}px)`,
              background: cardBackground,
              borderColor: cardBackground,
            }}
          >
            <div className={st.top}>
              <div className={st.itemTitle}>{item.title}</div>
              <div className={st.itemDescription}>{item.description}</div>
            </div>
            <div className={st.bottom}>
              <div className={st.price}>
                {item.type === 'order' ? 'From ' : ''}€{item.price}
              </div>
              {item.type === 'buy' ? (
                <Button
                  size="md"
                  variant="black"
                  onClick={() =>
                    !cartProducts.some(product => product.title === item.title)
                      ? handleAddToCart(item)
                      : handleOpenCartModal()
                  }
                >
                  {cartProducts.some(product => product.title === item.title)
                    ? 'In Cart'
                    : 'Buy'}
                </Button>
              ) : (
                <Button
                  size="md"
                  variant="black"
                  onClick={() => handleOpenModal('service', item.title)}
                >
                  Order
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
