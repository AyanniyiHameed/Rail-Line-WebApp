// Shown automatically while the page waits on the database
export default function Loading() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-20 pt-16" role="status" aria-busy="true">
      <span className="sr-only">Loading your tickets</span>
      <div className="h-8 w-40 animate-pulse rounded bg-zinc-200" />
      <div className="mt-8 h-4 w-24 animate-pulse rounded bg-zinc-200" />
      <div className="mt-3 flex flex-col gap-4">
        <div className="h-32 animate-pulse rounded-xl bg-zinc-100" />
        <div className="h-32 animate-pulse rounded-xl bg-zinc-100" />
      </div>
    </main>
  );
}
