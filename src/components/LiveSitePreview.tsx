type LiveSitePreviewProps = {
  url: string
  title: string
}

export function LiveSitePreview({ url, title }: LiveSitePreviewProps) {
  let host = url

  try {
    host = new URL(url).host
  } catch {
    /* keep raw URL */
  }

  return (
    <div className="flex h-full w-full flex-col bg-[var(--color-bg)]">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[var(--color-fg-muted)]/40" />
        <span className="h-2 w-2 rounded-full bg-[var(--color-fg-muted)]/40" />
        <span className="h-2 w-2 rounded-full bg-[var(--color-fg-muted)]/40" />
        <div className="ml-2 flex-1 truncate rounded bg-[var(--color-bg-elev)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-fg-muted)]">
          {host}
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden bg-white">
        <iframe
          src={url}
          title={`${title} preview`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin"
          tabIndex={-1}
          className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0 bg-white"
        />
      </div>
    </div>
  )
}
