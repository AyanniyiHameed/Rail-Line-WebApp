import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import PageHeader from "../components/PageHeader";
import ExternalLink from "../components/ExternalLink";

export const metadata: Metadata = {
  title: "Contact | RailLine",
  description: "How to reach the person behind RailLine.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-10 sm:pt-16">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="RailLine is built and run by one person, so you'll be talking to the person who wrote it. Feedback, bug reports and questions are all welcome."
      />

      <div className="grid gap-5">
        <section className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">Found a bug or have an idea?</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            The best place is the project&apos;s GitHub page. Open an issue and describe what you
            saw or what you&apos;d like to see.
          </p>
          <p className="mt-3 text-sm">
            <ExternalLink href={SITE.githubRepo}>RailLine on GitHub</ExternalLink>
          </p>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">Just want to say hello?</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            You can find me on GitHub too.
          </p>
          <p className="mt-3 text-sm">
            <ExternalLink href={SITE.githubProfile}>My GitHub profile</ExternalLink>
          </p>
          {SITE.contactEmail && (
            <p className="mt-3 text-sm">
              Or email{" "}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="font-medium text-red-600 hover:underline"
              >
                {SITE.contactEmail}
              </a>
              .
            </p>
          )}
        </section>

        <section className="rounded-xl bg-zinc-100 p-6 text-sm leading-6 text-zinc-700">
          Looking for help using the site? The{" "}
          <Link href="/help" className="font-medium text-red-600 hover:underline">
            Help Center
          </Link>{" "}
          probably has your answer, and so might the{" "}
          <Link href="/#faqs" className="font-medium text-red-600 hover:underline">
            FAQs
          </Link>
          .
        </section>
      </div>
    </main>
  );
}
