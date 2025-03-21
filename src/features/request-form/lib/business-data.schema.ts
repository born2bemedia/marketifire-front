import { z } from '@/shared/lib/forms';

export const businessDataSchema = z.object({
  services: z.array(z.string()),
  budget: z.string().nonempty('Please provide your budget'),
  goals: z.string().nonempty('Please provide your Goals & Challenges'),
  targetAudience: z.string().nonempty('Please provide your Target Audience'),
  startDate: z.string().nonempty('Please provide your Start Date'),
  contactMethod: z.string().nonempty('Please provide your Contact Method'),
  file: z.instanceof(File).optional(),
});

export type BusinessDataSchema = z.infer<typeof businessDataSchema>;
