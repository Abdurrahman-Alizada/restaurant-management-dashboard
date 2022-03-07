import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en.json';
import ur from './ur.json'

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: { translations: en},
    ur: { translations: ur}
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
  
export default i18n;
