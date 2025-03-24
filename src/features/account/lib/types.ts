import type { User } from '@/core/user/lib';

export type Order = {
  orderId: string;
  orderDate: string;
  services: string[];
  orderStatus: string;
  paymentMethod?: string;
};

export type OriginOrder = {
  docs: {
    id: number;
    orderNumber: string;
    user?: User;
    items: Item[];
    total: number;
    status: string;
    paymentMethod?: string;
    orderNotes: string;
    billingAddress: BillingAddress;
    createdAt: string;
    invoice?: File;
    documents?: File;
    updatedAt: string;
  }[];
};

type Item = {
  id: string;
  product_name: string;
  quantity: number;
  price: number;
  invoice: { url: string };
};

type BillingAddress = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  country: string;
  zip: string;
};

type File = {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
};
