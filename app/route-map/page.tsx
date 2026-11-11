import type { Metadata } from "next";
import Link from "next/link";
import { londonTerminals } from "@/lib/london-terminals";
import { findStationByName } from "@/lib/stations";
import PageHeader from "../components/PageHeader";
import LondonTerminalsDiagram from "../components/LondonTerminalsDiagram";
import ExternalLink from "../components/ExternalLink";

export const metadata: Metadata = {
  title: "Route Map | RailLine",
  description: "Which London station do you need? A simple guide to the capital's main-line terminals.",
};

export default function RouteMapPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-10 sm:pt-16">
      <PageHeader
        eyebrow="Route Map"
        title="Which London station do you need?"
        intro="London has no single central station. Instead, trains from different parts of the country arrive at different terminals around the middle of the city. This sketch shows where they sit, and the list below shows where each one takes you."
      />

      <LondonTerminalsDiagram />

      <section className="mt-12">
        <h2 className="text-xl font-semibold">The terminals and where they go</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {londonTerminals.map((terminal) => {
            const station = findStationByName(terminal.name);

            return (
              <li key={terminal.name} className="rounded-xl border p-5">
                <h3 className="font-semibold">{terminal.name}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">{terminal.goesTo}</p>
                <p className="mt-2 text-xs leading-5 text-zinc-500">{terminal.operators}</p>
                {station && (
                  <Link
                    href={`/live-times?station=${station.code}`}
                    className="mt-3 inline-block text-sm font-medium text-red-600 hover:underline"
                  >
                    See live times →
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-12 rounded-xl bg-zinc-100 p-6">
        <h2 className="text-lg font-semibold">Looking for the Tube map?</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-700">
          The Tube, Elizabeth line, Overground and DLR have their own official map, kept up to
          date by Transport for London. This page is a simple guide to main-line stations, so it
          isn&apos;t a replacement.
        </p>
        <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <ExternalLink href="https://tfl.gov.uk/plan-a-journey/maps">TfL maps</ExternalLink>
          <ExternalLink href="https://www.nationalrail.co.uk/">National Rail</ExternalLink>
        </p>
      </section>

      <p className="mt-6 text-xs leading-5 text-zinc-500">
        Operators and routes change from time to time, so check National Rail before you travel.
      </p>
    </main>
  );
}
