'use client';

import { ResetPasswordForm } from '@/core/auth/components/reset-password';
import type { LoginSchema } from '@/core/auth/lib/login.schema';
import { loginSchema } from '@/core/auth/lib/login.schema';
import { login } from '@/core/auth/services/login.action';
import { useUserStore } from '@/core/user/services/user.store';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { ArrowRight, Close } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import {
  useAuthStore,
  useLoginModalStore,
  useResetPasswordStore,
} from '../../services/auth.store';
import st from './login-form.module.scss';

export function LoginForm() {
  const { show, switchTo } = useResetPasswordStore();
  const { setOpen } = useLoginModalStore();
  const { openRegister } = useAuthStore();
  const { setUser } = useUserStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data: LoginSchema) => {
    const res = await login(data);

    if (res.success) {
      setUser(res.user);
      setOpen(false);
      notifySuccess(res.message);
      reset();
    } else {
      notifyError(`Authentication failed. ${res.message} Please try again.`);
    }
  });

  return show ? (
    <ResetPasswordForm />
  ) : (
    <form onSubmit={onSubmit} className={st.form}>
      <section>
        <section className={st.header}>
          <Title level={2} color="black" weight={500}>
            Welcome Back to Marketfire
          </Title>
          <button className={st.icon} onClick={() => setOpen(false)}>
            <Close />
          </button>
        </section>
        <Text color="black60" className={st.textWidth}>
          Access your account by entering your username, email, and password
          below. Need to reset your password? Click &#34;Forgot Password?&#34;
          for assistance.
        </Text>
      </section>
      <section className={st.formInner}>
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
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextField
                placeholder="Enter your password"
                label="Password"
                type="password"
                hint={error?.message}
                {...field}
              />
              <button
                className={st.forgotPassword}
                onClick={() => switchTo(true)}
              >
                <Text color="black60" weight={300} className={st.link}>
                  Forgot your password?
                </Text>
              </button>
            </>
          )}
        />
      </section>
      <section className={st.btnLayout}>
        <Button
          variant="black"
          className={st.btn}
          disabled={isSubmitting}
          uppercase
        >
          {isSubmitting ? (
            <>
              Requesting...
              <Loader />
            </>
          ) : (
            <>
              Log In <ArrowRight />
            </>
          )}
        </Button>
        <Text color="black60" weight={300}>
          Don&#39;t have an account yet?{' '}
          <button
            className={st.link}
            type="button"
            onClick={() => openRegister(true)}
          >
            Registration
          </button>
        </Text>
      </section>
    </form>
  );
}
