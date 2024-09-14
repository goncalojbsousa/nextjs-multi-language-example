## About

This is an example of a NextJS application with multiple language support using INTL.

### Features

- Automatic system-based language selection.
- Manual language switching.

## Running locally

Clone the project

```bash
  git clone https://github.com/goncalojbsousa/nextjs-multi-language-example.git
```

Enter the project directory

```bash
  cd nextjs-multi-language-example
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to use
### Adding translations

In the `messages` directory, add JSON files with the translations.

Example translation file (`en.json` or `pt.json`):

```json
{
    "HomePage": {
        "title": "Hello world!",
        "about": "Go to the about page"
    },
    "AboutPage": {
        "title": "About",
        "home" : "Go back to home page"
    }
}
```

### Using translations in the code

Import and use the translations in your components:

```jsx
export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className='flex justify-center items-center h-screen'>
      <main>
        <div className='flex mb-6 items-center gap-4'>
          <h1>{t('title')}</h1>
          <Link href="/about">{t('about')}</Link>
        </div>
        <LanguageToggle />
      </main>
    </div>
  );
}
```

## License

This project is licensed under Unlicense (or 0BSD). This means that you can copy, modify, distribute and use the code for any purpose, without any obligation of attribution or any other restriction.
