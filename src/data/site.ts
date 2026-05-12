import type { Localized } from '@/i18n/useLocalized'

export const site = {
  name: 'Kristian',
  email: 'kristian.d.aleksi@gmail.com',
  website: 'https://dev-kristian.vercel.app',
  github: 'https://github.com/dev-kristian',
  githubHandle: '@dev-kristian',
  linkedin: '',
  resumeUrl: '',
  role: {
    en: 'Full-stack web developer',
    de: 'Full-Stack-Webentwickler',
  } satisfies Localized<string>,
  tagline: {
    en: 'Full-stack web developer. I write TypeScript on both ends of the stack.',
    de: 'Full-Stack-Webentwickler. Ich schreibe TypeScript auf beiden Seiten des Stacks.',
  } satisfies Localized<string>,
  bio: {
    en: [
      "I'm Kristian, a full-stack web developer.",
      "I write TypeScript on both ends — React and Next.js on the front, Node, Supabase, Firebase or PostgreSQL on the back. My recent work ranges from a production AI SaaS with payments and image pipelines to a privacy-first desktop accounting app with bank-statement AI, local data, background sync and Financa5 exports.",
      "I'm looking for a full-time role at the moment. If you have a position to fill, or a question about anything on this site, drop me an email.",
    ],
    de: [
      'Ich bin Kristian, Full-Stack-Webentwickler.',
      'Ich schreibe TypeScript auf beiden Seiten — React und Next.js im Frontend, Node, Supabase, Firebase oder PostgreSQL im Backend. Meine jüngsten Projekte reichen von einer produktiven KI-SaaS mit Zahlungen und Bild-Pipelines bis zu einer privacy-first Desktop-App für Buchhaltung mit Bankauszugs-KI, lokalen Daten, Hintergrund-Sync und Financa5-Exporten.',
      'Aktuell suche ich eine Festanstellung. Wenn Sie eine offene Stelle haben oder eine Frage zu etwas auf dieser Seite, schreiben Sie mir gerne eine E-Mail.',
    ],
  } satisfies Localized<string[]>,
}

export type SiteConfig = typeof site
