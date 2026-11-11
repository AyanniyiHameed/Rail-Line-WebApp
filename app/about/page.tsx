import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import PageHeader from "../components/PageHeader";
import DemoNotice from "../components/DemoNotice";
import ExternalLink from "../components/ExternalLink";

export const metadata: Metadata = {
  title: "About Us | RailLine",
  description: "What RailLine is, why it exists and what's under the hood.",
};

const stack = [
  ["Next.js and React", "the framework and the interface"],
  ["TypeScript", "so mistakes get caught before they reach you"],
  ["Tailwind CSS", "the styling"],
  ["Clerk", "sign-up, sign-in and accounts"],
  ["Neon (Postgres) and Drizzle", "where your tickets are stored"],
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-10 sm:pt-16">
      <PageHeader
        eyebrow="About Us"
        title="A train app, built properly"
        intro="RailLine is a UK train booking and live-times web app. It's a project I built to learn full-stack web development by making something real, from the first search box to the database behind it."
      />

      <section>
        <h2 className="text-xl font-semibold">What it does</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-zinc-700">
          <li>Search journeys between stations, one-way or return.</li>
          <li>Book a ticket and keep it in your own account, ready to view or cancel.</li>
          <li>Check live-style departure and arrival boards for a station.</li>
          <li>Read plain-English guides to tickets, delays and railcards.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">What&apos;s real, and what isn&apos;t</h2>
        <p className="mt-3 leading-7 text-zinc-700">
          I want to be straight about this. Accounts and the tickets you book are real: they&apos;re
          saved in a genuine database. But the train data is not. Journeys, fares and live
          boards are generated sample data, and no payments are taken. That makes RailLine a
          great place to explore and a poor place to plan an actual journey.
        </p>
        <div className="mt-5">
          <DemoNotice />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Under the hood</h2>
        <ul className="mt-4 divide-y rounded-xl border">
          {stack.map(([name, what]) => (
            <li key={name} className="px-5 py-3 text-sm">
              <span className="font-medium">{name}</span>
              <span className="text-zinc-500">, {what}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          The code is public. You can read it on{" "}
          <ExternalLink href={SITE.githubRepo}>GitHub</ExternalLink>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">What&apos;s next</h2>
        <p className="mt-3 leading-7 text-zinc-700">
          The big one is swapping the sample data for real National Rail data, so the boards
          and journeys are the genuine article. After that: taking payments, and more
          stations than the handful here today.
        </p>
      </section>

      <p className="mt-12 text-sm text-zinc-600">
        Got feedback or spotted a bug?{" "}
        <Link href="/contact" className="font-medium text-red-600 hover:underline">
          I&apos;d love to hear it
        </Link>
        .
      </p>
    </main>
  );
}
