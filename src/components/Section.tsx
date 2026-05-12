import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  id?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, description, children, className }: Props) {
  return (
    <section id={id} className={cn('py-20 md:py-24 scroll-mt-20', className)}>
      <div className="container-page">
        {(title || description) && (
          <header className="mb-10 max-w-2xl">
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="mt-3 text-base text-[var(--color-fg-muted)]">{description}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
