'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useUserStore } from '@/core/user/services';

import { clearCart } from '@/features/cart/services/clear-cart';
import { useCartModalStore } from '@/features/cart/services/modal.store';
import { allowedCountries } from '@/features/checkout/lib/countries';
import {
  type OrderSchema,
  orderSchema,
} from '@/features/checkout/lib/order.schema';
import { createOrder } from '@/features/checkout/services/create-order.action';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { notifyError } from '@/shared/lib/notify';
import { Autocomplete } from '@/shared/ui/kit/autocomplete';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Loader } from '@/shared/ui/kit/loader';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import st from './billing-details.module.scss';

export function BillingDetails() {
  const t = useTranslations('checkout');

  const countryCode = useCountryCode();
  const { cartProducts, cartTotal } = useCartModalStore();
  const [isThanksPopupOpen, setIsThanksPopupOpen] = useState(false);
  const router = useRouter();
  const { user } = useUserStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: user?.email || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      phone: user?.phone || '',
      zip: user?.zip || '',
      city: user?.city || '',
      street: user?.address || '',
      addressLine2: '',
      country: user?.country ?? '',
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        email: user.email || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        phone: user.phone || '',
        zip: user.zip || '',
        city: user.city || '',
        street: user.address || '',
        addressLine2: '',
        country: user?.country ?? '',
      });
    }
  }, [user, reset]);

  const handleThanksPopupClose = () => {
    setIsThanksPopupOpen(false);
    clearCart();
    reset();
    router.push('/');
  };

  const onSubmit = handleSubmit(async (data: OrderSchema) => {
    const res = await createOrder({
      products: cartProducts,
      billing: data,
      totalPrice: cartTotal,
      user,
      message: data.message || '',
    });

    if (res?.message === 'Order successfully created.') {
      setIsThanksPopupOpen(true);
    } else {
      console.error(res);
      notifyError('Something went wrong. Please try again later.');
    }
  });
  return (
    <div className={st.billingDetails}>
      <Title level={3}>{t('billingDetails')}</Title>
      <form className={st.layout} onSubmit={onSubmit}>
        <div className={st.fields}>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.firstName.placeholder')}
                label={t('fields.firstName.label')}
                hint={error?.message}
                className={error?.message ? st.error : ''}
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
                className={error?.message ? st.error : ''}
                {...field}
              />
            )}
          />
          <Controller
            name="street"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.street.placeholder')}
                label={t('fields.street.label')}
                hint={error?.message}
                className={error?.message ? st.error : ''}
                {...field}
              />
            )}
          />
          <Controller
            name="addressLine2"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.addressLine2.placeholder')}
                label={t('fields.addressLine2.label')}
                hint={error?.message}
                className={error?.message ? st.error : ''}
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
                className={error?.message ? st.error : ''}
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
              />
            )}
          />
          <Controller
            name="zip"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.zip.placeholder')}
                label={t('fields.zip.label')}
                hint={error?.message}
                className={error?.message ? st.error : ''}
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
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.email.placeholder')}
                label={t('fields.email.label')}
                hint={error?.message}
                className={error?.message ? st.error : ''}
                {...field}
              />
            )}
          />
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('fields.paymentMethod.placeholder')}
                label={t('fields.paymentMethod.label')}
                hint={error?.message}
                disabled
                {...field}
              />
            )}
          />

          <div className={st.fullWidth}>
            <Text className={st.paymentInfo}>* {t('info')}.</Text>
          </div>
        </div>
        <div className={st.additionalInfo}>
          <Title level={3}>{t('addInfo')}</Title>
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
        <div className={st.agreement}>
          <section className={st.checks}>
            <Controller
              name="agreement"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <Checkbox
                    id="terms-agreement"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    label={t('fields.agreement.label')}
                  />
                  {error && (
                    <Text className={st.agreementError}>{error.message}</Text>
                  )}
                </div>
              )}
            />
            <Controller
              name="isDetailsCorrect"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <Checkbox
                    id="refund-policy-agreement"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    label={t('fields.isDetailsCorrect.label')}
                  />
                  {error && (
                    <Text className={st.agreementError}>{error.message}</Text>
                  )}
                </div>
              )}
            />
          </section>
          <Button variant="black" className={st.btn} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                {t('sending')}
                <Loader />
              </>
            ) : (
              <>{t('submit')}</>
            )}
          </Button>
          <Text className={st.agreementText}>
            {t('weProcess')}{' '}
            <Link href="/privacy-policy">{t('privacyPolicy')}</Link>.
          </Text>
        </div>
      </form>
      <div className={`${st.modalWrapper} ${isThanksPopupOpen ? st.open : ''}`}>
        <div className={st.modalThanks}>
          <Title level={2}>{t('modal.title')}</Title>
          <Text>{t('modal.text')}</Text>
          <Image
            className={st.thanksImageMob}
            src="/pricing/thanksMob.png"
            alt="Thank you"
            width={343}
            height={169}
          />
          <Button variant="black" onClick={handleThanksPopupClose}>
            {t('modal.goToHomePage')}
          </Button>
          <Image
            className={st.thanksImage}
            src="/pricing/thanks.png"
            alt="Thank you"
            width={914}
            height={132}
          />
        </div>
      </div>
    </div>
  );
}
