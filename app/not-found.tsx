import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-widest text-red-600">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        This train doesn&apos;t stop here
      </h1>
      <p className="mx-auto mt-4 max-w-md leading-7 text-zinc-600">
        We couldn&apos;t find the page you were looking for. The link may be old or
        mistyped.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Back to home
        </Link>
        <Link
          href="/live-times"
          className="rounded-lg border px-6 py-3 text-sm font-medium transition hover:bg-zinc-50"
        >
          Live train times
        </Link>
        <Link
          href="/guides"
          className="rounded-lg border px-6 py-3 text-sm font-medium transition hover:bg-zinc-50"
        >
          Travel guides
        </Link>
      </div>
    </main>
  );
}
