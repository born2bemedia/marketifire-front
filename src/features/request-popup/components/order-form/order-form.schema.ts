import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const orderFormSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  phone: z
    .string()
    .nonempty('Phone is required')
    .refine(isPhoneValid, 'Invalid phone number format'),
  email: z.string().email('Invalid email address'),
  website: z.string(),
  message: z.string(),
});

export type OrderFormSchema = z.infer<typeof orderFormSchema>;
