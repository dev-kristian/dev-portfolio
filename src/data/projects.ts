import type { Localized } from '@/i18n/useLocalized'

export type Project = {
  slug: string
  title: string
  titleHtml?: string
  tagline: Localized<string>
  summary: Localized<string>
  description: Localized<string[]>
  features: Localized<string[]>
  decisions: Localized<string[]>
  stack: { areaKey: keyof StackAreas; tools: string[] }[]
  status: Localized<string>
  liveUrl?: string
  repoUrl?: string
  image?: string
  year: string
  role: Localized<string>
}

export const stackAreas = {
  framework: { en: 'Framework', de: 'Framework' },
  desktop: { en: 'Desktop app', de: 'Desktop-App' },
  styling: { en: 'Styling', de: 'Gestaltung' },
  backend: { en: 'Backend', de: 'Backend' },
  dataAuth: { en: 'Data & auth', de: 'Daten & Auth' },
  database: { en: 'Database', de: 'Datenbank' },
  privacySecurity: { en: 'Privacy & security', de: 'Datenschutz & Sicherheit' },
  externalApis: { en: 'External APIs', de: 'Externe APIs' },
  deployment: { en: 'Deployment', de: 'Deployment' },
  charts: { en: 'Charts', de: 'Diagramme' },
  dataPipeline: { en: 'Data pipeline', de: 'Datenpipeline' },
  tooling: { en: 'Tooling', de: 'Werkzeuge' },
  payments: { en: 'Payments', de: 'Zahlungen' },
  storage: { en: 'Storage', de: 'Speicher' },
  asyncJobs: { en: 'Async jobs & queues', de: 'Async-Jobs & Queues' },
  ai: { en: 'AI', de: 'KI' },
  imaging: { en: 'Image processing', de: 'Bildverarbeitung' },
  observability: { en: 'Observability', de: 'Observability' },
  email: { en: 'Transactional email', de: 'Transaktions-E-Mail' },
  formsState: { en: 'Forms & state', de: 'Formulare & State' },
} satisfies Record<string, Localized<string>>

export type StackAreas = typeof stackAreas

