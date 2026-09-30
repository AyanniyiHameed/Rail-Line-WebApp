import Link from "next/link";
import { searchJourneys } from "@/lib/journeys";
import JourneyCard from "../components/JourneyCard";

type SearchPageProps = {
  searchParams: Promise<{
    from?: string;
    to?: string;
    date?: string;
    passengers?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const from = params.from ?? "";
  const to = params.to ?? "";
  const date = params.date ?? "";
  const passengers = Number(params.passengers ?? 1);

  if (!from || !to || !date) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-2xl font-semibold">Missing search details</h1>
        <p className="mt-2 text-zinc-600">
          Head back and choose a departure, arrival and date to see journeys.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Back to search
        </Link>
      </main>
    );
  }

  const journeys = searchJourneys(from, to, date);

  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-28">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          {from} → {to}
        </h1>
        <p className="mt-1 text-sm text-zinc-600">
          {new Date(date).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
          {" · "}
          {passengers} {passengers === 1 ? "passenger" : "passengers"}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {journeys.map((journey) => (
          <JourneyCard key={journey.id} journey={journey} />
        ))}
      </div>
    </main>
  );
}
