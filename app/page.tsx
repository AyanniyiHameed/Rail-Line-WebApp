import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/heroPic.jpg"
        alt="Trains on the platform"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Travel Smarter Across the UK
        </h1>

        <p className="mt-4 max-w-xl text-lg text-gray-200">
          Real-time journeys. Simple booking. No chaos.
        </p>

        {/* CTA Button (later this scrolls or routes to /search) */}
        <a
          href="/search"
          className="mt-8 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium transition hover:bg-gray-700"
        >
          Find Your Train
        </a>
      </div>
      
    
      </section>
  );
}
