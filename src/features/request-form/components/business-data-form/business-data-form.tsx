'use client';

import Image from 'next/image';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { type BusinessDataSchema, businessDataSchema } from '../../lib';
import st from './business-data-form.module.scss';

const services = [
  'Marketing & Growth Strategies',
  'Performance Marketing & Conversion Optimization',
  'Business Consulting & Expansion Planning',
  'Content & Audience Engagement',
  'Automation & Digital Transformation',
  'Strategic Growth & Competitive Edge',
  'Other',
];

const budgets = [
  'Under €1,000',
  '€1,000 - €5,000',
  '€5,000 - €10,000',
  '€10,000 - €20,000',
  '€20,000+',
];

export function BusinessDataForm() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<BusinessDataSchema>({
    resolver: zodResolver(businessDataSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
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

  return (
    <form>
      <section className={st.header}>
        <Title level={3}>Personal Data</Title>
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
                  <Text>Your Budget Range. Select your investment range:</Text>
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
      </section>
    </form>
  );
}

function Service({
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
