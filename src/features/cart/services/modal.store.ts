import { create } from 'zustand';

export const useCartModalStore = create<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>(set => ({
  isOpen: false,
  setIsOpen: isOpen => set({ isOpen }),
}));
