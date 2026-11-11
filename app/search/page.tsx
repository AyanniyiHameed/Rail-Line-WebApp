import Link from "next/link";
import { searchJourneys, type Journey } from "@/lib/journeys";
import { findJourney } from "@/lib/booking";
import { todayUK } from "@/lib/dates";
import JourneyCard from "../components/JourneyCard";

type SearchPageProps = {
  searchParams: Promise<{
    from?: string;
    to?: string;
    date?: string;
    passengers?: string;
    returnDate?: string;
    outbound?: string;
  }>;
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const from = params.from ?? "";
  const to = params.to ?? "";
  const today = todayUK();
  const date = params.date ?? today;
  const passengers = Number(params.passengers ?? 1);
  const returnDate = params.returnDate;

  const problem =
    !from || !to || !date
      ? {
          title: "Missing search details",
          text: "Head back and choose a departure, arrival and date to see journeys.",
        }
      : date < today
        ? {
            title: "That date has passed",
            text: "Pick today or a date in the future to see journeys.",
          }
        : returnDate && !(returnDate >= date)
          ? {
              title: "Check your return date",
              text: "Your return can't be before your outward journey.",
            }
          : null;

  if (problem) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-2xl font-semibold">{problem.title}</h1>
        <p className="mt-2 text-zinc-600">{problem.text}</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Back to search
        </Link>
      </main>
    );
  }

  // Return trips are two steps. Step 2 begins once an outbound journey is chosen
  // (its id travels in the URL as ?outbound=...)
  const outbound =
    returnDate && params.outbound
      ? findJourney(from, to, date, params.outbound)
      : undefined;
  const returnStep = returnDate && outbound ? { returnDate, outbound } : null;

  // Which direction are we listing right now?
  const legFrom = returnStep ? to : from;
  const legTo = returnStep ? from : to;
  const legDate = returnStep ? returnStep.returnDate : date;

  let journeys = searchJourneys(legFrom, legTo, legDate);
  if (returnStep && returnStep.returnDate === date) {
    // Same-day return: only trains that leave after the outbound arrives
    journeys = journeys.filter((j) => j.departTime > returnStep.outbound.arriveTime);
  }

  const baseParams = { from, to, date, passengers: String(passengers) };

  // Where does Select go? Depends on which step we're on.
  const hrefFor = (journey: Journey) => {
    if (!returnDate) {
      return `/book?${new URLSearchParams({ ...baseParams, journey: journey.id })}`;
    }
    if (!returnStep) {
      return `/search?${new URLSearchParams({ ...baseParams, returnDate, outbound: journey.id })}`;
    }
    return `/book?${new URLSearchParams({
      ...baseParams,
      journey: returnStep.outbound.id,
      returnDate,
      returnJourney: journey.id,
    })}`;
  };

  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-10 sm:pt-16">
      <div className="mb-8">
        {returnDate && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-600">
            Step {returnStep ? 2 : 1} of 2 ·{" "}
            {returnStep ? "Choose your return journey" : "Choose your outbound journey"}
          </p>
        )}
        <h1 className="text-2xl font-semibold tracking-tight">
          {legFrom} → {legTo}
        </h1>
        <p className="mt-1 text-sm text-zinc-600">
          {formatDate(legDate)}
          {" · "}
          {passengers} {passengers === 1 ? "passenger" : "passengers"}
        </p>
      </div>

      {returnStep && (
        <div className="mb-6 flex items-center justify-between rounded-xl bg-zinc-100 px-5 py-3 text-sm">
          <p>
            <span className="font-semibold">Outbound:</span> {from} → {to},{" "}
            {formatDate(date)}, {returnStep.outbound.departTime} →{" "}
            {returnStep.outbound.arriveTime}
          </p>
          <Link
            href={`/search?${new URLSearchParams({ ...baseParams, returnDate: returnStep.returnDate })}`}
            className="ml-4 shrink-0 font-medium text-red-600 hover:underline"
          >
            Change
          </Link>
        </div>
      )}

      {journeys.length === 0 ? (
        <p className="rounded-xl border border-dashed p-10 text-center text-zinc-500">
          No later trains that day. Try a later return date.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {journeys.map((journey) => (
            <JourneyCard key={journey.id} journey={journey} href={hrefFor(journey)} />
          ))}
        </div>
      )}
    </main>
  );
}
