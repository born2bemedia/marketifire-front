import { lsRead } from '@/shared/lib/browser';

import { type CartProduct } from '../lib/types';

export const getCartProducts = () => {
  return lsRead<CartProduct[]>('cart', []);
};
