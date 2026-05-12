import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from './icons'
import { site } from '@/data/site'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-32 border-t border-[var(--color-border)] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-[var(--color-fg-muted)] md:flex-row">
        <p>
          {t('footer.rights', { year: new Date().getFullYear(), name: site.name })}{' '}
          {t('footer.builtWith')}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-fg)]"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-fg)]"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
