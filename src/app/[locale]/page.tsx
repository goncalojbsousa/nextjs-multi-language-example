'use client'

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageToggle from '@/components/language-toggle';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className='flex justify-center items-center h-screen'>
      <main>
        <div className='flex mb-6 items-center gap-4'>
          <h1>{t('title')}</h1>
          <Link className='px-2 py-1 border border-neutral-400 rounded-lg hover:bg-neutral-100' href="/about">{t('about')}</Link>
        </div>
        <LanguageToggle />
      </main>
    </div>
  );
}