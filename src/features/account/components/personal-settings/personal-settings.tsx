'use client';

import { ChangeInfoForm } from './change-info-form';
import { ChangePasswordForm } from './change-password-form';
import st from './personal-settings.module.scss';

export function PersonalSettings() {
  return (
    <section className={st.layout}>
      <ChangeInfoForm />
      <ChangePasswordForm />
    </section>
  );
}
