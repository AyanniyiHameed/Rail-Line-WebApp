import { Journey } from "@/lib/journeys";
import { Button } from "@/components/ui/button";

type Props = {
  journey: Journey;
};

const JourneyCard = ({ journey }: Props) => {
  return (
    <div className="flex items-center justify-between rounded-xl border p-5 transition hover:border-red-300 hover:shadow-sm">
      <div className="flex items-center gap-6">
        <div className="text-center">
          <p className="text-lg font-semibold">{journey.departTime}</p>
          <p className="text-xs text-zinc-500">Depart</p>
        </div>

        <div className="flex flex-col items-center text-zinc-400">
          <span className="text-xs">{journey.duration}</span>
          <div className="h-px w-16 bg-zinc-300" />
          <span className="text-xs">
            {journey.changes === 0 ? "Direct" : `${journey.changes} change`}
          </span>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{journey.arriveTime}</p>
          <p className="text-xs text-zinc-500">Arrive</p>
        </div>

        <div className="ml-4 hidden text-sm text-zinc-500 sm:block">
          {journey.operator}
        </div>
      </div>

      <div className="text-right">
        <p className="text-xl font-bold text-red-600">£{journey.price}</p>
        <Button size="sm" className="mt-2">
          Select
        </Button>
      </div>
    </div>
  );
};

export default JourneyCard;
