'use client';

import { useState } from 'react';

import { ResetPasswordLetter } from '@/core/auth/components/reset-password/reset-password-letter';
import { resetPassword } from '@/core/auth/services/reset-password.action';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError } from '@/shared/lib/notify';
import { ArrowRight, CaretLeft } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import type { ResetPasswordSchema } from '../../lib/reset-password.schema';
import { resetPasswordSchema } from '../../lib/reset-password.schema';
import { useResetPasswordStore } from '../../services/auth.store';
import st from './reset-password-form.module.scss';

export function ResetPasswordForm() {
  const [approvedEmail, setApprovedEmail] = useState<string>('');
  const [switchToLetter, setSwitchToLetter] = useState<boolean>(false);

  const { switchTo } = useResetPasswordStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = handleSubmit(async (data: ResetPasswordSchema) => {
    const res = await resetPassword(data.email);

    if (res.message === 'Success') {
      setApprovedEmail(data.email);
      setSwitchToLetter(true);
      reset();
    } else {
      notifyError('Something went wrong. Please try again later.');
    }
  });

  return switchToLetter ? (
    <ResetPasswordLetter email={approvedEmail} />
  ) : (
    <form className={st.form} onSubmit={onSubmit}>
      <div>
        <section>
          <section className={st.heading}>
            <button className={st.icon} onClick={() => switchTo(false)}>
              <CaretLeft />
            </button>
            <Title level={2} weight={500}>
              Forgot Password?
            </Title>
          </section>
          <Text className={st.text} color="black60">
            Provide your username or email address, and we’ll send you a link to
            create a new one.
          </Text>
        </section>
        <section className={st.field}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder="Enter your username or email"
                label="Username or email"
                hint={error?.message}
                {...field}
              />
            )}
          />
        </section>
      </div>
      <section className={st.btnLayout}>
        <Button variant="black" disabled={isSubmitting} className={st.btn}>
          {isSubmitting ? (
            <>
              Requesting...
              <Loader />
            </>
          ) : (
            <>
              Reset Your Password <ArrowRight />
            </>
          )}
        </Button>
      </section>
    </form>
  );
}
