import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from './Section'
import { GithubIcon } from './icons'
import { site } from '@/data/site'

export function Contact() {
  const { t } = useTranslation()

  return (
    <Section
      id="contact"
      title={t('contact.title')}
      description={t('contact.description')}
    >
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[var(--color-accent-fg)] transition hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          {site.email}
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-5 py-3 text-sm font-medium text-[var(--color-fg)] transition hover:border-[var(--color-accent)]"
        >
          <GithubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </Section>
  )
}
