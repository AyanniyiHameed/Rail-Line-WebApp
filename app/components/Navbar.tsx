'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Show, SignInButton, UserButton } from '@clerk/nextjs'
import NavSearch from './NavSearch'

const linkClass = "text-zinc-300 transition hover:text-zinc-50 font-bold"
const signInClass =
  "cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`w-full top-0 left-0 z-50 ${
        isHome ? "absolute" : "sticky bg-zinc-900"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 xl:px-15">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className='text-zinc-200 font-bold'>Rail</span><span className="text-red-600">Line</span>
        </Link>

        {/* Desktop: search + links */}
        <div className="hidden w-64 lg:block xl:w-96">
          <NavSearch />
        </div>

        <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <Show when="signed-in">
            <Link href="/my-tickets" className={linkClass}>
              My Tickets
            </Link>
          </Show>

          <Link href="/live-times" className={linkClass}>
            Live Train Times
          </Link>

          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className={signInClass}>Sign in</button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <Link
              href="/account"
              className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
            >
              Account
            </Link>
            <UserButton />
          </Show>
        </div>

        {/* Mobile: avatar + hamburger */}
        <div className="flex items-center gap-4 lg:hidden">
          <Show when="signed-in">
            <UserButton />
          </Show>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="cursor-pointer rounded-lg p-2 text-zinc-200 transition hover:bg-white/10"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-16 flex flex-col gap-5 bg-zinc-900 px-4 pb-6 pt-2 text-sm font-medium shadow-lg sm:px-6 lg:hidden">
          <NavSearch />

          <Show when="signed-in">
            <Link href="/my-tickets" className={linkClass}>
              My Tickets
            </Link>
          </Show>

          <Link href="/live-times" className={linkClass}>
            Live Train Times
          </Link>

          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className={`${signInClass} w-full`}>Sign in</button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <Link
              href="/account"
              className="rounded-lg bg-red-600 px-4 py-2 text-center text-white transition hover:bg-red-700"
            >
              Account
            </Link>
          </Show>
        </div>
      )}
    </nav>
  )
}

export default Navbar
