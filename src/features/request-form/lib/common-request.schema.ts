import type { useTranslations } from 'next-intl';

import type { z } from '@/shared/lib/forms';

import { createBusinessDataSchema } from './business-data.schema';
import { createRequestFormSchema } from './request-form.schema';

export const createCommonRequestSchema = (
  t: ReturnType<typeof useTranslations>,
) => {
  const schema = createRequestFormSchema(t);
  const businessDataSchema = createBusinessDataSchema(t);

  return schema.merge(businessDataSchema);
};

export type CommonRequestSchema = z.infer<
  ReturnType<typeof createCommonRequestSchema>
>;
