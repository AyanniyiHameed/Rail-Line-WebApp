import type { Metadata } from "next";
import Link from "next/link";
import { OFFICIAL_LINKS } from "@/lib/site";
import PageHeader from "../components/PageHeader";
import DemoNotice from "../components/DemoNotice";
import ExternalLink from "../components/ExternalLink";

export const metadata: Metadata = {
  title: "Help Center | RailLine",
  description: "How to search, book, cancel and find live train times on RailLine.",
};

const topics = [
  {
    title: "Booking a ticket",
    steps: [
      "Press Book a ticket (or use the search box on the home page) and choose where from, where to, the date and how many passengers.",
      "Pick a journey from the results and press Select.",
      "Check the summary, then press Confirm booking. You'll need to be signed in.",
    ],
    note: "RailLine doesn't take payments yet, so nothing is ever charged.",
  },
  {
    title: "Booking a return trip",
    steps: [
      "Tick Add a return trip and choose your return date when you search.",
      "First choose your outbound journey, then your return journey.",
      "Confirm both together. You'll get two tickets, one for each direction.",
    ],
  },
  {
    title: "Finding your tickets, and cancelling",
    steps: [
      "Open My Tickets from the menu. Upcoming trips are at the top, and past or cancelled ones are below.",
      "Press Cancel ticket on any upcoming trip. A return trip is two tickets, so cancel each leg separately.",
    ],
    note: "Because no money is taken, there are no refunds to process.",
  },
  {
    title: "Live train times",
    steps: [
      "Open Live Train Times and search for a station.",
      "Switch between Departures and Arrivals. The board refreshes itself every 30 seconds.",
    ],
    note: "These times are sample data. For real ones, use National Rail.",
  },
  {
    title: "Your account",
    steps: [
      "Use Sign in to create an account or sign in. Use the round picture in the top corner to manage your account or sign out.",
      "The Account page shows the details you signed up with.",
    ],
  },
];

export default function HelpPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-10 sm:pt-16">
      <PageHeader
        eyebrow="Help Center"
        title="How can we help?"
        intro="Quick guides to everything you can do on RailLine. If you can't find your answer here, get in touch."
      />

      <DemoNotice />

      <div className="mt-10 grid gap-5">
        {topics.map((topic) => (
          <section key={topic.title} className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">{topic.title}</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-zinc-700">
              {topic.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            {topic.note && <p className="mt-3 text-sm text-zinc-500">{topic.note}</p>}
          </section>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Need the real thing?</h2>
        <p className="mt-2 leading-7 text-zinc-600">
          For real timetables, disruption news, railcards and passenger rights, go to the
          official sources:
        </p>
        <ul className="mt-4 divide-y rounded-xl border">
          {OFFICIAL_LINKS.map((link) => (
            <li key={link.href} className="px-5 py-3 text-sm">
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
              <p className="mt-0.5 text-zinc-500">{link.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-zinc-600">
        Still stuck?{" "}
        <Link href="/contact" className="font-medium text-red-600 hover:underline">
          Contact me
        </Link>
        , or read the{" "}
        <Link href="/guides" className="font-medium text-red-600 hover:underline">
          travel guides
        </Link>
        .
      </p>
    </main>
  );
}
