import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function MyTicketsPage() {
  const { isAuthenticated, redirectToSignIn } = await auth();

  if (!isAuthenticated) return redirectToSignIn();

  return (
    <main className="mx-auto max-w-2xl px-6 pb-20 pt-16">
      <h1 className="text-2xl font-semibold tracking-tight">My Tickets</h1>

      <div className="mt-8 rounded-xl border border-dashed border-zinc-300 p-10 text-center">
        <p className="font-medium">No tickets yet</p>
        <p className="mt-1 text-sm text-zinc-500">
          Tickets you book will show up here.
        </p>
        <Link
          href="/"
          className="mt-5 inline-block rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Find a train
        </Link>
      </div>
    </main>
  );
}
