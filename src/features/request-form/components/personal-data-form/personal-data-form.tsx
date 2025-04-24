'use client';

import Image from 'next/image';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { ArrowLeft, ArrowRight } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { type RequestFormSchema, requestFormSchema } from '../../lib';
import { useRequestFormStore } from '../../services';
import st from './personal-data-form.module.scss';

export function PersonalDataForm() {
  const countryCode = useCountryCode();
  const { setData } = useRequestFormStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RequestFormSchema>({
    resolver: zodResolver(requestFormSchema),
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
        <Title level={3}>Personal Data</Title>
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
                placeholder="Enter your full name"
                label="Full Name"
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
                placeholder="Enter your email address"
                label="Email Address"
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
                label="Phone number"
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
                placeholder="Enter your company name"
                label="Company Name (optional)"
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
                placeholder="Enter your website URL"
                label="Your Website (optional)"
                hint={error?.message}
              />
            )}
          />
        </section>
      </section>
      <section className={st.btns}>
        <Button variant="white" className={st.btn} disabled>
          <ArrowLeft />
          Back
        </Button>
        <Button variant="black" className={st.btn} type="submit">
          {isSubmitting ? 'Processing...' : 'Next Step'}
          <ArrowRight />
        </Button>
      </section>
    </form>
  );
}
