// Today's date in UK time as "YYYY-MM-DD" (the same format <input type="date"> uses)
export function todayUK() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Europe/London" });
}
