import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LiveSitePreview } from './LiveSitePreview'
import type { Website } from '@/data/websites'
import { useLocalized } from '@/i18n/useLocalized'

export function WebsiteCard({ website }: { website: Website }) {
  const { t } = useTranslation()
  const type = useLocalized(website.type)
  const description = useLocalized(website.description)

  return (
    <a
      href={website.liveUrl}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] transition hover:border-[var(--color-accent)]"
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <LiveSitePreview url={website.liveUrl} title={website.title} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">{type}</p>
          <p className="text-xs text-[var(--color-fg-muted)]">{website.year}</p>
        </div>

        <h3 className="mt-2 text-xl font-semibold tracking-tight group-hover:text-[var(--color-accent)]">
          {website.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {website.stack.map((tool) => (
            <span
              key={tool}
              className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-fg-muted)]"
            >
              {tool}
            </span>
          ))}
          {website.languages?.map((lang) => (
            <span
              key={lang}
              className="rounded border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-2 py-0.5 font-mono text-[11px] text-[var(--color-accent)]"
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-1.5 border-t border-[var(--color-border)] pt-4 text-sm font-medium text-[var(--color-fg)]">
          {t('websites.visitSite')}
          <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
        </div>
      </div>
    </a>
  )
}
