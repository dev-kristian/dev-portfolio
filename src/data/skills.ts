export type SkillGroup = {
  /** i18n key under `skills.*` */
  titleKey: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    titleKey: 'groupLanguages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    titleKey: 'groupFrontend',
    items: [
      'React',
      'Next.js',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Radix UI',
      'Framer Motion',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    titleKey: 'groupBackend',
    items: [
      'Node.js',
      'Fastify',
      'REST APIs',
      'Next.js Route Handlers',
      'Supabase',
      'Firebase',
      'Stripe',
      'Webhooks',
      'Electron main process',
    ],
  },
  {
    titleKey: 'groupData',
    items: [
      'PostgreSQL',
      'Drizzle ORM',
      'Cloud Firestore',
      'Redis',
      'AWS S3',
      'Backblaze B2',
      'Embedded PostgreSQL',
    ],
  },
  {
    titleKey: 'groupDesktop',
    items: [
      'Electron',
      'Electron IPC',
      'electron-builder',
      'electron-updater',
      'NSIS',
      'PyInstaller',
      'Excel automation',
      'PDF processing',
    ],
  },
  {
    titleKey: 'groupAi',
    items: [
      'OpenAI API',
      'Gemini API',
      'Replicate API',
      'Modal',
      'LLM document extraction',
    ],
  },
  {
    titleKey: 'groupPrivacy',
    items: [
      'Local-first architecture',
      'Electron safeStorage',
      'AES-256 encryption',
      'RS256 JWT verification',
      'Secure credential storage',
    ],
  },
  {
    titleKey: 'groupViz',
    items: [
      'Chart.js',
      'Data visualization',
      'ETL pipelines',
      'CSV/JSON data processing',
      'NLP metrics',
    ],
  },
  {
    titleKey: 'groupOps',
    items: [
      'Sentry',
      'Vercel',
      'Vercel Analytics',
      'Transactional email',
      'Release automation',
    ],
  },
  {
    titleKey: 'groupTooling',
    items: [
      'Git',
      'GitHub',
      'ESLint',
      'TypeScript strict mode',
      'Vitest',
      'Node test runner',
      'Python unittest',
      'CI/CD',
    ],
  },
]
