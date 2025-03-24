import { lsRead } from '@/shared/lib/browser';

import { type CartProduct } from '../../lib/types';

export const getCartTotal = () => {
  const cartProducts = lsRead<CartProduct[]>('cart', []);
  return cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );
};
