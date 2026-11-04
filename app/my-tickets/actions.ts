"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { tickets } from "@/db/schema";

export async function cancelTicket(formData: FormData) {
  const { isAuthenticated, userId, redirectToSignIn } = await auth();
  if (!isAuthenticated) return redirectToSignIn();

  const ticketId = Number(formData.get("ticketId"));
  if (!Number.isInteger(ticketId)) throw new Error("Invalid ticket");

  // The userId check is what stops you cancelling someone else's ticket
  await db
    .update(tickets)
    .set({ status: "cancelled" })
    .where(
      and(
        eq(tickets.id, ticketId),
        eq(tickets.userId, userId),
        eq(tickets.status, "confirmed"),
      ),
    );

  revalidatePath("/my-tickets");
}
