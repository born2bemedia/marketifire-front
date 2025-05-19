'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

import { getCartProducts, getCartTotal } from '@/features/cart/services';
import { useCartModalStore } from '@/features/cart/services/modal.store';
import { type CartProduct } from '@/features/lib/types';
import { useModalStore } from '@/features/request-popup/services/modal.store';

import { lsRead, lsWrite } from '@/shared/lib/browser';
import { Asterisk } from '@/shared/ui/icons/fill';
import { ArrowDown } from '@/shared/ui/icons/outline/arrow-down';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './pricing.module.scss';
import { type PricingItem } from './types';

export default function Pricing({
  categoryLabel,
  categoryTitle,
  pricingItems,
}: {
  categoryLabel: string;
  categoryTitle: string;
  pricingItems: PricingItem[];
}) {
  const { setIsOpen, setType, setProduct } = useModalStore();
  const { setIsCartOpen, setCartProducts, cartProducts, setCartTotal } =
    useCartModalStore();
  const [mounted, setMounted] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) {
    return null;
  }

  return (
    <div className={st.layout}>
      <div className={st.container}>
        <div className={st.col1}>
          <div>
            <Tag color="yellow">
              <Asterisk />
              <Text>{categoryLabel}</Text>
            </Tag>
            <Title level={2}>{categoryTitle}</Title>
            <button
              className={`${st.tabOpen} ${open ? st.open : ''}`}
              onClick={handleOpen}
            >
              <Text>{open ? 'Hide' : 'Open'}</Text>
              <ArrowDown />
            </button>
          </div>
        </div>
        <div className={`${st.col2} ${open ? st.open : ''}`}>
          {pricingItems.map((item, index) => (
            <div key={index} className={st.item}>
              <div className={st.top}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={44}
                  height={44}
                />
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
                      !cartProducts.some(
                        product => product.title === item.title,
                      )
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
    </div>
  );
}
