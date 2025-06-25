'use client';

import { useTranslations } from 'next-intl';

import {
  type ChangePasswordSchema,
  createChangePasswordSchema,
} from '@/core/user/lib/change-password.schema';
import { changePassword, useUserStore } from '@/core/user/services';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { Pencil } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import st from './personal-settings.module.scss';

export function ChangePasswordForm() {
  const t = useTranslations('account.changePassword');
  const te = useTranslations('account.changePassword.errors');
  const { user } = useUserStore();

  const changePasswordSchema = createChangePasswordSchema(te);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = handleSubmit(async (data: ChangePasswordSchema) => {
    const res = await changePassword({ ...data, userID: user?.id ?? -1 });

    if (res.message) {
      notifySuccess(res.message);
      reset();
    } else {
      console.error(res);
      notifyError('Password change failed. Please try again later.');
    }
  });

  return (
    <form className={st.form} onSubmit={onSubmit}>
      <section className={st.title}>
        <Title level={3} weight={500}>
          {t('title')}
        </Title>
        <Button variant="sand" className={st.btn} uppercase>
          {isSubmitting ? (
            <>
              {t('editing')}
              <Loader width={14} height={14} />
            </>
          ) : (
            <>
              {t('edit')} <Pencil />
            </>
          )}
        </Button>
      </section>
      <section className={st.row}>
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder={t('fields.password.placeholder')}
              label={t('fields.password.label')}
              hint={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder={t('fields.confirmPassword.placeholder')}
              label={t('fields.confirmPassword.label')}
              hint={error?.message}
              {...field}
            />
          )}
        />
      </section>
    </form>
  );
}
