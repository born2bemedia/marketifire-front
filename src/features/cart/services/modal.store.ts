import { create } from 'zustand';

import type { CartProduct } from '@/features/lib/types';

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
  cartTotal: 0,
  setCartTotal: total => set({ cartTotal: total }),
  cartProducts: [],
  setCartProducts: products => set({ cartProducts: products }),
}));
