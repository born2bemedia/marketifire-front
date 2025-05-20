import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/ui/kit/phone-field';

export const createRequestFormSchema = (
  t: ReturnType<typeof useTranslations>,
) =>
  z.object({
    fullName: z.string().nonempty(t('fullName')),
    email: z.string().email(t('email')),
    phone: z
      .string()
      .nonempty(t('phone'))
      .refine(isPhoneValid, t('phoneInvalid')),
    companyName: z.string().optional(),
    website: z.string().optional(),
  });

export type RequestFormSchema = z.infer<
  ReturnType<typeof createRequestFormSchema>
>;
