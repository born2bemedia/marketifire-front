'use client';

import type { FormEvent } from 'react';

import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { Close } from '@/shared/ui/icons/fill';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import {
  useLoginModalStore,
  useResetPasswordStore,
} from '../../services/auth.store';
import { resetPassword } from '../../services/reset-password.action';
import st from './reset-password-form.module.scss';

export function ResetPasswordLetter({ email }: { email: string }) {
  const { setOpen } = useLoginModalStore();
  const { switchTo } = useResetPasswordStore();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await resetPassword(email);

    if (res.message === 'Success') {
      notifySuccess('Password reset link sent');
    } else {
      notifyError(
        `Something went wrong. ${res.errors.map((e: { message: string }) => e.message).join(' ')}`,
      );
    }
  };

  return (
    <form onSubmit={onSubmit} className={st.letterForm}>
      <section>
        <div className={st.letterHeading}>
          <Title level={2} weight={500}>
            Password Reset
          </Title>
          <button
            className={st.icon}
            onClick={() => {
              setOpen(false);
              switchTo(false);
            }}
          >
            <Close />
          </button>
        </div>
        <Text color="black" className={st.letterMsg}>
          We have sent a password reset link to the mail: {email}
          <br />
          Please check your mail
        </Text>
      </section>
      <div className={st.letterSendAgain}>
        <Text color="black60">Didn&#39;t receive a letter?</Text>
        <button type="submit">
          <Text color="black60" className={st.link}>
            Send again
          </Text>
        </button>
      </div>
    </form>
  );
}
