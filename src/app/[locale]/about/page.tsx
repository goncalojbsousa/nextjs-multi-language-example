'use client'

import LanguageToggle from '@/components/language-toggle';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

function About() {
    const t = useTranslations('AboutPage');

    return (
        <div className='flex justify-center items-center h-screen'>
            <main>
                <div className='flex mb-6 items-center gap-4'>
                    <h1>{t('title')}</h1>
                    <Link className='px-2 py-1 border border-neutral-400 rounded-lg hover:bg-neutral-100' href={'/'}>{t('home')}</Link>
                </div>
                <LanguageToggle />

            </main>
        </div>

    )
}

export default About;