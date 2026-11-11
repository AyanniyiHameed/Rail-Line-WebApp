export type Terminal = {
  name: string;
  label: string; // shorter text for the diagram
  goesTo: string;
  operators: string;
  // position on the diagram (a 640 x 440 canvas) and where the label sits
  x: number;
  y: number;
  anchor: "start" | "middle" | "end";
  dx: number;
  dy: number;
};

// Simplified and not to scale: this is a sketch of how London's main-line
// stations sit around the centre, not a surveyed map.
export const londonTerminals: Terminal[] = [
  {
    name: "London Paddington",
    label: "Paddington",
    goesTo: "The West Country, South Wales, Heathrow",
    operators: "Great Western Railway, Heathrow Express, Elizabeth line",
    x: 150, y: 205, anchor: "end", dx: -13, dy: 4,
  },
  {
    name: "London Marylebone",
    label: "Marylebone",
    goesTo: "Buckinghamshire, Oxfordshire, Birmingham",
    operators: "Chiltern Railways",
    x: 222, y: 168, anchor: "end", dx: -13, dy: 4,
  },
  {
    name: "London Euston",
    label: "Euston",
    goesTo: "The West Midlands, North West England, North Wales, Scotland",
    operators: "Avanti West Coast, London Northwestern Railway, Caledonian Sleeper",
    x: 285, y: 150, anchor: "middle", dx: 0, dy: -14,
  },
  {
    name: "King's Cross & St Pancras",
    label: "King's Cross & St Pancras",
    goesTo: "Yorkshire, the North East, Scotland, the East Midlands, Kent, Europe",
    operators: "LNER, Hull Trains, Lumo, East Midlands Railway, Thameslink, Eurostar",
    x: 352, y: 140, anchor: "start", dx: 13, dy: 4,
  },
  {
    name: "London Liverpool Street",
    label: "Liverpool Street",
    goesTo: "Essex, Suffolk, Norfolk, Stansted Airport",
    operators: "Greater Anglia, Elizabeth line",
    x: 445, y: 215, anchor: "start", dx: 13, dy: 4,
  },
  {
    name: "London Fenchurch Street",
    label: "Fenchurch Street",
    goesTo: "The Essex coast, including Southend",
    operators: "c2c",
    x: 468, y: 262, anchor: "start", dx: 13, dy: 4,
  },
  {
    name: "London Bridge",
    label: "London Bridge",
    goesTo: "Kent, Sussex and Surrey; Thameslink to Brighton and Cambridge",
    operators: "Southern, Southeastern, Thameslink",
    x: 430, y: 322, anchor: "start", dx: 13, dy: 16,
  },
  {
    name: "London Waterloo",
    label: "Waterloo",
    goesTo: "Surrey, Hampshire, Dorset and the South West",
    operators: "South Western Railway",
    x: 318, y: 322, anchor: "middle", dx: 0, dy: 24,
  },
  {
    name: "London Charing Cross",
    label: "Charing Cross",
    goesTo: "Kent and south-east London",
    operators: "Southeastern",
    x: 330, y: 278, anchor: "middle", dx: 0, dy: -13,
  },
  {
    name: "London Victoria",
    label: "Victoria",
    goesTo: "The Sussex coast, Gatwick Airport, Kent",
    operators: "Southern, Southeastern",
    x: 215, y: 270, anchor: "end", dx: -13, dy: 4,
  },
];
