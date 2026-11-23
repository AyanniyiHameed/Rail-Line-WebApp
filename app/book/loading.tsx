export default function Loading() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-20 pt-16" role="status" aria-busy="true">
      <span className="sr-only">Loading your booking</span>
      <div className="h-8 w-64 animate-pulse rounded bg-zinc-200" />
      <div className="mt-8 flex flex-col gap-4">
        <div className="h-52 animate-pulse rounded-xl bg-zinc-100" />
        <div className="h-24 animate-pulse rounded-xl bg-zinc-100" />
      </div>
    </main>
  );
}
