import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from './icons'
import { site } from '@/data/site'
import { useLocalized } from '@/i18n/useLocalized'

export function Hero() {
  const { t } = useTranslation()
  const tagline = useLocalized(site.tagline)

  return (
    <section className="container-page pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)]">
        <div>
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            {t('hero.greeting', { name: site.name })}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-fg-muted)] md:text-xl">
            {tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-[var(--color-accent-fg)] transition hover:opacity-90"
            >
              {t('hero.ctaProjects')}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2.5 text-sm font-medium text-[var(--color-fg)] transition hover:border-[var(--color-accent)]"
            >
              <Mail className="h-4 w-4" />
              {t('hero.ctaEmail')}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium text-[var(--color-fg-muted)] transition hover:text-[var(--color-fg)] hover:border-[var(--color-accent)]"
            >
              <GithubIcon className="h-4 w-4" />
              {t('hero.ctaGithub')}
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[20rem] justify-self-center sm:max-w-[23rem] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-3 rounded-[1.75rem] border border-[var(--color-border)] opacity-70" />
          <div className="absolute inset-x-8 -bottom-5 h-16 rounded-full bg-[var(--color-accent)]/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[0_24px_80px_rgba(0,0,0,0.16)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
            <img
              src="/profile.png"
              alt={`Portrait of ${site.name}`}
              width="2048"
              height="2048"
              className="aspect-[4/5] w-full object-cover object-[50%_42%]"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
