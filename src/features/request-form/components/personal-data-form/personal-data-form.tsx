'use client';

import { useEffect, useState } from 'react';

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
  const [hydratedCountry, setHydratedCountry] = useState('us');
  const { setData } = useRequestFormStore();

  useEffect(() => {
    setHydratedCountry(countryCode);
  }, [countryCode]);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RequestFormSchema>({
    resolver: zodResolver(requestFormSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
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
      <section>
        <Title level={3}>Personal Data</Title>
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
                country={hydratedCountry}
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
        <Button variant="white" className={st.btn}>
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
