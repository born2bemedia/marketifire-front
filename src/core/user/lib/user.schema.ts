import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const createUserSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    firstName: z.string().nonempty(t('firstName')),
    lastName: z.string().nonempty(t('lastName')),
    email: z.string().nonempty(t('email')),
    phone: z
      .string()
      .nonempty(t('phone'))
      .refine(isPhoneValid, t('invalidPhone')),
    address: z.string().optional(),
    city: z.string().optional(),
    zip: z.string().optional(),
    country: z.string().optional(),
  });

export type UserSchema = z.infer<ReturnType<typeof createUserSchema>>;
