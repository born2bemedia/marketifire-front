import { create } from 'zustand';

type FormState = {
  step: number;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  website?: string;
  services: string[];
  budget: string[];
  goals: string;
  targetAudience: string;
  startDate: string[];
  contactMethod: string;
  file?: File;
  setData: (data: Partial<FormState>) => void;
};

export const useRequestFormStore = create<FormState>(set => ({
  companyName: '',
  email: '',
  fullName: '',
  phone: '',
  step: 2,
  website: '',
  services: [],
  budget: [],
  goals: '',
  targetAudience: '',
  startDate: [],
  contactMethod: '',
  file: undefined,
  setData: (data: Partial<FormState>) => set(state => ({ ...state, ...data })),
}));
