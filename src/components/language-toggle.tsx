import { Link, usePathname } from '@/i18n/routing';

function LanguageToggle() {
    // Current path
    const pathname = usePathname();
    return (
        <div className='space-x-8'>
            <Link href={pathname} locale='pt'>PT</Link>
            <Link href={pathname} locale='en'>EN</Link>
        </div>
    )
}

export default LanguageToggle;