import { pgTable, integer, text, date, timestamp } from "drizzle-orm/pg-core";

export const tickets = pgTable("tickets", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  // Who owns it: Clerk's user id, e.g. "user_2abc..." (text, not a number)
  userId: text("user_id").notNull(),

  // The journey, copied at booking time
  fromStation: text("from_station").notNull(),
  toStation: text("to_station").notNull(),
  travelDate: date("travel_date").notNull(),
  departTime: text("depart_time").notNull(),
  arriveTime: text("arrive_time").notNull(),
  operator: text("operator").notNull(),

  // The booking
  passengers: integer("passengers").notNull().default(1),
  price: integer("price").notNull(), // total in whole pounds, like Journey.price
  status: text("status").notNull().default("confirmed"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// The shape of a row read back from the table
export type Ticket = typeof tickets.$inferSelect;
