// Deterministic pseudo-random generator so the same inputs always produce
// the same mock data (a real API would do this naturally; ours needs to
// fake it, otherwise refreshing the page would shuffle every result).
export function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

// Turns any string into a stable number, so it can be used as a seed.
export function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % 100000;
  }
  return hash || 1;
}

export function formatTime(hour: number, minute: number) {
  const h = ((hour % 24) + 24) % 24;
  return `${String(h).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export function addMinutes(hour: number, minute: number, add: number) {
  const total = hour * 60 + minute + add;
  return { hour: Math.floor(total / 60) % 24, minute: total % 60 };
}
