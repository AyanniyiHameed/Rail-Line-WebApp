"use server";

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { tickets } from "@/db/schema";
import { resolveBooking, type BookingParams } from "@/lib/booking";

export async function confirmBooking(formData: FormData) {
  const { isAuthenticated, userId, redirectToSignIn } = await auth();
  if (!isAuthenticated) return redirectToSignIn();

  const booking = resolveBooking(Object.fromEntries(formData) as BookingParams);
  if (!booking) throw new Error("Invalid booking");

  // One ticket per leg. A single insert statement, so both save or neither does.
  await db.insert(tickets).values(
    booking.legs.map((leg) => ({
      userId,
      fromStation: leg.from,
      toStation: leg.to,
      travelDate: leg.date,
      departTime: leg.journey.departTime,
      arriveTime: leg.journey.arriveTime,
      operator: leg.journey.operator,
      passengers: booking.passengers,
      price: leg.journey.price * booking.passengers,
    })),
  );

  redirect("/my-tickets");
}
