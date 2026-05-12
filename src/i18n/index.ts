import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en } from './locales/en'
import { de } from './locales/de'

export const SUPPORTED_LANGS = ['en', 'de'] as const
export type Lang = (typeof SUPPORTED_LANGS)[number]

const STORAGE_KEY = 'devportfolio-lang'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    nonExplicitSupportedLngs: true,
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
    returnNull: false,
  })

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng.startsWith('de') ? 'de' : 'en'
  }
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.resolvedLanguage?.startsWith('de') ? 'de' : 'en'
}

export default i18n
