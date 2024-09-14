'use client'

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageToggle from '@/components/language-toggle';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className='flex justify-center items-center h-screen'>
      <main>
        <h1>{t('title')}</h1>
        <Link href="/about">{t('about')}</Link>
        <LanguageToggle />
      </main>
    </div>
  );
}