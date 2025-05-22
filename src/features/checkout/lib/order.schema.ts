// import { z } from '@/shared/lib/forms';
// import { isPhoneValid } from '@/shared/ui/kit/phone-field';

// export const orderSchema = z.object({
//   firstName: z.string().nonempty('First name is required'),
//   lastName: z.string().nonempty('Last name is required'),
//   email: z.string().email('Invalid email address'),
//   phone: z
//     .string()
//     .nonempty('Phone is required')
//     .refine(isPhoneValid, 'Invalid phone number format'),
//   street: z.string().nonempty('Street is required'),
//   addressLine2: z.string().optional(),
//   city: z.string().nonempty('City is required'),
//   zip: z.string().nonempty('Zip is required'),
//   country: z.string().nonempty('Country is required'),
//   paymentMethod: z.string().optional(),
//   isDetailsCorrect: z
//     .boolean()
//     .refine(value => value, 'You must agree to the refund policy.'),
//   agreement: z.boolean().refine(value => value, 'You must agree to the terms.'),
//   message: z.string().optional(),
// });

import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const createOrderSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    firstName: z.string().nonempty(t('firstName')),
    lastName: z.string().nonempty(t('lastName')),
    email: z.string().email(t('email')),
    phone: z
      .string()
      .nonempty(t('phone'))
      .refine(isPhoneValid, t('invalidPhone')),
    street: z.string().nonempty(t('street')),
    addressLine2: z.string().optional(),
    city: z.string().nonempty(t('city')),
    zip: z.string().nonempty(t('zip')),
    country: z.string().nonempty(t('country')),
    paymentMethod: z.string().optional(),
    isDetailsCorrect: z.boolean().refine(value => value, t('refundPolicy')),
    agreement: z.boolean().refine(value => value, t('terms')),
    message: z.string().optional(),
  });

export type OrderSchema = z.infer<ReturnType<typeof createOrderSchema>>;
