import Link from "next/link";
import FindTrainModal from "./FindTrainModal";

const CallToAction = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready when you are
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
          Search a route, book your ticket and keep every journey in one place. New to
          the rails? Our guides cover the basics.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <FindTrainModal triggerClassName="cursor-pointer rounded-lg bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-red-700" />
          <Link
            href="/guides"
            className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
          >
            Read the travel guides
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
