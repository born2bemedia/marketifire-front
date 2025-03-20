import { create } from 'zustand';

export const useModalStore = create<{
  isOpen: boolean;
  type: 'service' | 'package';
  setIsOpen: (isOpen: boolean) => void;
  setType: (type: 'service' | 'package') => void;
}>(set => ({
  isOpen: false,
  type: 'service',
  setIsOpen: isOpen => set({ isOpen }),
  setType: type => set({ type }),
}));
