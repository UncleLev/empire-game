import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from 'src/locales/en.json';
import ua from 'src/locales/ua.json';

export const defaultNS = 'general';

const resources = {
    en,
    ua,
};
export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).use(LanguageDetector).init({
    resources,
    defaultNS: 'general',
    fallbackLng: 'en',
});
