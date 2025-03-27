'use client';

import { useState } from 'react';

import {
  budgets,
  contactMethod,
  Service,
  services,
  startDate,
} from '@/features/request-form/components/business-data-form';
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

import { type CommonRequestSchema, commonRequestSchema } from '../../lib';
import st from './common-request-form.module.scss';

export function CommonRequestForm() {
  const countryCode = useCountryCode();
  const [dialogOpen, setDialogOpen] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<CommonRequestSchema>({
    resolver: zodResolver(commonRequestSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
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

  return (
    <form onSubmit={onSubmit}>
      <section className={st.formLayout}>
        <section>
          <Title level={3}>Personal Data</Title>
          <section className={st.formInner}>
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
        </section>
        <section>
          <Title level={3}>Business & Marketing Data</Title>
          <section className={st.formInner}>
            <section>
              <Controller
                name="services"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <div className={st.titleService}>
                      <Text>Select the Service You’re Interested In</Text>
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
                      <Text>
                        Your Budget Range. Select your investment range:
                      </Text>
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
                  label="Your Goals & Challenges"
                  placeholder="What are your key objectives and current pain points?"
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
                  label="Who Is Your Target Audience?"
                  placeholder="What are your key objectives and current pain points? Age, Gender, Location, Interests"
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
                    <Text>
                      Your Budget Range. Select your investment range:
                    </Text>
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
                    <Text>
                      Your Budget Range. Select your investment range:
                    </Text>
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
          {isSubmitting ? 'Submitting...' : 'Submit Your Request'}
        </Button>
      </section>
      <ThankYouDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </form>
  );
}
