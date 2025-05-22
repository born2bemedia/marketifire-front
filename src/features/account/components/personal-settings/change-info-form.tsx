'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { createUserSchema, type UserSchema } from '@/core/user/lib';
import { saveUser, useUserStore } from '@/core/user/services';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { Pencil } from '@/shared/ui/icons/outline';
import { Autocomplete } from '@/shared/ui/kit/autocomplete';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { allowedCountries } from '../../lib';
import st from './personal-settings.module.scss';

export function ChangeInfoForm() {
  const [edit, setEdit] = useState<boolean>(false);

  const t = useTranslations('account.personalInfo');
  const te = useTranslations('account.personalInfo.errors');
  const { user, setUser } = useUserStore();
  const countryCode = useCountryCode();

  const userSchema = createUserSchema(te);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: user?.email ?? '',
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      phone: user?.phone ?? '',
      address: user?.address ?? '',
      city: user?.city ?? '',
      zip: user?.zip ?? '',
      country: user?.country ?? '',
    },
  });

  const onSubmit = handleSubmit(async (data: UserSchema) => {
    if (edit) {
      const res = await saveUser({ ...data, userID: user?.id ?? -1 });

      if (res.message) {
        reset(data);
        setUser(res.doc);
        notifySuccess(res.message);
        setEdit(false);
      } else {
        console.error(res);
        notifyError('Failed to save user data. Please try again later.');
      }
    }
  });

  return (
    <form className={st.form} onSubmit={onSubmit}>
      <section className={st.title}>
        <Title level={3} weight={500}>
          {t('title')}
        </Title>
        {edit ? (
          <Button variant="sand" type="submit" className={st.btn}>
            {isSubmitting ? (
              <>
                {t('saving')}
                <Loader width={14} height={14} />
              </>
            ) : (
              <>{t('save')}</>
            )}
          </Button>
        ) : (
          <Button
            variant="sand"
            type="button"
            className={st.btn}
            onClick={e => {
              e.preventDefault();
              setEdit(true);
            }}
            uppercase
          >
            {t('edit')} <Pencil />
          </Button>
        )}
      </section>
      <section className={st.formInner}>
        <section className={st.row}>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.firstName.placeholder')}
                label={t('fields.firstName.label')}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.lastName.placeholder')}
                label={t('fields.lastName.label')}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.email.placeholder')}
                label={t('fields.email.label')}
                disabled={!edit}
                hint={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error, isTouched } }) => (
              <PhoneField
                label={t('fields.phone.label')}
                country={countryCode}
                hint={isTouched ? error?.message : undefined}
                disabled={!edit}
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="address"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.address.placeholder')}
                label={t('fields.address.label')}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.city.placeholder')}
                label={t('fields.city.label')}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="zip"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.zip.placeholder')}
                label={t('fields.zip.label')}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Autocomplete
                initialValue={field.value}
                items={allowedCountries}
                placeholder={t('fields.country.placeholder')}
                label={t('fields.country.label')}
                hint={error?.message}
                onChange={field.onChange}
                disabled={!edit}
              />
            )}
          />
        </section>
      </section>
    </form>
  );
}
