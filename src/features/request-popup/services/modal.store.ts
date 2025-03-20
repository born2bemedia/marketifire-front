import { create } from 'zustand';

export const useModalStore = create<{
  isOpen: boolean;
  type: 'service' | 'package';
  product: string;
  setIsOpen: (isOpen: boolean) => void;
  setType: (type: 'service' | 'package') => void;
  setProduct: (product: string) => void;
}>(set => ({
  isOpen: false,
  type: 'service',
  product: '',
  setIsOpen: isOpen => set({ isOpen }),
  setType: type => set({ type }),
  setProduct: product => set({ product }),
}));
