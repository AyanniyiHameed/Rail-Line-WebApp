import React from 'react'
import { Input } from '@/components/ui/input'

type Props = {}

const NewsLetter = (props: Props) => {
  return (
    <section className='bg-gray-100'>
        <div className='text-center p-15'>
            <h2 className='text-4xl font-semibold mb-5 tracking-tight'>Stay up-to-Date... Get our free NewsLetter</h2>
            <p className='text-black max-w-2xl mx-auto mb-5 text-[15px]'>Subscribe and Get real-time travel updates, service alerts, and exclusive fare deals straight to your inbox.</p>

            <div>
                <Input className='md:w-120 h-12 text-black-300 border-black focus:border-white' 
                placeholder='Enter a valid Email address...'/>
            </div>
            <p className='text-gray-500 text-[11px] mt-3 mb-5 mx-auto max-w-87'>*You are subscribing to email updates. your data is safe and you can unsubscribe at anytime with a single click</p>
            <button className='rounded-lg mt-5 text-white text-[14px] bg-gray-900 px-10 py-3 hover:bg-gray-700 cursor-pointer'>Sign me up</button>
        </div>
    </section>
  )
}

export default NewsLetter