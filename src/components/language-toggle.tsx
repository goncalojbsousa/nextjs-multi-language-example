import { Link, usePathname } from '@/i18n/routing';

function LanguageToggle() {
    // Current path
    const pathname = usePathname();
    return (
        <div className='space-x-8'>
            <Link className='text-white bg-neutral-900 px-2 py-1 rounded-lg' href={pathname} locale='pt'>PT</Link>
            <Link className='text-white bg-neutral-900 px-2 py-1 rounded-lg' href={pathname} locale='en'>EN</Link>
        </div>
    )
}

export default LanguageToggle;