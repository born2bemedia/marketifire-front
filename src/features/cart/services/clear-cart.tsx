import { lsRemove } from '@/shared/lib/browser';

export const clearCart = () => {
  lsRemove('cart');
};
