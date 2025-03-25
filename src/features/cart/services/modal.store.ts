import { create } from 'zustand';

import type { CartProduct } from '@/features/lib/types';

import { getCartProducts, getCartTotal } from '../services';

export const useCartModalStore = create<{
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartTotal: number;
  setCartTotal: (total: number) => void;
  cartProducts: CartProduct[];
  setCartProducts: (products: CartProduct[]) => void;
}>(set => ({
  isCartOpen: false,
  setIsCartOpen: isOpen => set({ isCartOpen: isOpen }),
  cartTotal: typeof window !== 'undefined' ? getCartTotal() : 0,
  setCartTotal: total => set({ cartTotal: total }),
  cartProducts: typeof window !== 'undefined' ? getCartProducts() : [],
  setCartProducts: products => set({ cartProducts: products }),
}));
