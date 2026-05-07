import React from 'react'

type Props = {}

const Values = (props: Props) => {
  return (
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 bg-gray-200">
        {/* why choose railline section */}
        <div className="mb-6 py-8 text-gray-900 text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">Why choose RailLine?</h2>
            <p className="text-[16px] text-gray-700 max-w-2xl mx-auto">Explore thousands of destinations and uncover hidden gems with fast, 
            frequent connections designed to keep you moving.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* wallet */}
          <div className="group rounded-2xl border border-black/5 bg-gray-200 p-8 backdrop-blur-lg transition hover:bg-white/10">          {/* wallet */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/20">          
              <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
              <path d="M3.25 7.75V19C3.25 20.2426 4.25736 21.25 5.5 21.25H18.5C19.7426 21.25 20.75 20.2426 20.75 19V10C20.75 8.75736 19.7426 7.75 18.5 7.75H3.25Z" fill="#cd2352"/>
              <path opacity="0.4" d="M3.25 6C3.25 4.75736 4.25736 3.75 5.5 3.75H16C17.2426 3.75 18.25 4.75736 18.25 6V6.75H3.25V6Z" fill="#cd2352"/>
              </svg>
            </div>  
            <h4 className="text-lg font-semibold text-gray-900">Light on the pocket</h4> 
            <div className="mt-3 h-px w-10 bg-red-500"></div>
            <p className="mt-4 text-black text-[13px] leading-relaxed">
              Stop overpaying for your commute with our direct-rate tickets.
              We’ve cut out the middleman fees and hidden costs, 
              so the price you see is always the best one we’ve got.
            </p>
            </div>

            {/* green leaf */}
            <div className="group rounded-2xl border border-black/5 bg-gray-200 p-8 backdrop-blur-lg transition hover:bg-white/10">          
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                <path clipRule="evenodd" clip-rule="evenodd" d="M3.25 2.75C3.25 2.33579 3.58579 2 4 2H6.5C8.87635 2 10.9429 3.32622 12 5.27888C13.0571 3.32622 15.1237 2 17.5 2H20C20.4142 2 20.75 2.33579 20.75 2.75V5.25C20.75 8.70178 17.9518 11.5 14.5 11.5H12.75H11.25H9.5C6.04822 11.5 3.25 8.70178 3.25 5.25V2.75Z" fill="#50cd23"/>
                <path opacity="0.4" d="M11.25 11.5L11.25 21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25L12.75 11.5H11.25Z" fill="#50cd23"/>
                </svg>

              </div>
              <h3 className="text-lg font-semibold text-gray-900">Green by design</h3>
              <div className="mt-3 h-px w-10 bg-green-500"></div>
              <p className="mt-4 text-black text-[13px] leading-relaxed">
                Ditch the traffic and the carbon footprint in one tap.
                By choosing rail through our platform, you’re backing a cleaner way to move without the stress of a steering wheel.
              </p>

            </div>


          {/* time */}
          <div className="group rounded-2xl border border-black/5 bg-gray-200 p-8 backdrop-blur-lg transition hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
              <path opacity="0.4" d="M5.25 4.75V6.00002C5.25 8.61221 6.73382 10.8778 8.90458 12C6.73382 13.1222 5.25 15.3878 5.25 18L5.25 19.25L18.75 19.25V18C18.75 15.3878 17.2662 13.1222 15.0954 12C17.2662 10.8778 18.75 8.61221 18.75 6.00002V4.75H5.25Z" fill="#2387cd"/>
              <path d="M4 3.25C3.58579 3.25 3.25 3.58579 3.25 4C3.25 4.41421 3.58579 4.75 4 4.75H5.25H18.75H20C20.4142 4.75 20.75 4.41421 20.75 4C20.75 3.58579 20.4142 3.25 20 3.25H4Z" fill="#2387cd"/>
              <path d="M5.25 19.25H4C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75L20 20.75C20.4142 20.75 20.75 20.4142 20.75 20C20.75 19.5858 20.4142 19.25 20 19.25H18.75L5.25 19.25Z" fill="#2387cd"/>
              </svg>     
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              Built for the hustle
            </h3>

            <div className="mt-3 h-px w-10 bg-blue-500"></div>

            <p className="mt-4 text-black text-[13px] leading-relaxed">
              Forget the ticket machine queues. We deliver your pass straight to your phone the second you buy it,
              so you can spend less time checking the boards and more time on what matters.
            </p>

          </div>

        </div>

    </section>
  )
}

export default Values