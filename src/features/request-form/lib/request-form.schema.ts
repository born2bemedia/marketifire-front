import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const requestFormSchema = z.object({
  fullName: z.string().nonempty('Please provide your full name'),
  email: z.string().email('Please provide a valid email address'),
  phone: z
    .string()
    .nonempty('Please provide your phone number')
    .refine(isPhoneValid, 'Invalid phone number format'),
  companyName: z.string().optional(),
  website: z.string().optional(),
});

export type RequestFormSchema = z.infer<typeof requestFormSchema>;
