'use client';
import { useEffect, useState } from 'react';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
//import { useCountryCode } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';

import { useModalStore } from '../../services/modal.store';
import st from './order-form.module.scss';
import { type OrderFormSchema, orderFormSchema } from './order-form.schema';

export function OrderForm({
  setThanksPopupOpen,
  product,
}: {
  setThanksPopupOpen: (open: boolean) => void;
  product: string;
}) {
  //const countryCode = useCountryCode();
  const { isOpen } = useModalStore();
  const [productValue, setProductValue] = useState(product);

  useEffect(() => {
    setProductValue(product);
  }, [product]);

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
      const response = await fetch('/api/product-request', {
        method: 'POST',
        body: JSON.stringify(orderData),
      });
      if (!response.ok) {
        throw new Error('Failed to send form');
      }
    } catch (e) {
      console.error('Error send form', e);
    } finally {
      setThanksPopupOpen(true);
      reset();
    }
  });

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <form onSubmit={onSubmit} className={st.formLayout}>
      <div className={`${st.inputWrap} ${errors.firstName ? st.error : ''}`}>
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder="Enter First Name"
              label="First Name"
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
              placeholder="Enter Last Name"
              label="Last Name"
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
              placeholder="Enter Your Email"
              label="Email"
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
              label="Phone"
              country={'gb'}
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
              placeholder="Enter your website URL"
              label="Your Website (optional)"
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
            <TextField
              placeholder="Please write your thoughts..."
              label="Message"
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
          {isSubmitting ? <>Sending...</> : <>Submit</>}
        </Button>
      </div>
    </form>
  );
}
