'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { findStationByName } from "@/lib/stations";
import StationInput from "./StationInput";

const NavSearch = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleChange = (name: string) => {
    setValue(name);

    // onChange fires on every keystroke too, so this only matches once the
    // text is an exact station name - i.e. once the user picks a suggestion.
    const station = findStationByName(name);
    if (station) {
      router.push(`/live-times?station=${station.code}`);
      setValue("");
    }
  };

  return (
    <StationInput
      placeholder="Search stations or routes..."
      value={value}
      onChange={handleChange}
      variant="dark"
    />
  );
};

export default NavSearch;
