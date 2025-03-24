'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';

import { useLoginModalStore } from '@/core/auth/services/auth.store';

import { cookies } from '@/shared/lib/browser';
import { cn } from '@/shared/lib/styles';
import { SignInIcon } from '@/shared/ui/icons/outline';
import { Avatar } from '@/shared/ui/kit/avatar';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import { useUserStore } from '../../services';
import st from './user-badge.module.scss';

export function UserBadge({ className }: { className?: string }) {
  const { setOpen } = useLoginModalStore();
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const storedUser = cookies.get('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);
  }, [setUser]);

  const initials = useMemo(() => user?.firstName[0] ?? '', [user?.firstName]);

  return user ? (
    <Link href="/account" className={cn(st.badge, className)}>
      <Text color="black" weight={400} uppercase>
        {user.firstName} {user.lastName}
      </Text>
      <Avatar initials={initials} />
    </Link>
  ) : (
    <Button
      variant="yellow"
      className={st.btnWithIcon}
      onClick={() => setOpen(true)}
    >
      <Text uppercase>Login</Text>
      <SignInIcon />
    </Button>
  );
}
