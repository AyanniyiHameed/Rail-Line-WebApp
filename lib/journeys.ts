import { seededRandom, hashString, formatTime, addMinutes } from "./mock-utils";
import { OPERATORS } from "./operators";

export type Journey = {
  id: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  changes: number;
  operator: string;
  price: number;
};

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${String(m).padStart(2, "0")}m` : `${m}m`;
}

export function searchJourneys(from: string, to: string, date: string): Journey[] {
  const rand = seededRandom(hashString(`${from}-${to}-${date}`.toLowerCase()));

  const count = 5 + Math.floor(rand() * 3); // 5-7 results
  const journeys: Journey[] = [];

  let hour = 5 + Math.floor(rand() * 3); // first train between 05:00-08:00

  for (let i = 0; i < count; i++) {
    hour += 1 + Math.floor(rand() * 2);
    if (hour > 22) hour = 22;
    const minute = Math.floor(rand() * 60);

    const durationMinutes = 45 + Math.floor(rand() * 150);
    const arrive = addMinutes(hour, minute, durationMinutes);

    journeys.push({
      id: `${from}-${to}-${i}`,
      departTime: formatTime(hour, minute),
      arriveTime: formatTime(arrive.hour, arrive.minute),
      duration: formatDuration(durationMinutes),
      changes: rand() > 0.7 ? 1 : 0,
      operator: OPERATORS[Math.floor(rand() * OPERATORS.length)],
      price: Math.round(10 + rand() * 90),
    });
  }

  return journeys.sort((a, b) => a.departTime.localeCompare(b.departTime));
}
