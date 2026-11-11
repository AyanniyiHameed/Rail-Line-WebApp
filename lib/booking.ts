import { todayUK } from "./dates";
import { searchJourneys, type Journey } from "./journeys";

export type BookingParams = {
  from?: string;
  to?: string;
  date?: string;
  journey?: string;
  passengers?: string;
  returnDate?: string;
  returnJourney?: string;
};

// One direction of travel. A return trip is two legs.
export type Leg = {
  from: string;
  to: string;
  date: string;
  journey: Journey;
};

const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;

export function findJourney(from: string, to: string, date: string, id: string) {
  return searchJourneys(from, to, date).find((j) => j.id === id);
}

// Turns untrusted input (URL / form) into a real, checked booking, or null
export function resolveBooking(params: BookingParams) {
  const { from, to, date, journey: journeyId, returnDate, returnJourney } = params;

  if (!from || !to || !date || !journeyId) return null;
  if (!DATE_FORMAT.test(date) || date < todayUK()) return null;

  const outbound = findJourney(from, to, date, journeyId);
  if (!outbound) return null;

  const legs: Leg[] = [{ from, to, date, journey: outbound }];

  // Return trip: both fields must be there, and the return is the outbound reversed
  if (returnDate || returnJourney) {
    if (!returnDate || !returnJourney || !DATE_FORMAT.test(returnDate)) return null;
    if (returnDate < date) return null;

    const back = findJourney(to, from, returnDate, returnJourney);
    if (!back) return null;

    // Same-day return: you can't leave before you've arrived
    if (returnDate === date && back.departTime <= outbound.arriveTime) return null;

    legs.push({ from: to, to: from, date: returnDate, journey: back });
  }

  const passengers = Math.min(9, Math.max(1, Math.floor(Number(params.passengers) || 1)));
  const perPerson = legs.reduce((sum, leg) => sum + leg.journey.price, 0);

  return { legs, passengers, total: perPerson * passengers };
}
