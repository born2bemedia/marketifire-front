'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';

import { useModalStore } from '../../services/modal.store';
import st from './order-form.module.scss';
import {
  createOrderFormSchema,
  type OrderFormSchema,
} from './order-form.schema';

export function OrderForm({
  setThanksPopupOpen,
  product,
}: {
  setThanksPopupOpen: (open: boolean) => void;
  product: string;
}) {
  const t = useTranslations('orderForm');
  const te = useTranslations('orderForm.errors');

  const countryCode = useCountryCode();
  const { isOpen } = useModalStore();
  const [productValue, setProductValue] = useState(product);

  useEffect(() => {
    setProductValue(product);
  }, [product]);

  const orderFormSchema = createOrderFormSchema(te);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      website: '',
      message: '',
    },
  });

  const onSubmit = handleSubmit(async (data: OrderFormSchema) => {
    const orderData = {
      ...data,
      product: productValue,
    };
    try {
      await fetch('/api/product-request', {
        method: 'POST',
        body: JSON.stringify(orderData),
      });
    } catch (e) {
      console.error('Error send form', e);
    } finally {
      setThanksPopupOpen(true);
      reset();
    }
  });

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  return (
    <form onSubmit={onSubmit} className={st.formLayout}>
      <div className={`${st.inputWrap} ${errors.firstName ? st.error : ''}`}>
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder={t('fields.firstName.placeholder')}
              label={t('fields.firstName.label')}
              hint={error?.message}
              {...field}
            />
          )}
        />
      </div>
      <div className={`${st.inputWrap} ${errors.lastName ? st.error : ''}`}>
        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder={t('fields.lastName.placeholder')}
              label={t('fields.lastName.label')}
              hint={error?.message}
              {...field}
            />
          )}
        />
      </div>
      <div className={`${st.inputWrap} ${errors.email ? st.error : ''}`}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder={t('fields.email.placeholder')}
              label={t('fields.email.label')}
              hint={error?.message}
              {...field}
            />
          )}
        />
      </div>
      <div className={`${st.inputWrap} `}>
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error, isTouched } }) => (
            <PhoneField
              label={t('fields.phone.label')}
              country={countryCode}
              hint={isTouched ? error?.message : undefined}
              {...field}
            />
          )}
        />
      </div>
      <div className={`${st.inputWrap} ${st.wide}`}>
        <Controller
          name="website"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder={t('fields.website.placeholder')}
              label={t('fields.website.label')}
              hint={error?.message}
              {...field}
            />
          )}
        />
      </div>
      <div className={`${st.inputWrap} ${st.wide}`}>
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextArea
              placeholder={t('fields.message.placeholder')}
              label={t('fields.message.label')}
              hint={error?.message}
              {...field}
            />
          )}
        />
      </div>
      <div className={st.button}>
        <Button
          variant="black"
          className={st.requestBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? t('sending') : t('submit')}
        </Button>
      </div>
    </form>
  );
}
