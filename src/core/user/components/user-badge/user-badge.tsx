'use client';

import { useCallback, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useLoginModalStore } from '@/core/auth/services/auth.store';
import { logout } from '@/core/auth/services/logout.action';

import { cookies } from '@/shared/lib/browser';
import { notifyError } from '@/shared/lib/notify';
import { cn } from '@/shared/lib/styles';
import { ExitIcon, SignInIcon } from '@/shared/ui/icons/outline';
import { Avatar } from '@/shared/ui/kit/avatar';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import { useUserStore } from '../../services';
import st from './user-badge.module.scss';

export function UserBadge({ className }: { className?: string }) {
  const t = useTranslations('header');

  const { setOpen } = useLoginModalStore();
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const storedUser = cookies.get('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);
  }, [setUser]);

  const initials = useMemo(() => user?.firstName[0] ?? '', [user?.firstName]);

  const logoutHandler = useCallback(async () => {
    const { success } = await logout();

    if (success) {
      setUser(null);
    } else {
      notifyError('Logout failed. Please try again.');
    }
  }, [setUser]);

  return user ? (
    <>
      <Button variant="yellow" className={st.logout} onClick={logoutHandler}>
        {t('logout')} <ExitIcon />
      </Button>
      <Link href="/account" className={cn(st.badge, className)}>
        <Text color="black" weight={400} uppercase>
          {user.firstName} {user.lastName}
        </Text>
        <Avatar initials={initials} />
      </Link>
    </>
  ) : (
    <Button
      variant="yellow"
      className={st.btnWithIcon}
      onClick={() => setOpen(true)}
    >
      <Text uppercase>{t('login')}</Text>
      <SignInIcon />
    </Button>
  );
}
