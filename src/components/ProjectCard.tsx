import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from './icons'
import { ProjectCover } from './ProjectCover'
import type { Project } from '@/data/projects'
import { useLocalized } from '@/i18n/useLocalized'

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  const summary = useLocalized(project.summary)
  const stackChips = project.stack.flatMap((s) => s.tools).slice(0, 8)

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] transition hover:border-[var(--color-accent)]">
      <Link
        to={`/projects/${project.slug}`}
        className="block aspect-[16/9] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]"
      >
        <ProjectCover project={project} />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs text-[var(--color-fg-muted)]">{project.year}</p>

        <h3 className="text-xl font-semibold tracking-tight">
          <Link
            to={`/projects/${project.slug}`}
            className="hover:text-[var(--color-accent)]"
            dangerouslySetInnerHTML={
              project.titleHtml ? { __html: project.titleHtml } : undefined
            }
          >
            {project.titleHtml ? undefined : project.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{summary}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {stackChips.map((tool) => (
            <li
              key={tool}
              className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-fg-muted)]"
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--color-border)]">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-fg)] hover:text-[var(--color-accent)]"
          >
            {t('projects.caseStudy')}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {t('projects.live')}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              {t('projects.sourceShort')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
