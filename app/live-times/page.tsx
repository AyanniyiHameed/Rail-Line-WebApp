import LiveBoard from "../components/LiveBoard";

type LiveTimesPageProps = {
  searchParams: Promise<{ station?: string }>;
};

export default async function LiveTimesPage({ searchParams }: LiveTimesPageProps) {
  const params = await searchParams;

  return <LiveBoard key={params.station} initialStationCode={params.station} />;
}
