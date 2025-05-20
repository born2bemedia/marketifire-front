'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { ArrowLeft, ArrowRight } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { createRequestFormSchema, type RequestFormSchema } from '../../lib';
import { useRequestFormStore } from '../../services';
import st from './personal-data-form.module.scss';

export function PersonalDataForm() {
  const t = useTranslations('requestForm');
  const te = useTranslations('requestForm.errors');

  const countryCode = useCountryCode();
  const { setData } = useRequestFormStore();

  const schema = createRequestFormSchema(te);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RequestFormSchema>({
    resolver: zodResolver(schema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
    defaultValues: {
      companyName: '',
      email: '',
      fullName: '',
      phone: '',
      website: '',
    },
  });

  const onSubmit = handleSubmit((data: RequestFormSchema) => {
    setData({ ...data, step: 2 });
  });

  return (
    <form onSubmit={onSubmit}>
      <section className={st.header}>
        <Title level={3}>{t('personalData.title')}</Title>
        <Image
          src="/request-form/level-indicator-1.svg"
          alt="level-indicator"
          width={34}
          height={34}
        />
      </section>
      <section className={st.formLayout}>
        <section className={st.row}>
          <Controller
            name="fullName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                placeholder={t('personalData.fields.fullName.placeholder')}
                label={t('personalData.fields.fullName.label')}
                hint={error?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                placeholder={t('personalData.fields.email.placeholder')}
                label={t('personalData.fields.email.label')}
                hint={error?.message}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <PhoneField
                {...field}
                country={countryCode}
                label={t('personalData.fields.phone.label')}
                hint={error?.message}
              />
            )}
          />
          <Controller
            name="companyName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                placeholder={t('personalData.fields.companyName.placeholder')}
                label={t('personalData.fields.companyName.label')}
                hint={error?.message}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="website"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                placeholder={t('personalData.fields.website.placeholder')}
                label={t('personalData.fields.website.label')}
                hint={error?.message}
              />
            )}
          />
        </section>
      </section>
      <section className={st.btns}>
        <Button variant="white" className={st.btn} disabled>
          <ArrowLeft />
          {t('back')}
        </Button>
        <Button variant="black" className={st.btn} type="submit">
          {isSubmitting ? t('processing') : t('nextStep')}
          <ArrowRight />
        </Button>
      </section>
    </form>
  );
}
