'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { findStationByCode, findStationByName } from "@/lib/stations";
import { getDepartureBoard, type BoardMode, type Departure } from "@/lib/departures";
import StationInput from "./StationInput";

type Props = {
  initialStationCode?: string;
};

const REFRESH_MS = 30_000;

const statusColor: Record<Departure["status"], string> = {
  "On time": "text-green-600",
  Delayed: "text-amber-600",
  Cancelled: "text-red-600",
};

const LiveBoard = ({ initialStationCode }: Props) => {
  const router = useRouter();

  const initialStation = initialStationCode
    ? findStationByCode(initialStationCode)
    : undefined;

  const [stationName, setStationName] = useState(initialStation?.name ?? "");
  const [mode, setMode] = useState<BoardMode>("departures");
  const [board, setBoard] = useState<Departure[] | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const station = findStationByName(stationName);

  // Re-runs whenever the chosen station or mode changes, and again every
  // REFRESH_MS while this effect is still "current" - that's what makes
  // the board feel live without the user doing anything.
  useEffect(() => {
    if (!station) {
      setBoard(null);
      return;
    }

    const load = () => {
      setBoard(getDepartureBoard(station.code, mode));
      setLastUpdated(new Date());
    };

    load();
    const interval = setInterval(load, REFRESH_MS);
    return () => clearInterval(interval);
  }, [station?.code, mode]);

  const handleStationChange = (name: string) => {
    setStationName(name);

    const matched = findStationByName(name);
    if (matched) {
      router.replace(`/live-times?station=${matched.code}`);
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28">
      <h1 className="text-2xl font-semibold tracking-tight">Live Train Times</h1>
      <p className="mt-1 text-sm text-zinc-600">
        Departures and arrivals for any UK station.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]">
        <StationInput
          label="Station"
          placeholder="Search for a station"
          value={stationName}
          onChange={handleStationChange}
        />

        <div className="flex items-end gap-2">
          <button
            type="button"
            onClick={() => setMode("departures")}
            className={`rounded-lg px-4 py-3.5 text-sm font-medium transition ${
              mode === "departures"
                ? "bg-red-600 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            Departures
          </button>
          <button
            type="button"
            onClick={() => setMode("arrivals")}
            className={`rounded-lg px-4 py-3.5 text-sm font-medium transition ${
              mode === "arrivals"
                ? "bg-red-600 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            Arrivals
          </button>
        </div>
      </div>

      {!station && (
        <p className="mt-16 text-center text-sm text-zinc-500">
          Pick a station above to see its board.
        </p>
      )}

      {station && (
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between text-xs text-zinc-500">
            <span>
              {station.name} · {mode === "departures" ? "Departures" : "Arrivals"}
            </span>
            {lastUpdated && (
              <span>Updated {lastUpdated.toLocaleTimeString("en-GB")}</span>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-200">
            <div className="grid grid-cols-[70px_1fr_60px_1fr_110px] gap-2 bg-zinc-900 px-4 py-2.5 text-xs font-semibold uppercase text-zinc-300">
              <span>Time</span>
              <span>{mode === "departures" ? "Destination" : "From"}</span>
              <span>Plat.</span>
              <span>Operator</span>
              <span className="text-right">Status</span>
            </div>

            {board?.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-[70px_1fr_60px_1fr_110px] gap-2 border-t border-zinc-100 px-4 py-3 text-sm"
              >
                <span className="font-semibold">{row.scheduled}</span>
                <span>{row.destination}</span>
                <span className="text-zinc-500">{row.platform}</span>
                <span className="text-zinc-500">{row.operator}</span>
                <span className={`text-right font-medium ${statusColor[row.status]}`}>
                  {row.status === "Delayed" && row.expected
                    ? `Exp ${row.expected}`
                    : row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default LiveBoard;
