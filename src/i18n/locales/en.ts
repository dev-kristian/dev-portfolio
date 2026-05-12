export const en = {
  meta: {
    title: 'Kristian — Full-stack Web Developer',
    description: 'Kristian — Full-stack web developer. Selected projects, websites, and contact.',
  },
  nav: {
    about: 'About',
    skills: 'Stack',
    projects: 'Projects',
    websites: 'Websites',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm {{name}}.",
    ctaProjects: 'Projects',
    ctaEmail: 'Email me',
    ctaGithub: 'GitHub',
  },
  about: {
    title: 'About',
    metaRole: 'What I do',
    metaEmail: 'Email',
    metaGithub: 'GitHub',
  },
  skills: {
    title: 'Stack',
    groupLanguages: 'Languages',
    groupFrontend: 'Frontend',
    groupDesktop: 'Desktop apps & automation',
    groupPrivacy: 'Privacy & security',
    groupBackend: 'Backend & APIs',
    groupData: 'Data & infrastructure',
    groupAi: 'AI, payments & async',
    groupViz: 'Data viz & pipelines',
    groupOps: 'Production & ops',
    groupTooling: 'Tooling',
  },
  projects: {
    title: 'Projects',
    backToProjects: 'Back to projects',
    liveDemo: 'Live demo',
    source: 'Source',
    sectionOverview: 'Overview',
    sectionFeatures: 'What you can do with it',
    sectionDecisions: 'Engineering decisions',
    sectionStatus: 'Where it stands today',
    sidebarStack: 'Tech stack',
    notFound: 'Project not found',
    notFoundCopy: "The project you're looking for doesn't exist.",
    backHome: 'Back to home',
    caseStudy: 'Case study',
    live: 'Live',
    sourceShort: 'Source',
  },
  websites: {
    title: 'Websites',
    description:
      'Smaller marketing and landing-page builds. Less moving parts than the apps above, but the same care for layout, typography and performance.',
    visitSite: 'Visit site',
  },
  contact: {
    title: 'Get in touch',
    description: 'Email is the fastest way to reach me.',
  },
  footer: {
    builtWith: 'Built with React, TypeScript, and Tailwind.',
    rights: '© {{year}} {{name}}.',
  },
  theme: {
    switchToDark: 'Switch to dark theme',
    switchToLight: 'Switch to light theme',
  },
  language: {
    label: 'Language',
    en: 'English',
    de: 'Deutsch',
  },
}

export type TranslationDict = typeof en
