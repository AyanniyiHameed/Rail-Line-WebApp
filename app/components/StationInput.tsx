'use client'

import { useState } from "react";
import { stationNames } from "@/lib/stations";

const stations = stationNames();

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const StationInput = ({ label, placeholder, value, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  const matches = stations.filter((station) =>
    station.toLowerCase().includes(value.toLowerCase())
  );
  const showList =
    open && matches.length > 0 && !(matches.length === 1 && matches[0] === value);

  return (
    <div className="relative">
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-base outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
      />

      {showList && (
        <ul className="absolute left-0 right-0 top-full z-10 mt-1 max-h-52 overflow-y-auto rounded-xl border border-zinc-200 bg-white py-1 shadow-xl">
          {matches.map((station) => (
            <li
              key={station}
              onMouseDown={(e) => {
                e.preventDefault();
                onChange(station);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2.5 text-sm hover:bg-red-50 hover:text-red-700"
            >
              {station}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StationInput;
