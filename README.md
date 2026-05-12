# Personal Portfolio — Kristian

**Live: https://dev-kristian.vercel.app**

My personal portfolio website. A small Vite + React + TypeScript app that showcases my projects, websites and stack. Bilingual (English + German).

The site itself is the project. Source is here so anyone curious about how it's built can read along.

## Stack

- **Vite** + **React 19** + **TypeScript 6**
- **Tailwind CSS 4** (via the `@tailwindcss/vite` plugin)
- **react-router-dom** for the project detail pages
- **react-i18next** + `i18next-browser-languagedetector` for English / German
- **Framer Motion** for the small bits of motion
- **lucide-react** for icons (with a couple of inline SVGs for brand marks lucide no longer ships)

No backend, no CMS — content lives in plain TypeScript files and is rendered client-side.

## Project structure

```
src/
  components/      Layout & UI components (Navbar, Hero, ProjectCard, ...)
  pages/           HomePage and the per-project case-study page
  data/            Site config, projects, websites and skills (the only place
                   you need to edit to update content)
  i18n/            i18next setup and EN / DE translation files
  hooks/           useTheme (dark/light + persistence)
  lib/             Small helpers (cn for classnames)
```

### Adding or editing content

- **Personal info, bio, links** — `src/data/site.ts`
- **Projects** (full case studies) — `src/data/projects.ts`
- **Websites** (small marketing-style builds) — `src/data/websites.ts`
- **Skills** — `src/data/skills.ts`
- **UI strings** (nav, buttons, section titles, ...) — `src/i18n/locales/en.ts` and `de.ts`

Project / website prose uses a `Localized<T> = { en: T; de: T }` pattern so each piece of content carries its own translation. The `useLocalized()` hook returns the right one for the current language.

## Running it locally

Requires Node 20+.

```bash
npm install
npm run dev      # Start the Vite dev server
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Theming

Light and dark themes use CSS custom properties defined in `src/index.css` under `@theme` and `.dark`. The choice is persisted in `localStorage` and restored by a tiny inline script in `index.html` so there's no flash on first paint.

## Internationalization

Language is detected from `localStorage` first, then `navigator.language`. The toggle in the navbar persists the choice and updates `<html lang>`. Supported locales: `en`, `de`.

## License

The site's design and code are MIT-licensed. The project / website **content** — the descriptions of Nenis, Nothing²C, the Steak & Eggs dashboard, etc. — is mine and not part of that license.

If you'd like to use the layout or theme system as a starting point for your own portfolio, please do — just swap the content in `src/data/` and the locale files for your own.
