'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ThankYouDialog } from '@/features/request-form/components/thank-you-dialog';
import { useRequestFormStore } from '@/features/request-form/services';
import { sendRequest } from '@/features/request-form/services/send-request.action';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { Dropdzone } from '@/shared/ui/components/dropzone';
import { ArrowLeft, ArrowRight } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { type BusinessDataSchema, createBusinessDataSchema } from '../../lib';
import st from './business-data-form.module.scss';

export function BusinessDataForm() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const t = useTranslations('requestForm');
  const te = useTranslations('requestForm.errors');
  const { fullName, email, phone, website, companyName, setData } =
    useRequestFormStore();

  const schema = createBusinessDataSchema(te);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<BusinessDataSchema>({
    resolver: zodResolver(schema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
    defaultValues: {
      services: [],
      budget: '',
      file: undefined,
      contactMethod: '',
      goals: '',
      startDate: '',
      targetAudience: '',
    },
  });

  const onSubmit = handleSubmit(async (data: BusinessDataSchema) => {
    try {
      await sendRequest({
        ...data,
        fullName,
        phone,
        website,
        companyName,
        email,
      });

      setDialogOpen(true);
    } catch (err) {
      console.log(err);
    }
  });

  const services = [
    t('businessData.services.0'),
    t('businessData.services.1'),
    t('businessData.services.2'),
    t('businessData.services.3'),
    t('businessData.services.4'),
    t('businessData.services.5'),
    t('businessData.services.6'),
  ];

  const budgets = [
    `${t('businessData.budgets')} €1,000`,
    '€1,000 - €5,000',
    '€5,000 - €10,000',
    '€10,000 - €20,000',
    '€20,000+',
  ];

  const startDate = [
    t('businessData.startDate.0'),
    t('businessData.startDate.1'),
    t('businessData.startDate.2'),
    t('businessData.startDate.3'),
  ];

  const contactMethod = [
    t('businessData.contactMethod.0'),
    t('businessData.contactMethod.1'),
    t('businessData.contactMethod.2'),
  ];

  return (
    <form onSubmit={onSubmit}>
      <section className={st.header}>
        <Title level={3}>{t('businessData.title')}</Title>
        <Image
          src="/request-form/level-indicator-2.svg"
          alt="level-indicator"
          width={34}
          height={34}
        />
      </section>
      <section className={st.formLayout}>
        <section>
          <Controller
            name="services"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <div className={st.titleService}>
                  <Text>{t('businessData.fields.services.label')}</Text>
                  {error?.message ? <Text>* {error?.message}</Text> : null}
                </div>
                <div className={st.grid}>
                  {services.map(service => (
                    <Service
                      key={service}
                      title={service}
                      checked={field.value.some(item => item === service)}
                      onChecked={checked => {
                        const updatedServices = checked
                          ? [...field.value, service]
                          : field.value.filter(s => s !== service);
                        field.onChange(updatedServices);
                      }}
                    />
                  ))}
                </div>
                {field.value.some(value => value === 'Other') ? (
                  <div>
                    <TextField
                      placeholder="Please specify"
                      className={st.specifyInput}
                      onChange={e =>
                        field.onChange([...field.value, e.target.value])
                      }
                    />
                  </div>
                ) : null}
              </div>
            )}
          />
        </section>
        <section>
          <Controller
            name="budget"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <div className={st.titleService}>
                  <Text>{t('businessData.fields.budget.label')}</Text>
                  {error?.message ? <Text>* {error?.message}</Text> : null}
                </div>
                <div className={st.grid}>
                  {budgets.map(budget => (
                    <Service
                      key={budget}
                      title={budget}
                      checked={field.value === budget}
                      onChecked={checked => {
                        const updatedServices = checked ? budget : field.value;
                        field.onChange(updatedServices);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          />
        </section>
        <Controller
          name="goals"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextArea
              {...field}
              label={t('businessData.fields.goals.label')}
              placeholder={t('businessData.fields.goals.placeholder')}
              hint={error?.message}
            />
          )}
        />
        <Controller
          name="targetAudience"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextArea
              {...field}
              label={t('businessData.fields.targetAudience.label')}
              placeholder={t('businessData.fields.targetAudience.placeholder')}
              hint={error?.message}
            />
          )}
        />
        <Controller
          name="startDate"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <section>
              <div className={st.titleService}>
                <Text>{t('businessData.fields.startDate.label')}</Text>
                {error?.message ? <Text>* {error?.message}</Text> : null}
              </div>
              <div className={st.grid}>
                {startDate.map(date => (
                  <Service
                    key={date}
                    title={date}
                    checked={field.value === date}
                    onChecked={checked =>
                      field.onChange(checked ? date : field.value)
                    }
                  />
                ))}
              </div>
            </section>
          )}
        />
        <Controller
          name="contactMethod"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <section>
              <div className={st.titleService}>
                <Text>{t('businessData.fields.contactMethod.label')}</Text>
                {error?.message ? <Text>* {error?.message}</Text> : null}
              </div>
              <div className={st.grid}>
                {contactMethod.map(method => (
                  <Service
                    key={method}
                    title={method}
                    checked={field.value === method}
                    onChecked={checked =>
                      field.onChange(checked ? method : field.value)
                    }
                  />
                ))}
              </div>
            </section>
          )}
        />
        <Controller
          name="file"
          control={control}
          render={({ field }) => (
            <Dropdzone
              name="file"
              onDrop={field.onChange}
              value={field.value}
            />
          )}
        />
      </section>
      <section className={st.btns}>
        <Button
          size="md"
          variant="white"
          className={st.btn}
          type="button"
          onClick={() => setData({ step: 1 })}
        >
          <ArrowLeft />
          {t('back')}
        </Button>
        <Button size="md" variant="black" className={st.btn} type="submit">
          {isSubmitting ? t('submitting') : t('submit')}
          <ArrowRight />
        </Button>
      </section>
      <ThankYouDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </form>
  );
}

export function Service({
  title,
  checked,
  onChecked,
}: {
  title: string;
  checked: boolean;
  onChecked: (value: boolean) => void;
}) {
  return (
    <div className={st.service}>
      <Checkbox checked={checked} onCheckedChange={onChecked} label={title} />
    </div>
  );
}
