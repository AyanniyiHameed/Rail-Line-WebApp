import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, findGuide } from "@/lib/guides";
import ExternalLink from "../../components/ExternalLink";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

// Tells Next.js which slugs exist, so these pages are built ahead of time
export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = findGuide(slug);

  return {
    title: guide ? `${guide.title} | RailLine` : "Guide not found | RailLine",
    description: guide?.summary,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = findGuide(slug);

  if (!guide) notFound();

  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  return (
    <main className="mx-auto max-w-2xl px-6 pb-20 pt-10 sm:pt-16">
      <Link
        href="/guides"
        className="text-sm text-zinc-500 transition hover:text-zinc-900"
      >
        ← All guides
      </Link>

      <article className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-red-600">
          Travel Guide · {guide.readTime}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600">{guide.summary}</p>

        {guide.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-xl font-semibold">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i} className="mt-3 leading-7 text-zinc-700">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>

      <p className="mt-12 rounded-xl bg-zinc-100 p-4 text-sm leading-6 text-zinc-600">
        This is general guidance, and rules and fares change. For the latest, check{" "}
        <ExternalLink href="https://www.nationalrail.co.uk/">National Rail</ExternalLink>{" "}
        or your train operator.
      </p>

      <section className="mt-14">
        <h2 className="text-lg font-semibold">More guides</h2>
        <ul className="mt-4 grid gap-3">
          {otherGuides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="text-red-600 underline-offset-4 hover:underline"
              >
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
