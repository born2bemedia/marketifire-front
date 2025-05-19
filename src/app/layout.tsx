import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { GoogleAnalytics } from '@next/third-parties/google';

import CookiePopup from '@/features/cookie-popup/CookiePopup';

import { Toaster } from '@/shared/lib/notify';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';
import { Preloader } from '@/shared/ui/components/preloader';

import 'modern-normalize/modern-normalize.css';
import './globals.css';
import './reset.css';
import { routing } from '@/i18n/routing';

const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.png',
        href: '/logo.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo.png',
        href: '/logo.png',
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={outfitFont.variable}>
        <GoogleAnalytics gaId="G-0NR0307GP5" />
        <Header />
        <Preloader />
        {children}
        <Footer />
        <Toaster position="bottom-right" reverseOrder={false} />
        <CookiePopup />
      </body>
    </html>
  );
}
