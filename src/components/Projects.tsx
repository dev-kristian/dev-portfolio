import { useTranslation } from 'react-i18next'
import { Section } from './Section'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  const { t } = useTranslation()

  return (
    <Section id="projects" title={t('projects.title')}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  )
}
