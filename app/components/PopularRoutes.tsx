import React from 'react'
import Image from 'next/image';

type Props = {}

const PopularRoutes = (props: Props) => {
    const routes = [
  {
    from: "London",
    to: "Manchester",
    duration: "2h 08m",
    price: "£32",
    image: "/images/manchesterPic.jpg"
  },
  {
    from: "London",
    to: "Brighton",
    duration: "1h 03m",
    price: "£12",
    image: "/images/BrightonPic.jpg"

  },
  {
    from: "London",
    to: "Birmingham",
    duration: "1h 21m",
    price: "£18",
    image: "/images/birminghamPic.jpg"
  },
  {
    from: "London",
    to: "Leeds",
    duration: "2h 15m",
    price: "£28",
    image: "/images/leedsPic.jpg"

  },
];
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-10 py-20 text-white">
      
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl text-gray-900 font-semibold tracking-tight">
          Popular Routes
        </h2>
        <p className="mt-2 text-zinc-600 text-[17px]">
          Explore some of the most travelled journeys across the UK.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {routes.map((route) => (
        <div
            key={`${route.from}-${route.to}`}
            className="group relative h-56 overflow-hidden rounded-xl border border-white/10 bg-white/6 transition cursor-pointer hover:-translate-y-1"
            >
            {/* Image */}
            <Image
                src={route.image}
                alt={`${route.from} - ${route.to}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
                
                {/* Top content */}
                <div>
                <h3 className="text-lg font-semibold">
                    {route.from} → {route.to}
                </h3>

                <p className="mt-1 text-sm text-zinc-300">
                    {route.duration}
                </p>

                <p className="mt-2 text-green-400 font-medium">
                    from {route.price}
                </p>
                </div>

                <div className="text-sm text-white group-hover:text-red-300">
                View journey →
                </div>

            </div>
        </div>
            // <div
            //     key={`${route.from}-${route.to}`}
            //     className="group relative cursor-pointer rounded-2xl h-56 border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:-translate-y-1">
            //     <Image
            //         src={route.image}
            //         alt= {`${route.from} - ${route.to}`}
            //         fill
            //         className="object-cover"
            //     />
            //     {/* Overlay */}
            //     <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"/>

            //     {/* Route */}
            //     <div className="relative z-10 flex h-full flex-col p-6 justify-between">
            //         <h3 className="text-lg font-semibold">
            //             {route.from} → {route.to}
            //         </h3>

            //         <span className="text-sm text-green-400 font-medium">
            //             from {route.price}
            //         </span>

            //         <p className="relative mb-8 text-sm text-white font-bold">
            //         {route.duration}
            //         </p>

            //         <div className=" text-sm  text-red-400 group-hover:text-red-300">
            //         View journey →
            //         </div>
            //     </div>


            // </div>
            
        ))}
      </div>


      
    </section>
  );
};

export default PopularRoutes