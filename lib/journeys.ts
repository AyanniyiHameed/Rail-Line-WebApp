export type Journey = {
  id: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  changes: number;
  operator: string;
  price: number;
};

const OPERATORS = [
  "Avanti West Coast",
  "LNER",
  "CrossCountry",
  "Southern",
  "Great Western Railway",
];

// Deterministic pseudo-random generator so the same route/date always
// returns the same journeys (a real API would do this naturally; ours needs
// to fake it, otherwise refreshing the page would shuffle every result).
function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function hashRoute(from: string, to: string, date: string) {
  const str = `${from}-${to}-${date}`.toLowerCase();
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % 100000;
  }
  return hash || 1;
}
// to turn all the string into a numeric value so that seed can give us the same
// random fake trains everytime for that same value for what is typed in

function formatTime(hour: number, minute: number) {
  const h = ((hour % 24) + 24) % 24;
  return `${String(h).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function addMinutes(hour: number, minute: number, add: number) {
  const total = hour * 60 + minute + add;
  return { hour: Math.floor(total / 60) % 24, minute: total % 60 };
}

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${String(m).padStart(2, "0")}m` : `${m}m`;
}

export function searchJourneys(from: string, to: string, date: string): Journey[] {
  const rand = seededRandom(hashRoute(from, to, date));

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
