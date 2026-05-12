import type { Project } from '@/data/projects'
import { useLocalized } from '@/i18n/useLocalized'
import { LiveSitePreview } from './LiveSitePreview'

export function ProjectCover({ project }: { project: Project }) {
  const tagline = useLocalized(project.tagline)

  if (project.liveUrl) {
    return <LiveSitePreview url={project.liveUrl} title={project.title} />
  }

  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
      />
    )
  }

  const initials = project.title
    .replace(/[²]/g, '')
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 3)
    .join('')
    .toUpperCase()

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[var(--color-bg-elev)]">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, var(--color-accent), transparent 55%), radial-gradient(circle at 80% 80%, var(--color-fg), transparent 60%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />
      <div className="relative text-center">
        <div className="font-mono text-6xl font-semibold tracking-tight text-[var(--color-fg)] md:text-7xl">
          {initials}
        </div>
        <div className="mt-3 text-sm text-[var(--color-fg-muted)]">{tagline}</div>
      </div>
    </div>
  )
}
