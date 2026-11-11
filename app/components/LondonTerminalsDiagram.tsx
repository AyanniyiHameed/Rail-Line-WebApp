import { londonTerminals } from "@/lib/london-terminals";

const LondonTerminalsDiagram = () => {
  return (
    // The wrapper scrolls sideways on small screens so the labels stay readable
    <div className="overflow-x-auto rounded-xl border bg-zinc-50">
      <svg
        viewBox="0 0 640 440"
        role="img"
        aria-label="Simplified sketch showing where London's main-line terminal stations sit around the centre of the city, with the River Thames running through the middle"
        className="h-auto min-w-[640px] w-full"
      >
        {/* Central London */}
        <ellipse cx="320" cy="235" rx="210" ry="150" className="fill-white stroke-zinc-200" strokeDasharray="5 5" />
        <text x="320" y="82" textAnchor="middle" className="fill-zinc-400" fontSize="12">
          Central London
        </text>

        {/* River Thames */}
        <path
          d="M0 300 C90 270 150 285 215 300 S330 300 385 285 S470 290 560 330 L640 350"
          fill="none"
          className="stroke-sky-300"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.55"
        />
        <text x="70" y="322" className="fill-sky-600" fontSize="12" fontStyle="italic">
          River Thames
        </text>

        {/* Stations */}
        {londonTerminals.map((t) => (
          <g key={t.name}>
            <circle cx={t.x} cy={t.y} r="7" className="fill-red-600 stroke-white" strokeWidth="2.5" />
            <text
              x={t.x + t.dx}
              y={t.y + t.dy}
              textAnchor={t.anchor}
              className="fill-zinc-800"
              fontSize="14"
              fontWeight="600"
            >
              {t.label}
            </text>
          </g>
        ))}

        <text x="320" y="425" textAnchor="middle" className="fill-zinc-400" fontSize="11">
          Simplified sketch. Not to scale.
        </text>
      </svg>
    </div>
  );
};

export default LondonTerminalsDiagram;
