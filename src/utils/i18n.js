import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa i file di traduzione
import en from '../locales/en/translation.json';
import it from '../locales/it/translation.json';

i18n
    .use(LanguageDetector) // Rileva automaticamente la lingua
    .use(initReactI18next) // Integrazione con React
    .init({
        resources: {
            en: { translation: en },
            it: { translation: it },
        },
        fallbackLng: 'en', // Lingua predefinita
        interpolation: {
            escapeValue: false, // React già gestisce l'escaping
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie', 'localStorage'], // Salva la lingua rilevata
        },
    });

export default i18n;
