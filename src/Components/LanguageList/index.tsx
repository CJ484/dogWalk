import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { FaEarthAmericas } from 'react-icons/fa6';
import locales from '../../const/locales';

export default function Languagelist() {
  const { i18n } = useTranslation();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning">
        <FaEarthAmericas />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.keys(locales).map((locale) => (
          <Dropdown.Item
            key={locale}
            onClick={() => i18n.changeLanguage(locale)}
          >
            {locales[locale].title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
