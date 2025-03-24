import type { JSX } from 'react';

import { ClockIcon, CompleteIcon, DeclineIcon } from '@/shared/ui/icons/fill';

export const statusIcon: Record<string, () => JSX.Element> = {
  pending: ClockIcon,
  processing: ClockIcon,
  completed: CompleteIcon,
  cancelled: DeclineIcon,
};

export const paymentIcon: Record<string, () => JSX.Element> = {
  failed: DeclineIcon,
  awaitingPayment: ClockIcon,
  paid: CompleteIcon,
};
