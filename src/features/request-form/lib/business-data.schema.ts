import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';

export const createBusinessDataSchema = (
  t: ReturnType<typeof useTranslations>,
) =>
  z.object({
    services: z.array(z.string()),
    budget: z.string().nonempty(t('budget')),
    goals: z.string().nonempty(t('goals')),
    targetAudience: z.string().nonempty(t('targetAudience')),
    startDate: z.string().nonempty(t('startDate')),
    contactMethod: z.string().nonempty(t('contactMethod')),
    file: z.instanceof(File).optional(),
  });

export type BusinessDataSchema = z.infer<
  ReturnType<typeof createBusinessDataSchema>
>;
