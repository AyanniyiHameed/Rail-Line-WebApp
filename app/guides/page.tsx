import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { OFFICIAL_LINKS } from "@/lib/site";
import PageHeader from "../components/PageHeader";
import DemoNotice from "../components/DemoNotice";
import ExternalLink from "../components/ExternalLink";

export const metadata: Metadata = {
  title: "Travel Guides | RailLine",
  description: "Plain-English guides to tickets, delays, railcards and reading station boards.",
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-10 sm:pt-16">
      <PageHeader
        eyebrow="Travel Guides"
        title="Train travel, explained properly"
        intro="Short, plain-English guides to the things that confuse people about UK trains. Written for RailLine."
      />

      <ul className="grid gap-4">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="block rounded-xl border p-6 transition hover:border-red-300 hover:shadow-sm"
            >
              <p className="text-xs font-medium text-zinc-500">{guide.readTime}</p>
              <h2 className="mt-1 text-lg font-semibold">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{guide.summary}</p>
              <p className="mt-3 text-sm font-medium text-red-600">Read the guide →</p>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Want the latest news and updates?</h2>
        <p className="mt-2 leading-7 text-zinc-600">
          RailLine doesn&apos;t have a live news feed, and I&apos;d rather point you to the
          people who do than make something up. These are the official sources:
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

      <div className="mt-10">
        <DemoNotice />
      </div>
    </main>
  );
}
