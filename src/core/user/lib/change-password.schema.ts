import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';

export const createChangePasswordSchema = (
  t: ReturnType<typeof useTranslations>,
) =>
  z
    .object({
      password: z.string().nonempty(t('password')),
      confirmPassword: z.string().nonempty(t('confirmPassword')),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: t('passwordsDoNotMatch'),
      path: ['confirmPassword'],
    });

export type ChangePasswordSchema = z.infer<
  ReturnType<typeof createChangePasswordSchema>
>;
