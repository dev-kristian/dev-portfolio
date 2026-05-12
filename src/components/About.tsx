import { useTranslation } from 'react-i18next'
import { Section } from './Section'
import { site } from '@/data/site'
import { useLocalized } from '@/i18n/useLocalized'

export function About() {
  const { t } = useTranslation()
  const bio = useLocalized(site.bio)
  const role = useLocalized(site.role)

  return (
    <Section id="about" title={t('about.title')}>
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
          {bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6 text-sm">
          <dl className="space-y-4">
            <div>
              <dt className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                {t('about.metaRole')}
              </dt>
              <dd className="mt-1 text-[var(--color-fg)]">{role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                {t('about.metaEmail')}
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-[var(--color-fg)] hover:text-[var(--color-accent)]"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                {t('about.metaGithub')}
              </dt>
              <dd className="mt-1">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-fg)] hover:text-[var(--color-accent)]"
                >
                  {site.githubHandle}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  )
}