export const projects: Project[] = [
  {
    slug: 'autobilance',
    title: 'AutoBilance',
    tagline: {
      en: 'Privacy-first desktop accounting automation for invoices, bank statements and Financa5',
      de: 'Privacy-first Desktop-Automatisierung für Rechnungen, Bankauszüge und Financa5',
    },
    summary: {
      en: 'A local-first accounting automation app for Albanian accounting offices. AutoBilance keeps sensitive company data in an embedded/office PostgreSQL setup, syncs e-fiscalization invoices, processes bank-statement PDFs through bank-specific Modal AI/LLM cleaners, drives review queues, exports Excel workbooks and posts complete documents into Financa5.',
      de: 'Eine local-first Automatisierungs-App für albanische Buchhaltungsbüros. AutoBilance hält sensible Firmendaten in einer eingebetteten bzw. bürointernen PostgreSQL-Umgebung, synchronisiert E-Fiskalisierungsrechnungen, verarbeitet Bankauszugs-PDFs über bank-spezifische Modal-KI/LLM-Cleaner, steuert Review-Queues, exportiert Excel-Arbeitsmappen und überträgt vollständige Dokumente nach Financa5.',
    },
    description: {
      en: [
        'AutoBilance is built for accounting offices that handle private financial data every day: invoices from Albanian tax portals, bank statements, VAT views, partner/article mappings, Excel workbooks and Financa5 exports. The core app is local-first, with a desktop UI and an embedded PostgreSQL server/client mode so a small office can work together without turning the accounting database into a hosted SaaS database.',
        'The AI part is focused where deterministic parsing is weakest: bank statements. Users upload a statement PDF for a known bank, AutoBilance sends it to the matching Modal-hosted AI cleaning service, receives structured transactions back, verifies the statement balance, enriches foreign-currency rows with Bank of Albania rates, and leaves the accountant in control of final GL/entity mappings before Excel export.',
      ],
      de: [
        'AutoBilance ist für Buchhaltungsbüros gebaut, die täglich mit privaten Finanzdaten arbeiten: Rechnungen aus albanischen Steuerportalen, Bankauszüge, TVSH/VAT-Ansichten, Partner- und Artikelzuordnungen, Excel-Arbeitsmappen und Financa5-Exporte. Der Kern der App ist local-first, mit Desktop-Oberfläche und eingebettetem PostgreSQL-Server/Client-Modus, damit ein kleines Büro gemeinsam arbeiten kann, ohne die Buchhaltungsdatenbank zu einer gehosteten SaaS-Datenbank zu machen.',
        'Der KI-Teil sitzt dort, wo deterministisches Parsing am schwächsten ist: bei Bankauszügen. Nutzer laden ein PDF für eine bekannte Bank hoch, AutoBilance sendet es an den passenden Modal-gehosteten KI-Cleaning-Service, erhält strukturierte Transaktionen zurück, prüft den Saldo, ergänzt Fremdwährungszeilen mit Kursen der Bank of Albania und lässt die finale GL-/Partnerzuordnung vor dem Excel-Export beim Buchhalter.',
      ],
    },
    features: {
      en: [
        'Privacy-first desktop architecture: company data, workbooks, portal sessions and accounting state live in local/office-controlled storage instead of a central app database.',
        'Embedded PostgreSQL server/client mode for small-office multi-user work, including seat heartbeats, workbook locks and crash recovery.',
        'Bank-statement PDF ingestion for Albanian banks, routed to bank-specific Modal AI/LLM cleaning endpoints.',
        'Structured bank transaction review: balance verification, duplicate-resistant references, foreign-currency exchange-rate enrichment, GL account mapping, supplier/client linking and Excel export.',
        'Automated SelfCare/e-Filing sync for purchase and sales invoices, with backfill, scheduled scans, manual refresh and PDF archiving.',
        'Review queues for suppliers, clients, articles, tax categories and accounting mappings before data reaches the books.',
        'Excel workbook generation and repair for ledgers, VAT books, bank sheets, partner cards and fiscal-year views.',
        'Financa5 export that creates full purchase/sales documents, counterparty balances, inventory movements and balanced journal entries.',
        'Installer, auto-updater, changelog, smoke-test and Backblaze B2 release-upload pipeline.',
      ],
      de: [
        'Privacy-first Desktop-Architektur: Firmendaten, Arbeitsmappen, Portal-Sessions und Buchhaltungsstatus liegen in lokal bzw. bürointern kontrolliertem Speicher statt in einer zentralen App-Datenbank.',
        'Eingebetteter PostgreSQL-Server/Client-Modus für Mehrbenutzer-Arbeit in kleinen Büros, inklusive Seat-Heartbeats, Workbook-Locks und Crash-Recovery.',
        'Bankauszugs-PDF-Import für albanische Banken, geroutet an bank-spezifische Modal-KI/LLM-Cleaning-Endpunkte.',
        'Strukturierter Review von Banktransaktionen: Saldenprüfung, duplikatresistente Referenzen, Wechselkurs-Anreicherung für Fremdwährungen, GL-Kontenzuordnung, Lieferanten-/Kundenverknüpfung und Excel-Export.',
        'Automatische SelfCare/e-Filing-Synchronisierung für Einkaufs- und Verkaufsrechnungen, mit Backfill, geplanten Scans, manuellem Refresh und PDF-Archiv.',
        'Review-Queues für Lieferanten, Kunden, Artikel, Steuerkategorien und Buchhaltungszuordnungen, bevor Daten in die Bücher laufen.',
        'Erzeugung und Reparatur von Excel-Arbeitsmappen für Journale, TVSH/VAT-Bücher, Bank-Sheets, Partnerkarten und Geschäftsjahresansichten.',
        'Financa5-Export, der vollständige Einkaufs- und Verkaufsdokumente, Partner-Salden, Lagerbewegungen und ausgeglichene Buchungssätze erzeugt.',
        'Installer, Auto-Updater, Changelog, Smoke-Test und Backblaze-B2-Release-Upload-Pipeline.',
      ],
    },
    decisions: {
      en: [
        'Designed the product as local-first instead of SaaS-first: the accounting database can run inside the office network, while cloud services are limited to explicit edges such as licensing, updates and AI extraction for bank PDFs.',
        'Used Electron because the app needs controlled access to PDFs, Excel workbooks, local folders, installers, auto-updates and office-network PostgreSQL connections.',
        'Kept bank-statement parsing AI-assisted rather than regex-only: each supported bank has a Modal endpoint that normalizes its own PDF layout into structured transactions, then the app validates balances before accepting the result.',
        'Protected credentials and connection settings with Electron safeStorage when available, with encrypted fallbacks and no legacy plaintext fallback for sensitive local secrets.',
        'Modeled sync and extraction as PostgreSQL-backed jobs with dedup keys, FOR UPDATE SKIP LOCKED claiming, pg_notify wakeups and retry/backoff so workers can run concurrently without duplicate work.',
        'Split the runtime by strength: Node owns the desktop shell, IPC, database, queues and portal integrations; Python is packaged with PyInstaller for PDF, Excel and Financa5 workbook operations.',
      ],
      de: [
        'Das Produkt ist local-first statt SaaS-first konzipiert: Die Buchhaltungsdatenbank kann im Büronetzwerk laufen; Cloud-Dienste sitzen nur an expliziten Rändern wie Lizenzierung, Updates und KI-Extraktion für Bank-PDFs.',
        'Electron passt, weil die App kontrollierten Zugriff auf PDFs, Excel-Arbeitsmappen, lokale Ordner, Installer, Auto-Updates und PostgreSQL-Verbindungen im Büronetz braucht.',
        'Bankauszüge werden bewusst KI-gestützt statt nur per Regex geparst: Jede unterstützte Bank hat einen Modal-Endpunkt, der das jeweilige PDF-Layout in strukturierte Transaktionen normalisiert; danach validiert die App den Saldo, bevor das Ergebnis übernommen wird.',
        'Zugangsdaten und Verbindungseinstellungen werden mit Electron safeStorage geschützt, wenn verfügbar, mit verschlüsselten Fallbacks und ohne alten Plaintext-Fallback für sensible lokale Secrets.',
        'Synchronisierung und Extraktion laufen als PostgreSQL-gestützte Jobs mit Deduplizierungs-Keys, FOR UPDATE SKIP LOCKED, pg_notify-Wakeups und Retry/Backoff, damit Worker parallel laufen können, ohne Arbeit doppelt auszuführen.',
        'Die Laufzeit ist nach Stärken getrennt: Node übernimmt Desktop-Shell, IPC, Datenbank, Queues und Portal-Integrationen; Python wird mit PyInstaller für PDF-, Excel- und Financa5-Workbook-Operationen gepackt.',
      ],
    },
    stack: [
      { areaKey: 'desktop', tools: ['Electron 40', 'Electron IPC/preload', 'electron-builder', 'electron-updater', 'NSIS'] },
      { areaKey: 'framework', tools: ['React 19', 'Vite 7', 'TypeScript', 'React Router 7'] },
      { areaKey: 'styling', tools: ['Tailwind CSS 4', 'Radix UI', 'Phosphor Icons', 'Sonner'] },
      { areaKey: 'formsState', tools: ['React Hook Form', 'Zod', 'Zustand', 'TanStack Query', 'TanStack Virtual'] },
      { areaKey: 'backend', tools: ['Node.js', 'Electron main process', 'Fastify', 'Electron IPC', 'REST APIs'] },
      { areaKey: 'database', tools: ['PostgreSQL', 'Embedded PostgreSQL runtime', 'Drizzle ORM', 'pg_notify'] },
      { areaKey: 'privacySecurity', tools: ['Local-first storage', 'Electron safeStorage', 'AES-256 encrypted fallbacks', 'RS256 local license verification', 'Seat heartbeats'] },
      { areaKey: 'ai', tools: ['Modal', 'Bank-specific LLM cleaning services', 'AI document extraction', 'Balance validation'] },
      { areaKey: 'dataPipeline', tools: ['Python', 'pdfplumber', 'openpyxl', 'xlwings', 'pyodbc', 'PyInstaller'] },
      { areaKey: 'asyncJobs', tools: ['PostgreSQL task queue', 'FOR UPDATE SKIP LOCKED', 'Worker pool', 'Retry/backoff'] },
      { areaKey: 'externalApis', tools: ['e-Albania SelfCare', 'e-Filing', 'Bank of Albania exchange rates', 'QKB', 'Financa5'] },
      { areaKey: 'deployment', tools: ['Backblaze B2', 'S3-compatible uploads', 'Release notes pipeline', 'Smoke tests'] },
      { areaKey: 'tooling', tools: ['Vitest', 'Node test runner', 'Python unittest', 'ESLint'] },
    ],
    status: {
      en: 'Private production desktop app, current release v0.5.2 from May 2026. Active development focuses on privacy-preserving accounting automation, bank-statement AI extraction, Financa5 coverage and sync reliability.',
      de: 'Private produktive Desktop-App, aktuelles Release v0.5.2 aus Mai 2026. Aktive Weiterentwicklung mit Fokus auf datenschutzfreundliche Buchhaltungsautomatisierung, KI-Extraktion von Bankauszügen, Financa5-Abdeckung und stabile Synchronisierung.',
    },
    year: '2026',
    role: {
      en: 'Solo full-stack desktop automation developer',
      de: 'Alleiniger Full-Stack-Desktop-Automatisierungsentwickler',
    },
  },
  {
    slug: 'nenis',
    title: 'Nenis',
    tagline: {
      en: 'AI image generation, editing and upscaling — pay-as-you-go SaaS',
      de: 'KI-Bilderzeugung, Bearbeitung und Upscaling — SaaS auf Guthabenbasis',
    },
    summary: {
      en: 'A full SaaS for AI image work. Generate from prompts, edit existing photos, run virtual try-on for fashion, and upscale for print. Stripe-powered credits, no subscriptions, with a marketing site, paid app and a blog at blog.nenis.ai.',
      de: 'Eine vollständige SaaS-Lösung für KI-Bildarbeit. Erzeugung aus Prompts, Bearbeitung vorhandener Fotos, virtuelle Anprobe für Fashion und Upscaling für den Druck. Bezahlung per Stripe-Guthaben, keine Abos, mit Marketing-Site, Paid-App und einem Blog unter blog.nenis.ai.',
    },
    description: {
      en: [
        "Nenis is an AI image studio. From one place — and one credit balance — you can generate images from text prompts, edit existing photos, try clothes on virtual models, and upscale results for print. Pay-as-you-go credits, no subscription, credits don't expire.",
        'I built it as a complete production SaaS: marketing site, paid web app, transactional email, payment + billing, and a separate blog at blog.nenis.ai. Currently on version 2.1.0 and live at nenis.ai.',
      ],
      de: [
        'Nenis ist ein KI-Bildstudio. Aus einer Anwendung — und einem Guthaben — lassen sich Bilder per Prompt erzeugen, Fotos bearbeiten, Kleidung an virtuellen Modellen anprobieren und Ergebnisse druckreif hochskalieren. Bezahlung per Guthaben, kein Abo, das Guthaben verfällt nicht.',
        'Ich habe es als vollständige produktive SaaS aufgesetzt: Marketing-Site, kostenpflichtige Web-App, Transaktions-E-Mails, Zahlungen und Abrechnung sowie ein separater Blog unter blog.nenis.ai. Aktuell in Version 2.1.0 und live unter nenis.ai.',
      ],
    },
    features: {
      en: [
        'AI image generation from text prompts, with several models to pick from (GPT Image, Gemini, and others).',
        'Image-to-image editing and transformation.',
        'Virtual try-on for fashion: clothing previewed on realistic body shapes.',
        'Print-ready upscaling.',
        'Permanent gallery for every result, with search and filtering.',
        '10 aspect ratios, formatted automatically for different platforms.',
        'Stripe checkout with one-time credit packs (€4.99 – €49.99); credits never expire.',
        'Public blog at blog.nenis.ai for product updates and how-tos.',
      ],
      de: [
        'KI-Bilderzeugung aus Text-Prompts mit mehreren wählbaren Modellen (GPT Image, Gemini u. a.).',
        'Bild-zu-Bild-Bearbeitung und -Transformation.',
        'Virtuelle Anprobe für Fashion: Kleidung an realistischen Körperformen vorschaubar.',
        'Druckreifes Upscaling.',
        'Permanente Galerie für jedes Ergebnis, mit Suche und Filtern.',
        '10 Seitenverhältnisse, automatisch passend für unterschiedliche Plattformen.',
        'Stripe-Checkout mit einmaligen Guthabenpaketen (€4,99 – €49,99); das Guthaben verfällt nicht.',
        'Öffentlicher Blog unter blog.nenis.ai für Produkt-Updates und Anleitungen.',
      ],
    },
    decisions: {
      en: [
        'Every AI request runs as an async job — Modal handles the long-running model work and Upstash QStash schedules and dispatches the queue. The browser never blocks on a multi-second generation.',
        'Image bytes never go through the Next.js server: the client uploads straight to S3 with presigned URLs, and HEIC/large files are converted and compressed in the browser first (heic2any + browser-image-compression).',
        'Per-user rate limiting on Upstash Redis protects the (paid) AI provider quota from abuse and runaway loops.',
        'Stripe webhooks drive the credit ledger end-to-end — no manual reconciliation, and credit grants stay consistent under retries.',
        'Sentry is wired into both server and edge for production error and performance tracking.',
        'Forms are typed end-to-end with React Hook Form + Zod; client state is split between Zustand (UI) and SWR (server data).',
      ],
      de: [
        'Jede KI-Anfrage läuft als Async-Job — Modal übernimmt die langlaufende Modellarbeit, Upstash QStash plant und verteilt die Queue. Der Browser blockiert nie auf einer mehrsekündigen Generierung.',
        'Bilddaten laufen nie durch den Next.js-Server: Der Client lädt direkt per Presigned URL nach S3, HEIC- und große Dateien werden vorher im Browser konvertiert und komprimiert (heic2any + browser-image-compression).',
        'Per-User-Ratelimit auf Upstash Redis schützt das (kostenpflichtige) Kontingent des KI-Anbieters vor Missbrauch und Endlosschleifen.',
        'Stripe-Webhooks treiben das Guthaben-Ledger durchgängig — keine manuelle Abstimmung, Gutschriften bleiben auch bei Retries konsistent.',
        'Sentry läuft sowohl auf Server- als auch auf Edge-Seite für Fehler- und Performance-Tracking in Produktion.',
        'Formulare sind durchgehend mit React Hook Form + Zod typisiert; Client-State ist zwischen Zustand (UI) und SWR (Server-Daten) aufgeteilt.',
      ],
    },
    stack: [
      { areaKey: 'framework', tools: ['Next.js 15 (App Router, Turbopack)', 'React 19', 'TypeScript'] },
      { areaKey: 'styling', tools: ['Tailwind CSS 4', 'Radix UI', 'shadcn-style primitives', 'Framer Motion', 'Sonner', 'Vaul', 'Geist'] },
      { areaKey: 'formsState', tools: ['React Hook Form', 'Zod', 'Zustand', 'SWR'] },
      { areaKey: 'dataAuth', tools: ['Supabase (Auth + Postgres)', '@supabase/ssr'] },
      { areaKey: 'payments', tools: ['Stripe', '@stripe/stripe-js', 'Stripe webhooks'] },
      { areaKey: 'storage', tools: ['AWS S3', 'Presigned URLs'] },
      { areaKey: 'asyncJobs', tools: ['Modal', 'Upstash QStash', 'Upstash Redis', 'Upstash Ratelimit'] },
      { areaKey: 'ai', tools: ['Replicate', 'GPT Image', 'Gemini'] },
      { areaKey: 'imaging', tools: ['Sharp (server)', 'heic2any', 'browser-image-compression', 'file-type'] },
      { areaKey: 'email', tools: ['Brevo'] },
      { areaKey: 'observability', tools: ['Sentry', 'Vercel Analytics', 'Vercel Speed Insights'] },
    ],
    status: {
      en: 'Live in production at nenis.ai (v2.1.0). Active development. Companion blog at blog.nenis.ai.',
      de: 'Live in Produktion unter nenis.ai (v2.1.0). Aktive Weiterentwicklung. Begleit-Blog unter blog.nenis.ai.',
    },
    liveUrl: 'https://nenis.ai',
    year: '2025',
    role: {
      en: 'Full-stack developer',
      de: 'Full-Stack-Entwickler',
    },
  },
  {
    slug: 'nothing2c',
    title: 'Nothing2C',
    titleHtml: 'Nothing<sup>2C</sup>',
    tagline: {
      en: 'Social watchlist and movie-night planner',
      de: 'Soziale Watchlist und Filmabend-Planer',
    },
    summary: {
      en: 'A movie/TV app for groups of friends. Build a watchlist, run shared movie-night sessions, and vote together on what to watch.',
      de: 'Eine Film- und Serien-App für Freundesgruppen. Watchlist führen, gemeinsame Filmabende organisieren und zusammen darüber abstimmen, was geschaut wird.',
    },
    description: {
      en: [
        "Nothing²C is a movie and TV discovery app aimed at groups of friends. You build a personal watchlist, connect with the people you watch with, and run shared movie-night sessions where everyone votes on candidate titles and times.",
        "I built it because picking a movie with friends always took longer than the movie itself. The interesting part wasn't the data — it was the social side: friend requests, real-time voting, availability that updates as people respond, and notifications that nudge without becoming noise.",
      ],
      de: [
        'Nothing²C ist eine Film- und Serien-App, ausgerichtet auf Freundesgruppen. Man baut eine persönliche Watchlist auf, verbindet sich mit Leuten, mit denen man schaut, und organisiert gemeinsame Filmabende, bei denen alle über Vorschläge und Termine abstimmen.',
        'Ich habe sie gebaut, weil die Filmauswahl mit Freunden immer länger dauerte als der Film selbst. Das Spannende war nicht die Datenseite, sondern das Soziale: Freundschaftsanfragen, Live-Abstimmungen, Verfügbarkeiten, die sich bei jeder Rückmeldung aktualisieren, und Benachrichtigungen, die anstoßen, ohne zu nerven.',
      ],
    },
    features: {
      en: [
        'Personal watchlist that syncs across devices.',
        'Movie-night sessions: invite friends, propose candidates, settle on a time.',
        'Real-time voting and availability — the UI updates as people respond.',
        'Discovery and search backed by TMDb, with filters for genre, year and provider.',
        'Email + password auth with verification, password reset and persistent sessions.',
        'Push notifications for invitations and session updates.',
      ],
      de: [
        'Persönliche Watchlist, die geräteübergreifend synchronisiert.',
        'Filmabend-Sessions: Freunde einladen, Vorschläge machen, Termin finden.',
        'Live-Abstimmungen und Verfügbarkeiten — die UI aktualisiert sich, sobald jemand antwortet.',
        'Suche und Discovery auf Basis von TMDb, mit Filtern für Genre, Jahr und Anbieter.',
        'E-Mail- und Passwort-Auth mit Verifizierung, Passwort-Reset und persistenten Sessions.',
        'Push-Benachrichtigungen für Einladungen und Session-Updates.',
      ],
    },
    decisions: {
      en: [
        'Server-side auth with secure session cookies, so the same protection covers both pages and API routes.',
        'Designed the Firestore data model around real-time queries — friend graphs, session participants and votes all stream straight to the UI.',
        'Kept the TMDb integration server-side so the API key never reaches the browser, with shared helpers reused across search and detail pages.',
        'Daily scheduled cleanup via Vercel Cron retires stale sessions automatically.',
      ],
      de: [
        'Serverseitiges Auth mit sicheren Session-Cookies — derselbe Schutz greift sowohl für Seiten als auch für API-Routen.',
        'Firestore-Datenmodell auf Echtzeit-Queries ausgelegt: Freundes-Graph, Session-Teilnehmer und Stimmen werden direkt in die UI gestreamt.',
        'TMDb-Integration komplett serverseitig, damit der API-Key nie im Browser landet — mit geteilten Helpern für Suche und Detailseiten.',
        'Tägliches Cron-Cleanup über Vercel räumt veraltete Sessions automatisch auf.',
      ],
    },
    stack: [
      { areaKey: 'framework', tools: ['Next.js (App Router)', 'React', 'TypeScript'] },
      { areaKey: 'styling', tools: ['Tailwind CSS', 'Radix UI', 'Framer Motion'] },
      { areaKey: 'backend', tools: ['Next.js Route Handlers', 'Firebase Admin SDK', 'Cloud Functions'] },
      { areaKey: 'dataAuth', tools: ['Cloud Firestore', 'Firebase Auth', 'Session cookies'] },
      { areaKey: 'externalApis', tools: ['TMDb', 'Firebase Cloud Messaging'] },
      { areaKey: 'deployment', tools: ['Vercel', 'Vercel Cron', 'Vercel Analytics'] },
    ],
    status: {
      en: "All the core flows are live in production. Next on my list: more automated tests, tighter Firestore security-rule documentation, and smarter recommendations from a user's watch history.",
      de: 'Alle Kern-Flows sind in Produktion live. Als Nächstes: mehr automatisierte Tests, klarer dokumentierte Firestore-Sicherheitsregeln und intelligentere Empfehlungen aus dem Verlauf eines Nutzers.',
    },
    liveUrl: 'https://nothing2c.vercel.app',
    repoUrl: 'https://github.com/dev-kristian/afkcinema',
    image: 'https://nothing2c.vercel.app/nothing2c-live-screenshot.png',
    year: '2025',
    role: {
      en: 'Solo full-stack developer',
      de: 'Alleiniger Full-Stack-Entwickler',
    },
  },
  {
    slug: 'steak-and-eggs-analytics',
    title: 'Steak & Eggs Analytics',
    tagline: {
      en: 'Podcast transcript analytics dashboard',
      de: 'Analyse-Dashboard für Podcast-Transkripte',
    },
    summary: {
      en: 'An analytics dashboard built around 83 episodes of the Steak & Eggs podcast. Turns raw transcripts into speaker breakdowns, word clouds, readability scores, and question analysis.',
      de: 'Ein Analyse-Dashboard rund um 83 Folgen des Steak-&-Eggs-Podcasts. Macht aus rohen Transkripten Sprecher-Auswertungen, Wortwolken, Lesbarkeitswerte und Fragen-Analysen.',
    },
    description: {
      en: [
        "An analytics dashboard for the Steak & Eggs podcast. It takes 83 episodes worth of transcripts and turns them into something you can actually browse: who talks more, how language complexity changes over time, what kinds of questions get asked, how the guests differ from the hosts.",
        "I built it out of curiosity. Audio is the obvious thing in a podcast, but there's a whole second story in the transcripts — and it's surprisingly hard to get a sense of it without tools like this.",
      ],
      de: [
        'Ein Analyse-Dashboard für den Steak-&-Eggs-Podcast. Es nimmt 83 Folgen Transkripte und macht daraus etwas, in dem man tatsächlich stöbern kann: wer mehr redet, wie sich die sprachliche Komplexität entwickelt, welche Fragen gestellt werden, wie sich Gäste von den Hosts unterscheiden.',
        'Entstanden aus Neugier. Audio ist das Offensichtliche an einem Podcast, aber in den Transkripten steckt eine zweite Ebene — und ohne so ein Werkzeug bekommt man die schwer zu fassen.',
      ],
    },
    features: {
      en: [
        'Episode-level dashboard across 83 episodes (~1.45M words).',
        'Speaker breakdowns: word count, speaking time, lexical diversity per speaker.',
        'Readability and complexity metrics, including Gunning Fog Index.',
        'Question-type and emotional-expression analysis.',
        'Per-speaker word clouds with custom filtering.',
        'Light/dark theme with smooth transitions.',
      ],
      de: [
        'Dashboard auf Episodenebene für 83 Folgen (~1,45 Mio. Wörter).',
        'Sprecher-Auswertung: Wortanzahl, Redezeit und lexikalische Vielfalt pro Person.',
        'Lesbarkeit und Komplexitätsmetriken, inklusive Gunning-Fog-Index.',
        'Analyse von Fragetypen und emotionalen Ausdrücken.',
        'Wortwolken pro Sprecher mit individueller Filterung.',
        'Hell- und Dunkel-Theme mit weichen Übergängen.',
      ],
    },
    decisions: {
      en: [
        "Built a Node-based ETL pipeline: raw CSV transcripts in, structured per-episode and aggregate JSON out — generated at build time so the dashboard ships as static data.",
        'Used the Natural NLP library to compute readability and complexity (lexical diversity, Gunning Fog, etc.).',
        "Wired Chart.js into a word-cloud renderer (chartjs-chart-wordcloud) to support visualisations the standard Chart.js types don't.",
        'Made the scripts rerunnable: drop new transcripts into the data folder and a single command rebuilds every derived dataset.',
      ],
      de: [
        'ETL-Pipeline in Node gebaut: rohe CSV-Transkripte rein, strukturierte JSON-Daten pro Episode und in Aggregat raus — alles zur Build-Zeit, damit das Dashboard als statische Daten ausgeliefert wird.',
        'Lesbarkeit und Komplexität (lexikalische Vielfalt, Gunning Fog usw.) mit der NLP-Bibliothek Natural berechnet.',
        'Chart.js mit chartjs-chart-wordcloud verbunden, um Wortwolken-Visualisierungen zu unterstützen, die Chart.js von Haus aus nicht kann.',
        'Skripte sind wiederholbar gebaut: Neue Transkripte in den Datenordner legen, ein Befehl baut alle abgeleiteten Datensätze neu.',
      ],
    },
    stack: [
      { areaKey: 'framework', tools: ['Next.js 16', 'React 19', 'TypeScript'] },
      { areaKey: 'styling', tools: ['Tailwind CSS', 'Radix UI', 'shadcn-style primitives'] },
      { areaKey: 'charts', tools: ['Chart.js', 'react-chartjs-2', 'chartjs-chart-wordcloud'] },
      { areaKey: 'dataPipeline', tools: ['Node.js scripts', 'csv-parse', 'Papa Parse', 'Natural (NLP)'] },
      { areaKey: 'tooling', tools: ['ESLint', 'Vercel Analytics'] },
    ],
    status: {
      en: 'Current dataset: 83 episodes, ~1,453,462 words, 27 guests, average episode around 1h 23m. The pipeline is set up to handle new transcripts as the podcast continues.',
      de: 'Aktueller Datenstand: 83 Folgen, ~1.453.462 Wörter, 27 Gäste, durchschnittliche Folgenlänge etwa 1 Std. 23 Min. Die Pipeline ist darauf ausgelegt, neue Transkripte aufzunehmen, sobald sie verfügbar sind.',
    },
    repoUrl: 'https://github.com/dev-kristian/sne_info',
    year: '2025',
    role: {
      en: 'Solo developer',
      de: 'Alleiniger Entwickler',
    },
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
