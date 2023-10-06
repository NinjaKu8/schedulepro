import { useTranslation } from 'react-i18next'
import Dropdown from 'react-bootstrap/Dropdown'
import { useCallback } from 'react';

type Props = {
  className?: string;
}

interface ILang { 
  nativeName: string;
} 

const languages: { [key: string]: ILang } = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' },
  fr: { nativeName: 'Français' },
  de: { nativeName: 'Deutsch' },
  pt: { nativeName: 'Português' },
  it: { nativeName: 'Italiano' },
  nl: { nativeName: 'Nederlands' },
  sv: { nativeName: 'Svenska' },
  no: { nativeName: 'Norsk' },
  fi: { nativeName: 'Suomalainen' },
}

export function LanguageDropdown({ className }: Props): JSX.Element {
  const { i18n } = useTranslation()

  const handleSelect = useCallback((eventKey: string|null): void => {
    if(!eventKey) return 
    i18n.changeLanguage(eventKey)
    // window.location.reload()
  },[i18n])

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle size='sm' className={className}>
        {languages[i18n?.language]?.nativeName ?? 'Language'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.keys(languages).map((lang: string)=>(
          <Dropdown.Item 
            eventKey={lang}
            key={lang} 
            value={lang} 
            active={i18n.resolvedLanguage===lang}
          >
            {languages[lang].nativeName}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
