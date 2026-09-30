'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog } from "radix-ui";
import { ArrowUpDown, Minus, Plus, X } from "lucide-react";
import StationInput from "./StationInput";

const FindTrainModal = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [isReturn, setIsReturn] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const canSearch = from && to && date;

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    if (!canSearch) return;

    let url = `/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}&passengers=${passengers}`;
    if (isReturn && returnDate) {
      url += `&returnDate=${encodeURIComponent(returnDate)}`;
    }

    setOpen(false);
    router.push(url);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="mt-8 cursor-pointer rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700">
        Find Your Train
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-2xl duration-200 outline-none sm:p-10 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-90 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
          <Dialog.Close
            aria-label="Close"
            className="absolute right-5 top-5 cursor-pointer rounded-full p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
          >
            <X className="size-5" />
          </Dialog.Close>

          <Dialog.Title className="text-3xl font-semibold tracking-tight text-zinc-900">
            Where to?
          </Dialog.Title>
          <Dialog.Description className="mt-1 text-sm text-zinc-500">
            Search UK train times and tickets in seconds.
          </Dialog.Description>

          <div className="mt-8 grid items-end gap-3 md:grid-cols-[1fr_auto_1fr]">
            <StationInput
              label="From"
              placeholder="Departure station"
              value={from}
              onChange={setFrom}
            />
            <button
              type="button"
              onClick={handleSwap}
              aria-label="Swap stations"
              className="mx-auto flex size-12 cursor-pointer items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:border-red-500 hover:text-red-600"
            >
              <ArrowUpDown className="size-4 md:rotate-90" />
            </button>
            <StationInput
              label="To"
              placeholder="Arrival station"
              value={to}
              onChange={setTo}
            />
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Depart
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-base outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Passengers
              </label>
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
                <button
                  type="button"
                  onClick={() => setPassengers((p) => Math.max(1, p - 1))}
                  aria-label="Remove a passenger"
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full text-zinc-600 transition hover:bg-zinc-200"
                >
                  <Minus className="size-4" />
                </button>
                <span className="text-base">
                  {passengers} {passengers === 1 ? "Adult" : "Adults"}
                </span>
                <button
                  type="button"
                  onClick={() => setPassengers((p) => p + 1)}
                  aria-label="Add a passenger"
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full text-zinc-600 transition hover:bg-zinc-200"
                >
                  <Plus className="size-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="flex w-fit cursor-pointer items-center gap-2.5 text-sm text-zinc-700">
              <input
                type="checkbox"
                checked={isReturn}
                onChange={() => setIsReturn(!isReturn)}
                className="size-4 accent-red-600"
              />
              Add a return trip
            </label>

            {isReturn && (
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="mt-3 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-base outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 sm:w-1/2"
              />
            )}
          </div>

          <button
            type="button"
            onClick={handleSearch}
            disabled={!canSearch}
            className="mt-8 w-full cursor-pointer rounded-xl bg-red-600 py-4 text-base font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-red-600"
          >
            Search trains
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FindTrainModal;
