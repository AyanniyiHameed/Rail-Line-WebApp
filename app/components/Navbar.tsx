'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavSearch from './NavSearch'

type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`w-full top-0 left-0 z-50 ${
        isHome ? "absolute" : "sticky bg-zinc-900"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-15 ">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className='text-zinc-200 font-bold'>Rail</span><span className="text-red-600">Line</span>
        </Link>

        <div className="hidden w-96 md:block">
          <NavSearch />
        </div>

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