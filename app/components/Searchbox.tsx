'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { stationNames } from "@/lib/stations";

const stations = stationNames();


const Searchbox = () => {
  const router = useRouter();
  
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  
  const [isReturn, setIsReturn] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  
  // station filtering and autocomplete
  const [filteredFrom, setFilteredFrom] = useState<string[]>([]);
  const [filteredTo, setFilteredTo] = useState<string[]>([]);
  const [activeInput, setActiveInput] = useState<"from" | "to" | null>(null);

  // Swap
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  //Passenger logic
  const increasePassengers = () => {
    setPassengers((prev) => prev + 1);
  };

  const decreasePassengers = () => {
    setPassengers((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleSearch = () => {
    if (!from || !to || !date) return;

    let url = `/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}&passengers=${passengers}`;

    if (isReturn && returnDate) {
      url += `&returnDate=${encodeURIComponent(returnDate)}`;
    }

    router.push(url);
  };

  // filtering logic
  const handleSearchStations = (value: string, type: "from" | "to") => {
  const results = stations.filter((station) =>
    station.toLowerCase().includes(value.toLowerCase())
  );

  if (type === "from") {
    setFilteredFrom(results);
    setActiveInput("from");
  } else {
    setFilteredTo(results);
    setActiveInput("to");
  }
};                                                                      




return (
  <div id="search" className="relative mx-auto z-50 -mt-38 max-w-6xl rounded-2xl bg-white p-6 shadow-md">

    {/* TOP ROW */}
    <div className="grid gap-4 md:grid-cols-6 items-center">

      {/* FROM + SWAP + TO */}
      <div className="relative md:col-span-3">
        <div className="flex items-center border rounded-lg overflow-hidden">

          <input
            type="text"
            placeholder="Departure"
            value={from}
            onChange={(e) => {setFrom(e.target.value)
             handleSearchStations(e.target.value, "from") }}
            onFocus={() => setActiveInput("from")}
            className="w-full p-3 text-sm outline-none"
          />

          {/* Swap */}
          <button
            onClick={handleSwap}
            className="px-3 text-lg text-gray-500 hover:text-black hover:bg-gray-100 transition"
          >
            ⇄
          </button>

          {/* TO */}
          <input
            type="text"
            placeholder="Arrival"
            value={to}
            onChange={(e) => {
            setTo(e.target.value);
            handleSearchStations(e.target.value, "to");
            }}
            className="w-full p-3 text-sm outline-none"
          />
        </div>

        {/* Dropdown for FROM */}
        {activeInput === "from" && filteredFrom.length > 0 && (
          <div className="absolute left-0 top-full w-1/2 bg-white border rounded-lg shadow-lg z-50 mt-1 max-h-48 overflow-y-auto">
            {filteredFrom.map((station, index) => (
              <div
                key={index}
                onClick={() => {
                  setFrom(station);
                  setFilteredFrom([]);
                  setActiveInput(null);
                }}
                className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
              >
                {station}
              </div>
            ))}
          </div>
        )}

        {/* Dropdown for TO */}
        {activeInput === "to" && filteredTo.length > 0 && (
          <div className="absolute right-0 top-full w-1/2 bg-white border rounded-lg shadow-lg z-50 mt-1 max-h-48 overflow-y-auto">
            {filteredTo.map((station, index) => (
              <div
                key={index}
                onClick={() => {
                  setTo(station);
                  setFilteredTo([]);
                  setActiveInput(null);
                }}
                className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
              >
                {station}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DATE */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="rounded-lg border p-3 text-sm md:col-span-2"
      />

      {/* SEARCH */}
      <button
        onClick={handleSearch}
        className="rounded-lg bg-red-600 text-white font-semibold cursor-pointer hover:bg-red-700 transition h-full"
      >
        Search
      </button>
    </div>

    {/* BOTTOM ROW */}
    <div className="mt-4 flex flex-wrap items-center gap-6">

      {/* RETURN */}
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={isReturn}
          onChange={() => setIsReturn(!isReturn)}
        />
        Add return trip
      </label>

      {isReturn && (
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="rounded-lg border p-2 text-sm"
        />
      )}

      {/* PASSENGERS */}
      <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
        <button onClick={decreasePassengers}>−</button>
        <span className="text-sm">{passengers} Adult</span>
        <button onClick={increasePassengers}>+</button>
      </div>

    </div>
  </div>
);
};

export default Searchbox;