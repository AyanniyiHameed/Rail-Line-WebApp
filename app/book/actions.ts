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

  await db.insert(tickets).values({
    userId,
    fromStation: booking.from,
    toStation: booking.to,
    travelDate: booking.date,
    departTime: booking.journey.departTime,
    arriveTime: booking.journey.arriveTime,
    operator: booking.journey.operator,
    passengers: booking.passengers,
    price: booking.total,
  });

  redirect("/my-tickets");
}
