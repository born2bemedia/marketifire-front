'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';

import styles from './CookiePopup.module.scss';
const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const t = useTranslations('cookiePopup');

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={classNames(styles.cookiePopup, {
        [styles.visible]: isVisible,
      })}
    >
      <h2>{t('title')}</h2>
      <p>
        {t('text')} <Link href="/cookie-policy">{t('link')}</Link>.
      </p>
      <div className={styles.buttons}>
        <button onClick={handleDecline} className={classNames(styles.decline)}>
          {t('decline')}
        </button>
        <button onClick={handleAccept} className={classNames(styles.accept)}>
          {t('accept')}
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
