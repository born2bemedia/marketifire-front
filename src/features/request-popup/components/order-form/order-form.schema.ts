import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const createOrderFormSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    firstName: z.string().nonempty(t('firstName')),
    lastName: z.string().nonempty(t('lastName')),
    phone: z
      .string()
      .nonempty(t('phone'))
      .refine(isPhoneValid, t('invalidPhone')),
    email: z.string().email(t('invalidEmail')),
    website: z.string(),
    message: z.string(),
  });

export type OrderFormSchema = z.infer<ReturnType<typeof createOrderFormSchema>>;
