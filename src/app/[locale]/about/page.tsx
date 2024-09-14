'use client'

import LanguageToggle from '@/components/language-toggle';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

function About() {
    const t = useTranslations('AboutPage');

    return (
        <div className='flex justify-center items-center h-screen'>
            <main>
                <h1>{t('title')}</h1>
                <Link href={'/'}>{t('home')}</Link>
                <LanguageToggle />
            </main>
        </div>

    )
}

export default About;