import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import SubmitButton from "../components/SubmitButton";
import { resolveBooking, type BookingParams } from "@/lib/booking";
import { confirmBooking } from "./actions";

type BookPageProps = {
  searchParams: Promise<BookingParams>;
};

export default async function BookPage({ searchParams }: BookPageProps) {
  const { isAuthenticated, redirectToSignIn } = await auth();

  if (!isAuthenticated) return redirectToSignIn();

  const booking = resolveBooking(await searchParams);
  if (!booking) notFound();

  const { from, to, date, journey, passengers, total } = booking;

  return (
    <main className="mx-auto max-w-2xl px-6 pb-20 pt-16">
      <h1 className="text-2xl font-semibold tracking-tight">Confirm your booking</h1>

      <div className="mt-8 rounded-xl border p-6">
        <p className="text-lg font-semibold">
          {from} → {to}
        </p>
        <p className="mt-1 text-sm text-zinc-600">
          {new Date(date).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-y-3 text-sm">
          <dt className="text-zinc-500">Departs</dt>
          <dd className="text-right font-medium">{journey.departTime}</dd>

          <dt className="text-zinc-500">Arrives</dt>
          <dd className="text-right font-medium">{journey.arriveTime}</dd>

          <dt className="text-zinc-500">Operator</dt>
          <dd className="text-right font-medium">{journey.operator}</dd>

          <dt className="text-zinc-500">Passengers</dt>
          <dd className="text-right font-medium">{passengers}</dd>

          <dt className="border-t pt-3 text-zinc-500">Total</dt>
          <dd className="border-t pt-3 text-right text-lg font-bold text-red-600">
            £{total}
          </dd>
        </dl>
      </div>

      <form action={confirmBooking} className="mt-6">
        <input type="hidden" name="from" value={from} />
        <input type="hidden" name="to" value={to} />
        <input type="hidden" name="date" value={date} />
        <input type="hidden" name="journey" value={journey.id} />
        <input type="hidden" name="passengers" value={passengers} />
        <SubmitButton pendingText="Booking..." className="w-full">
          Confirm booking
        </SubmitButton>
      </form>

      <Link
        href="/"
        className="mt-4 inline-block text-sm text-zinc-500 transition hover:text-zinc-900"
      >
        ← Cancel
      </Link>
    </main>
  );
}
