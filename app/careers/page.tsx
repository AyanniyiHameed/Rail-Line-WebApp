import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Careers | RailLine",
  description: "RailLine isn't hiring yet.",
};

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-10 sm:pt-16">
      <PageHeader
        eyebrow="Careers"
        title="We're not hiring... yet"
        intro="RailLine is a one-person project right now, so there are no open roles and no desks to fill."
      />

      <div className="rounded-xl border border-dashed border-zinc-300 p-10 text-center">
        <p className="text-lg font-semibold">Coming soon</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600">
          If RailLine grows into something bigger, this is where the jobs will appear. Until
          then, thanks for stopping by.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Say hello instead
        </Link>
      </div>
    </main>
  );
}
