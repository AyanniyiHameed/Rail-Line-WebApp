import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { resolveBooking, type BookingParams } from "@/lib/booking";
import SubmitButton from "../components/SubmitButton";
import { confirmBooking } from "./actions";

type BookPageProps = {
  searchParams: Promise<BookingParams>;
};

export default async function BookPage({ searchParams }: BookPageProps) {
  const { isAuthenticated, redirectToSignIn } = await auth();

  if (!isAuthenticated) return redirectToSignIn();

  const booking = resolveBooking(await searchParams);
  if (!booking) notFound();

  const { legs, passengers, total } = booking;
  const [outbound, back] = legs;

  return (
    <main className="mx-auto max-w-2xl px-6 pb-20 pt-16">
      <h1 className="text-2xl font-semibold tracking-tight">Confirm your booking</h1>

      <div className="mt-8 flex flex-col gap-4">
        {legs.map((leg, i) => (
          <div key={i} className="rounded-xl border p-6">
            {legs.length > 1 && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-600">
                {i === 0 ? "Outbound" : "Return"}
              </p>
            )}
            <p className="text-lg font-semibold">
              {leg.from} → {leg.to}
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              {new Date(leg.date).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>

            <dl className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              <dt className="text-zinc-500">Departs</dt>
              <dd className="text-right font-medium">{leg.journey.departTime}</dd>

              <dt className="text-zinc-500">Arrives</dt>
              <dd className="text-right font-medium">{leg.journey.arriveTime}</dd>

              <dt className="text-zinc-500">Operator</dt>
              <dd className="text-right font-medium">{leg.journey.operator}</dd>

              <dt className="text-zinc-500">Price per person</dt>
              <dd className="text-right font-medium">£{leg.journey.price}</dd>
            </dl>
          </div>
        ))}

        <div className="rounded-xl border bg-zinc-50 p-6">
          <dl className="grid grid-cols-2 gap-y-3 text-sm">
            <dt className="text-zinc-500">Passengers</dt>
            <dd className="text-right font-medium">{passengers}</dd>

            <dt className="border-t pt-3 text-zinc-500">Total</dt>
            <dd className="border-t pt-3 text-right text-lg font-bold text-red-600">
              £{total}
            </dd>
          </dl>
        </div>
      </div>

      <form action={confirmBooking} className="mt-6">
        <input type="hidden" name="from" value={outbound.from} />
        <input type="hidden" name="to" value={outbound.to} />
        <input type="hidden" name="date" value={outbound.date} />
        <input type="hidden" name="journey" value={outbound.journey.id} />
        <input type="hidden" name="passengers" value={passengers} />
        {back && (
          <>
            <input type="hidden" name="returnDate" value={back.date} />
            <input type="hidden" name="returnJourney" value={back.journey.id} />
          </>
        )}
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
