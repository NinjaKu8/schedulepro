import i18n from 'i18next' // rename i18next so we can export it below with the same name
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
  }, 
    (err) => { if(err) return console.error('i18next error', err) 
  })

export default i18n