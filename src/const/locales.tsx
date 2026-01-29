interface Locale {
  title: string;
  flag: string;
}

interface Locales {
  [key: string]: Locale;
}

const locales: Locales = {
  en: { title: 'English', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
  es: { title: 'Español', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg' },
  ge: { title: 'Deutsch', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg' },
};

export default locales;
