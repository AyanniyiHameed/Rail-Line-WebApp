import { searchJourneys } from "./journeys";

export type BookingParams = {
  from?: string;
  to?: string;
  date?: string;
  journey?: string;
  passengers?: string;
};

// Turns untrusted input (URL / form) into a real, checked booking, or null
export function resolveBooking(params: BookingParams) {
  const { from, to, date, journey: journeyId } = params;

  if (!from || !to || !date || !journeyId) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;

  const journey = searchJourneys(from, to, date).find((j) => j.id === journeyId);
  if (!journey) return null;

  const passengers = Math.min(9, Math.max(1, Math.floor(Number(params.passengers) || 1)));

  return { from, to, date, journey, passengers, total: journey.price * passengers };
}
