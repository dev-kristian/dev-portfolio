import { useTranslation } from 'react-i18next'
import { useLang } from '@/i18n/useLocalized'
import { cn } from '@/lib/cn'

const OPTIONS = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
] as const

export function LanguageToggle() {
  const { i18n, t } = useTranslation()
  const lang = useLang()

  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className="inline-flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-0.5"
    >
      {OPTIONS.map((opt) => {
        const active = lang === opt.code
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => i18n.changeLanguage(opt.code)}
            aria-pressed={active}
            className={cn(
              'rounded px-2 py-1 font-mono text-[11px] font-medium transition',
              active
                ? 'bg-[var(--color-bg)] text-[var(--color-fg)] shadow-sm'
                : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]',
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
