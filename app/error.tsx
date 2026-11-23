'use client'

import { useEffect } from "react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  // The real error goes to the console for us, never onto the page for visitors
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
        Something went wrong
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        We&apos;ve hit a signal failure
      </h1>
      <p className="mx-auto mt-4 max-w-md leading-7 text-zinc-600">
        Something broke on our side. Trying again often fixes it, and if it doesn&apos;t,
        head back to the start.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="cursor-pointer rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border px-6 py-3 text-sm font-medium transition hover:bg-zinc-50"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
