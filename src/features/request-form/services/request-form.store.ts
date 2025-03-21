import { create } from 'zustand';

export type RequestState = {
  step: number;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  website?: string;
  services: string[];
  budget: string;
  goals: string;
  targetAudience: string;
  startDate: string;
  contactMethod: string;
  file?: File;
  setData: (data: Partial<RequestState>) => void;
};

export const useRequestFormStore = create<RequestState>(set => ({
  companyName: '',
  email: '',
  fullName: '',
  phone: '',
  step: 1,
  website: '',
  services: [],
  budget: '',
  goals: '',
  targetAudience: '',
  startDate: '',
  contactMethod: '',
  file: undefined,
  setData: (data: Partial<RequestState>) =>
    set(state => ({ ...state, ...data })),
}));
