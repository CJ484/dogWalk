interface Locale {
  title: string;
}

interface Locales {
  [key: string]: Locale;
}

const locales: Locales = {
  en: { title: 'English' },
  es: { title: 'Español' },
  ge: { title: 'Deutsch' },
};

export default locales;
