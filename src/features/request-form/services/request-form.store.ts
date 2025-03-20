import { create } from 'zustand';

type FormState = {
  step: number;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  website?: string;
  setData: (data: Partial<FormState>) => void;
};

export const useRequestFormStore = create<FormState>(set => ({
  companyName: '',
  email: '',
  fullName: '',
  phone: '',
  step: 1,
  website: '',
  setData: (data: Partial<FormState>) => set(state => ({ ...state, ...data })),
}));
