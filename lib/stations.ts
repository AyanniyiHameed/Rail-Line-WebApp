export type Station = {
  name: string;
  code: string; // National Rail CRS code, e.g. "EUS" for London Euston
};

export const stations: Station[] = [
  { name: "London Euston", code: "EUS" },
  { name: "London Bridge", code: "LBG" },
  { name: "London Victoria", code: "VIC" },
  { name: "Manchester Piccadilly", code: "MAN" },
  { name: "Birmingham New Street", code: "BHM" },
  { name: "Leeds", code: "LDS" },
  { name: "Brighton", code: "BTN" },
  { name: "Willesden Junction", code: "WIJ" },
];

export function stationNames(): string[] {
  return stations.map((station) => station.name);
}

export function findStationByName(name: string): Station | undefined {
  return stations.find(
    (station) => station.name.toLowerCase() === name.toLowerCase()
  );
}

export function findStationByCode(code: string): Station | undefined {
  return stations.find(
    (station) => station.code.toLowerCase() === code.toLowerCase()
  );
}
