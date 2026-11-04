import type { Ticket } from "@/db/schema";
import { cancelTicket } from "../my-tickets/actions";
import SubmitButton from "./SubmitButton";

type Props = {
  ticket: Ticket;
  canCancel?: boolean;
};

const TicketCard = ({ ticket, canCancel = false }: Props) => {
  const cancelled = ticket.status === "cancelled";

  return (
    <li className={`rounded-xl border p-5 ${cancelled ? "opacity-60" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold">
            {ticket.fromStation} → {ticket.toStation}
          </p>
          <p className="mt-1 text-sm text-zinc-600">
            {new Date(ticket.travelDate).toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
            {" · "}
            {ticket.departTime} → {ticket.arriveTime}
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            {ticket.operator} · {ticket.passengers}{" "}
            {ticket.passengers === 1 ? "passenger" : "passengers"}
          </p>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold text-red-600">£{ticket.price}</p>
          <p
            className={`mt-1 text-xs capitalize ${
              cancelled ? "text-red-600" : "text-green-600"
            }`}
          >
            {ticket.status}
          </p>
        </div>
      </div>

      {canCancel && (
        <form action={cancelTicket} className="mt-4 border-t pt-4">
          <input type="hidden" name="ticketId" value={ticket.id} />
          <SubmitButton
            variant="outline"
            size="sm"
            pendingText="Cancelling..."
            confirmMessage="Cancel this ticket?"
          >
            Cancel ticket
          </SubmitButton>
        </form>
      )}
    </li>
  );
};

export default TicketCard;
