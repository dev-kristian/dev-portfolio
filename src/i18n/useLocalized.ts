import { useTranslation } from 'react-i18next'
import type { Lang } from './index'

export type Localized<T> = { en: T; de: T }

export function useLang(): Lang {
  const { i18n } = useTranslation()
  const resolved = i18n.resolvedLanguage ?? i18n.language ?? 'en'
  return resolved.startsWith('de') ? 'de' : 'en'
}

export function useLocalized<T>(value: Localized<T>): T {
  const lang = useLang()
  return value[lang]
}
