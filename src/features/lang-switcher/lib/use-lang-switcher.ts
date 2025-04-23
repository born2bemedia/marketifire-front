import { useEffect, useState } from 'react';

import { cookies } from '@/shared/lib/browser';

import type { LanguageConfig } from './types';

const COOKIE_NAME = 'googtrans';

const getLanguageConfig = (): LanguageConfig | undefined => {
  let cfg: LanguageConfig | undefined;
  if (process.env.GOOGLE_TRANSLATION_CONFIG) {
    try {
      cfg = JSON.parse(process.env.GOOGLE_TRANSLATION_CONFIG!);
    } catch (err) {
      console.error(err);
    }
  }
  return cfg;
};

export const useLanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('');

  useEffect(() => {
    const cfg = getLanguageConfig();
    const existing = cookies.get(COOKIE_NAME);

    if (!existing && cfg?.defaultLanguage) {
      cookies.set(COOKIE_NAME, `/auto/${cfg.defaultLanguage}`, {
        path: '/',
        expires: 30,
        sameSite: 'lax',
        domain: `.${window.location.hostname}`,
      });
      window.location.reload();
      return;
    }

    let lang = '';
    if (existing) {
      const parts = existing.split('/');
      if (parts.length > 2) {
        lang = parts[2];
      }
    }
    if (cfg && !lang) {
      lang = cfg.defaultLanguage;
    }
    setCurrentLanguage(lang);
  }, []);

  const switchLanguage = async (lang: string) => {
    try {
      cookies.remove(COOKIE_NAME);
      cookies.set(COOKIE_NAME, `/auto/${lang}`, {
        path: '/',
        expires: 30,
        sameSite: 'lax',
        domain: `.${window.location.hostname}`,
      });
      window.location.reload();
    } catch (err) {
      console.error('Error setting new language:', err);
    }
  };

  return {
    currentLanguage,
    switchLanguage,
    languageConfig: getLanguageConfig(),
  };
};
