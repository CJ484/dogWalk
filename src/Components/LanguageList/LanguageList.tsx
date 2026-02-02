import { useTranslation } from 'react-i18next';
import { FaEarthAmericas, FaChevronDown } from 'react-icons/fa6';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { Button } from '@/Components/ui/button';
import locales from '@/const/locales';
import './LanguageList.scss';

export default function Languagelist() {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="languageList__button" variant="default" size="default">
          <FaEarthAmericas />
          <span>Language</span>
          <FaChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="languageList__content">
        {Object.keys(locales).map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => i18n.changeLanguage(locale)}
            className="languageList__content__item"
          >
            <img className="languageList__content__item__flag" src={locales[locale].flag} alt={locale} />
            <span className="languageList__content__item__title">{locales[locale].title}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
