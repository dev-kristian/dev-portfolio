import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from '@/components/icons'
import { LiveSitePreview } from '@/components/LiveSitePreview'
import { getProject, stackAreas } from '@/data/projects'
import { useLocalized } from '@/i18n/useLocalized'

export function ProjectPage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  if (!project) {
    return (
      <div className="container-page py-32 text-center">
        <h1 className="text-3xl font-semibold">{t('projects.notFound')}</h1>
        <p className="mt-3 text-[var(--color-fg-muted)]">{t('projects.notFoundCopy')}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('projects.backHome')}
        </Link>
      </div>
    )
  }

  return <ProjectPageInner project={project} />
}

function ProjectPageInner({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  const { t } = useTranslation()
  const tagline = useLocalized(project.tagline)
  const description = useLocalized(project.description)
  const features = useLocalized(project.features)
  const decisions = useLocalized(project.decisions)
  const status = useLocalized(project.status)
  const role = useLocalized(project.role)

  return (
    <article className="container-page py-12 md:py-20">
      <Link
        to="/#projects"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-[var(--color-fg-muted)] transition hover:text-[var(--color-fg)]"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('projects.backToProjects')}
      </Link>

      <header className="mb-12 max-w-3xl">
        <p className="text-sm text-[var(--color-fg-muted)]">
          {project.year} · {role}
        </p>
        <h1
          className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl"
          {...(project.titleHtml
            ? { dangerouslySetInnerHTML: { __html: project.titleHtml } }
            : { children: project.title })}
        />
        <p className="mt-4 text-xl text-[var(--color-fg-muted)]">{tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-accent-fg)] hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              {t('projects.liveDemo')}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2 text-sm font-medium text-[var(--color-fg)] hover:border-[var(--color-accent)]"
            >
              <GithubIcon className="h-4 w-4" />
              {t('projects.source')}
            </a>
          )}
        </div>
      </header>

      {(project.liveUrl || project.image) && (
        <div className="mb-16 aspect-video overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)]">
          {project.liveUrl ? (
            <LiveSitePreview url={project.liveUrl} title={project.title} />
          ) : (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      )}

      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-12">
          <Block title={t('projects.sectionOverview')}>
            {description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Block>

          <Block title={t('projects.sectionFeatures')}>
            <ul className="list-disc space-y-2 pl-5">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Block>

          <Block title={t('projects.sectionDecisions')}>
            <ul className="list-disc space-y-2 pl-5">
              {decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Block>

          <Block title={t('projects.sectionStatus')}>
            <p>{status}</p>
          </Block>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6">
            <h3 className="mb-4 text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
              {t('projects.sidebarStack')}
            </h3>
            <dl className="space-y-4 text-sm">
              {project.stack.map((group) => (
                <StackGroup key={group.areaKey} areaKey={group.areaKey} tools={group.tools} />
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </article>
  )
}

function StackGroup({ areaKey, tools }: { areaKey: keyof typeof stackAreas; tools: string[] }) {
  const area = useLocalized(stackAreas[areaKey])
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">{area}</dt>
      <dd className="mt-1.5 flex flex-wrap gap-1.5">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-fg)]"
          >
            {tool}
          </span>
        ))}
      </dd>
    </div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
        {children}
      </div>
    </section>
  )
}
