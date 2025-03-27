import type { z } from '@/shared/lib/forms';

import { businessDataSchema } from './business-data.schema';
import { requestFormSchema } from './request-form.schema';

export const commonRequestSchema = businessDataSchema.merge(requestFormSchema);

export type CommonRequestSchema = z.infer<typeof commonRequestSchema>;
