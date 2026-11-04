import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { tickets } from "@/db/schema";
import TicketCard from "../components/TicketCard";

export default async function MyTicketsPage() {
  const { isAuthenticated, userId, redirectToSignIn } = await auth();

  if (!isAuthenticated) return redirectToSignIn();

  const myTickets = await db
    .select()
    .from(tickets)
    .where(eq(tickets.userId, userId))
    .orderBy(desc(tickets.createdAt));

  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Europe/London",
  });

  // "YYYY-MM-DD" strings sort correctly as plain text, so >= works for dates
  const upcoming = myTickets
    .filter((t) => t.status === "confirmed" && t.travelDate >= today)
    .sort((a, b) =>
      `${a.travelDate} ${a.departTime}`.localeCompare(`${b.travelDate} ${b.departTime}`),
    );
  const past = myTickets.filter((t) => !upcoming.includes(t));

  return (
    <main className="mx-auto max-w-2xl px-6 pb-20 pt-16">
      <h1 className="text-2xl font-semibold tracking-tight">My Tickets</h1>

      <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Upcoming
      </h2>

      {upcoming.length === 0 ? (
        <div className="mt-3 rounded-xl border border-dashed border-zinc-300 p-10 text-center">
          <p className="font-medium">No upcoming trips</p>
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
      ) : (
        <ul className="mt-3 flex flex-col gap-4">
          {upcoming.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} canCancel />
          ))}
        </ul>
      )}

      {past.length > 0 && (
        <>
          <h2 className="mt-12 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Past &amp; cancelled
          </h2>
          <ul className="mt-3 flex flex-col gap-4">
            {past.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
