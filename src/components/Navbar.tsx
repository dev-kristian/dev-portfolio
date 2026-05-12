import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { site } from '@/data/site'

export function Navbar() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  const sections: { id: string; label: string }[] = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'websites', label: t('nav.websites') },
    { id: 'contact', label: t('nav.contact') },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="font-semibold tracking-tight text-[var(--color-fg)] hover:text-[var(--color-accent)]"
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={onHome ? `#${s.id}` : `/#${s.id}`}
              className="rounded-md px-3 py-1.5 text-sm text-[var(--color-fg-muted)] transition hover:bg-[var(--color-bg-elev)] hover:text-[var(--color-fg)]"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
