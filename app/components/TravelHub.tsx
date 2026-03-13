import React from 'react'
import { Button } from "@/components/ui/button"

type Props = {}

const TravelHub = (props: Props) => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-10">
        <div className='bg-gray-800 px-8 py-10 rounded-lg mb-10'>
            <h1 className='mb-4 text-gray-50 font-bold text-3xl tracking-tight'>Travel Hub</h1>
            <p className='text-[13px] mb-5 text-white'>Stay ahead of your journey with real-time travel insights. 
            From delays to route changes, We keep you informed so you can move through 
            the network without surprises.</p>

            <div className='grid gap-10 grid-cols-3'>
                <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-red-600 p-8 backdrop-blur-lg transition hover:bg-white/10">
                    <h3 className='font-semibold text-white mb-3 text-center'>Service Updates</h3>
                    <hr />
                    <p className="mt-3 text-white text-sm leading-relaxed text-center">
                    Keep track of what’s happening across the network in real time. Check live departures and arrivals, 
                    spot delays early, and find alternative routes if your journey is disrupted.
                    </p> 
                    <div className='mt-2.5 flex justify-center'>
                        <Button className='bg-white font-bold w-2xs h-12 text-red-600' variant="outline">Check service updates →</Button>
                    </div>

                </div>

                <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-red-600 p-8 backdrop-blur-lg transition hover:bg-white/10">
                    <h3 className="font-semibold text-white mb-3 text-center">Engineering works</h3>
                    <hr />
                        <p className="mt-3 text-white text-sm leading-relaxed text-center">
                        Planned maintenance and upgrades can change how trains run. See upcoming engineering works, replacement services, 
                        and timetable adjustments so you can plan ahead.
                        </p>
                    <div className='mt-2.5 flex justify-center'>
                        <Button className='bg-white font-bold w-2xs h-12 text-red-600' variant="outline">View planned works →</Button>
                    </div>
                </div>

                <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-red-600 p-8 backdrop-blur-lg transition hover:bg-white/10">
                    <h3 className='font-semibold text-white mb-3 text-center'>Live Rail Map</h3>
                    <hr />
                        <p className="mt-3 text-white text-sm leading-relaxed text-center">
                        Get a real-time view of the network. Watch trains move across routes and see the status of services at a glance.
                        </p>
                    <div className='mt-auto flex justify-center'>
                        <Button className='bg-white font-bold w-2xs h-12 text-red-600' variant="outline">Open Live Map →</Button>
                     
                    </div>               
                </div>
            </div>


        </div>

    </section>
  )
}

export default TravelHub