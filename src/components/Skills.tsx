import { useTranslation } from 'react-i18next'
import { Section } from './Section'
import { skills } from '@/data/skills'

export function Skills() {
  const { t } = useTranslation()

  return (
    <Section id="skills" title={t('skills.title')}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.titleKey}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5"
          >
            <h3 className="mb-3 text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
              {t(`skills.${group.titleKey}`)}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-xs text-[var(--color-fg)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
