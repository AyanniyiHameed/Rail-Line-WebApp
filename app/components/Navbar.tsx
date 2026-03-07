import React from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-15 ">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className='text-zinc-200 font-bold'>Rail</span><span className="text-red-600">Line</span>
        </Link> 

        {/* <form
          // onSubmit={handleSearch}
          className="hidden md:flex w-full max-w-md items-center gap-2 rounded-xl border bg-gray-50 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500"
        >
          <Input className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search stations or routes..."
            className="w-full bg-transparent text-sm outline-none"
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
          />
        </form> */}

        <Input 
          className='px-3 py-2 outline-none
            w-96
            bg-white/10
            text-white
            placeholder:text-zinc-300
            border border-white/20
            focus:border-white
            focus:ring-0
            backdrop-blur-md'
          type='text'
          placeholder="Search stations or routes..."
        
        />

         {/* Right: Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/my-tickets"
            className="text-zinc-300 transition hover:text-zinc-50 font-bold"
          >
            My Tickets
          </Link>

          <Link
            href="/live-times"
            className="text-zinc-300 transition hover:text-zinc-50 font-bold"
          >
            Live Train Times
          </Link>

          <Link
            href="/account"
            className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
          >
            Account
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar