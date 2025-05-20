'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Service } from '@/features/request-form/components/business-data-form';
import { ThankYouDialog } from '@/features/request-form/components/thank-you-dialog';
import { sendRequest } from '@/features/request-form/services/send-request.action';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { Dropdzone } from '@/shared/ui/components/dropzone';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { type CommonRequestSchema, createCommonRequestSchema } from '../../lib';
import st from './common-request-form.module.scss';

export function CommonRequestForm() {
  const tr = useTranslations('requestForm.businessData');
  const te = useTranslations('requestForm.errors');
  const t = useTranslations('requestForm');
  const countryCode = useCountryCode();
  const [dialogOpen, setDialogOpen] = useState(false);

  const schema = createCommonRequestSchema(te);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<CommonRequestSchema>({
    resolver: zodResolver(schema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
    defaultValues: {
      companyName: '',
      email: '',
      fullName: '',
      phone: '',
      website: '',
      goals: '',
      file: undefined,
      contactMethod: '',
      startDate: '',
      targetAudience: '',
      budget: '',
      services: [],
    },
  });

  const onSubmit = handleSubmit(async (data: CommonRequestSchema) => {
    try {
      await sendRequest(data);

      setDialogOpen(true);
    } catch (err) {
      console.log(err);
    }
  });

  const services = [
    tr('services.0'),
    tr('services.1'),
    tr('services.2'),
    tr('services.3'),
    tr('services.4'),
    tr('services.5'),
    tr('services.6'),
  ];

  const budgets = [
    `${tr('budgets')} €1,000`,
    '€1,000 - €5,000',
    '€5,000 - €10,000',
    '€10,000 - €20,000',
    '€20,000+',
  ];

  const startDate = [
    tr('startDate.0'),
    tr('startDate.1'),
    tr('startDate.2'),
    tr('startDate.3'),
  ];

  const contactMethod = [
    tr('contactMethod.0'),
    tr('contactMethod.1'),
    tr('contactMethod.2'),
  ];

  return (
    <form onSubmit={onSubmit}>
      <section className={st.formLayout}>
        <section>
          <Title level={3}>{t('personalData.title')}</Title>
          <section className={st.formInner}>
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
                    placeholder={t(
                      'personalData.fields.companyName.placeholder',
                    )}
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
        </section>
        <section>
          <Title level={3}>{t('businessData.title')}</Title>
          <section className={st.formInner}>
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
                          placeholder={t(
                            'businessData.fields.services.pleaseSpecify',
                          )}
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
                            const updatedServices = checked
                              ? budget
                              : field.value;
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
                  placeholder={t(
                    'businessData.fields.targetAudience.placeholder',
                  )}
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
        </section>
        <Button variant="black" type="submit" className={st.btn} uppercase>
          {isSubmitting ? t('submitting') : t('submitYourRequest')}
        </Button>
      </section>
      <ThankYouDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </form>
  );
}
