import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const orderSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .nonempty('Phone is required')
    .refine(isPhoneValid, 'Invalid phone number format'),
  street: z.string().nonempty('Street is required'),
  addressLine2: z.string().optional(),
  city: z.string().nonempty('City is required'),
  zip: z.string().nonempty('Zip is required'),
  country: z.string().nonempty('Country is required'),
  paymentMethod: z.string().optional(),
  isDetailsCorrect: z
    .boolean()
    .refine(value => value, 'You must agree to the refund policy.'),
  agreement: z.boolean().refine(value => value, 'You must agree to the terms.'),
  message: z.string().optional(),
});

export type OrderSchema = z.infer<typeof orderSchema>;
