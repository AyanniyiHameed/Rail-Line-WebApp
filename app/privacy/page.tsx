import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | RailLine",
  description: "What RailLine stores about you, and what it doesn't.",
};

const sections = [
  {
    heading: "Your account",
    body: [
      "Sign-up and sign-in are handled by a service called Clerk. When you create an account, Clerk stores the details you give it, such as your email address and name. RailLine can then see your name, your email address and a unique account ID, and it shows your name and email on your Account page.",
      "Clerk uses cookies to keep you signed in. These are needed for the site to work.",
    ],
  },
  {
    heading: "Your tickets",
    body: [
      "When you book a ticket, RailLine saves it in its database (hosted with Neon). For each ticket it stores the route, date, times, operator, number of passengers, price, status and when you booked it, along with your account ID so it can show the ticket to you and nobody else.",
    ],
  },
  {
    heading: "What RailLine does not collect",
    body: [
      "RailLine does not take payments, so it holds no card or bank details. It doesn't use advertising or analytics trackers. The newsletter box on the home page isn't switched on yet, so anything typed into it is not stored.",
    ],
  },
  {
    heading: "Who can see your data",
    body: [
      "Only you can see your tickets in the app. The person who runs RailLine can see what's in the database. Your data is not sold or shared for marketing.",
    ],
  },
  {
    heading: "Removing your data",
    body: [
      "If you'd like your tickets or account information removed, ask me and I'll delete it.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-20 pt-10 sm:pt-16">
      <PageHeader
        eyebrow="Privacy Policy"
        title="What RailLine stores about you"
        intro="A short, plain-English summary. RailLine is a small project, so there isn't much to tell."
      />

      {sections.map((section) => (
        <section key={section.heading} className="mb-10">
          <h2 className="text-xl font-semibold">{section.heading}</h2>
          {section.body.map((paragraph, i) => (
            <p key={i} className="mt-3 leading-7 text-zinc-700">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <p className="text-sm leading-6 text-zinc-600">
        Questions about any of this?{" "}
        <Link href="/contact" className="font-medium text-red-600 hover:underline">
          Get in touch
        </Link>
        . Last updated 11 November 2026.
      </p>

      <p className="mt-6 rounded-xl bg-zinc-100 p-4 text-xs leading-5 text-zinc-500">
        This describes how the project works today. It isn&apos;t legal advice, and it should be
        reviewed properly before RailLine is opened up to the public.
      </p>
    </main>
  );
}
