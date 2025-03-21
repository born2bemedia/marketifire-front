'use client';

import { useRequestFormStore } from '../../services';
import { BusinessDataForm } from '../business-data-form';
import { PersonalDataForm } from '../personal-data-form';

export function RequestForm() {
  const { step } = useRequestFormStore();

  return (
    <section>
      {step === 1 ? <PersonalDataForm /> : <BusinessDataForm />}
    </section>
  );
}
