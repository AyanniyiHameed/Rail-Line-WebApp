import ExternalLink from "./ExternalLink";

const DemoNotice = () => {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
      <p>
        <span className="font-semibold">Heads up:</span> RailLine is a portfolio
        project. The journeys, fares and live train times you see here are sample
        data, so please don&apos;t use them to plan a real trip. For real times, use{" "}
        <ExternalLink href="https://www.nationalrail.co.uk/">National Rail</ExternalLink>.
      </p>
    </div>
  );
};

export default DemoNotice;
