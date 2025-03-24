'use client';

import { Dialog } from '@/shared/ui/kit/dialog';

import { useLoginModalStore } from '../../services/auth.store';
import { AuthForm } from '../auth-form';

export function LoginDialog() {
  const { open, setOpen } = useLoginModalStore();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <AuthForm />
    </Dialog>
  );
}
