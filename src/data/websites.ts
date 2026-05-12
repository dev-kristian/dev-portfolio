import type { Localized } from '@/i18n/useLocalized'

export type Website = {
  slug: string
  title: string
  type: Localized<string>
  description: Localized<string>
  highlights: Localized<string[]>
  stack: string[]
  liveUrl: string
  image?: string
  year: string
  languages?: string[]
}

export const websites: Website[] = [
  {
    slug: 'tgfm',
    title: 'The Genius from Mars',
    type: {
      en: 'Author landing page',
      de: 'Autoren-Landingpage',
    },
    description: {
      en: 'Promotional site for The Genius from Mars, a science-fiction novel by Enea Zarka. A single page that walks a visitor through the synopsis, reader reviews and author bio, then sends them to Amazon to buy the book.',
      de: 'Promo-Seite für „The Genius from Mars", einen Science-Fiction-Roman von Enea Zarka. Eine Single-Page-Site, die Besucher durch Inhaltsangabe, Leserstimmen und Autoren-Bio führt und sie dann zum Kauf zu Amazon weiterleitet.',
    },
    highlights: {
      en: [
        'Conversion-focused layout: every section ends with a clear path to the buy page.',
        'Numbered sections and generous whitespace keep the reader oriented on a long page.',
        'Image-optimised hero and book cover via Next.js Image.',
      ],
      de: [
        'Auf Conversion ausgerichtetes Layout: Jede Sektion mündet in einen klaren Weg zur Kaufseite.',
        'Nummerierte Abschnitte und großzügige Weißräume halten den Leser auf der langen Seite orientiert.',
        'Optimierte Bilder für Hero-Bereich und Buchcover über Next.js Image.',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://tgfm.vercel.app',
    year: '2025',
  },
  {
    slug: 'qmswd',
    title: 'Quercus MSWD',
    type: {
      en: 'Studio marketing site',
      de: 'Studio-Marketing-Website',
    },
    description: {
      en: 'Marketing site for Quercus MSWD, a Modern Sustainable Wood Design studio. Multilingual (German and English), with a separate work portfolio, about page and a project-enquiry form.',
      de: 'Marketing-Website für Quercus MSWD, ein Studio für „Modern Sustainable Wood Design". Mehrsprachig (Deutsch und Englisch), mit separatem Portfolio, Über-uns-Seite und einem Projekt-Anfrageformular.',
    },
    highlights: {
      en: [
        'Multilingual setup with full German and English routes.',
        'Multi-page structure: Home, Work, About and Contact.',
        'Project-enquiry form so prospective clients can start a conversation directly.',
      ],
      de: [
        'Mehrsprachiges Setup mit vollständigen Routen für Deutsch und Englisch.',
        'Mehrseitige Struktur: Start, Arbeiten, Über uns und Kontakt.',
        'Projekt-Anfrageformular, damit potenzielle Kunden direkt ins Gespräch kommen.',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'i18n routing'],
    liveUrl: 'https://qmswd.vercel.app/de',
    year: '2025',
    languages: ['Deutsch', 'English'],
  },
]
