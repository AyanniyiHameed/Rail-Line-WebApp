import { seededRandom, hashString, formatTime, addMinutes } from "./mock-utils";
import { OPERATORS } from "./operators";
import { stations } from "./stations";

export type BoardMode = "departures" | "arrivals";
export type DepartureStatus = "On time" | "Delayed" | "Cancelled";

export type Departure = {
  id: string;
  scheduled: string;
  destination: string;
  platform: string;
  operator: string;
  status: DepartureStatus;
  expected?: string;
};

// Groups "now" into 2-minute windows. The board should feel live, but two
// refreshes ten seconds apart shouldn't reshuffle every row - only enough
// real time passing should change anything.
function timeBucket(): number {
  const now = new Date();
  return Math.floor((now.getHours() * 60 + now.getMinutes()) / 2);
}

export function getDepartureBoard(
  stationCode: string,
  mode: BoardMode
): Departure[] {
  const seed = hashString(`${stationCode}-${mode}-${timeBucket()}`);
  const rand = seededRandom(seed);
  const now = new Date();

  const otherStations = stations.filter((s) => s.code !== stationCode);
  const board: Departure[] = [];

  let hour = now.getHours();
  let minute = now.getMinutes();

  const count = 8 + Math.floor(rand() * 3); // 8-10 rows

  for (let i = 0; i < count; i++) {
    minute += 3 + Math.floor(rand() * 9); // next train in 3-11 mins
    while (minute >= 60) {
      minute -= 60;
      hour += 1;
    }

    const roll = rand();
    let status: DepartureStatus = "On time";
    let expected: string | undefined;

    if (roll > 0.95) {
      status = "Cancelled";
    } else if (roll > 0.8) {
      status = "Delayed";
      const delay = addMinutes(hour, minute, 5 + Math.floor(rand() * 15));
      expected = formatTime(delay.hour, delay.minute);
    }

    const other = otherStations[Math.floor(rand() * otherStations.length)];

    board.push({
      id: `${stationCode}-${mode}-${i}`,
      scheduled: formatTime(hour, minute),
      destination: other.name,
      platform: String(1 + Math.floor(rand() * 12)),
      operator: OPERATORS[Math.floor(rand() * OPERATORS.length)],
      status,
      expected,
    });
  }

  return board;
}
