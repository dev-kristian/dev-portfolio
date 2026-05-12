import { useTranslation } from 'react-i18next'
import { Section } from './Section'
import { WebsiteCard } from './WebsiteCard'
import { websites } from '@/data/websites'

export function Websites() {
  const { t } = useTranslation()

  return (
    <Section
      id="websites"
      title={t('websites.title')}
      description={t('websites.description')}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {websites.map((w) => (
          <WebsiteCard key={w.slug} website={w} />
        ))}
      </div>
    </Section>
  )
}
