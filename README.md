# RailLine

A UK train booking and live train times web app, built to learn full-stack web development by making something real.

> **Heads up:** RailLine is a portfolio project. Journeys, fares and live boards are **generated sample data**, and no payments are taken. Don't use it to plan a real trip. For real times, use [National Rail](https://www.nationalrail.co.uk/).

## What it does

- **Search** journeys between stations, one-way or return (a two-step flow: pick your outbound, then your return)
- **Book** a ticket and keep it in your own account. Tickets are saved to a real database
- **My Tickets**: upcoming and past trips, with cancel
- **Live train times**: departure and arrival boards that refresh every 30 seconds, and remember your last station
- **Guides and help**: plain-English articles, a London terminals sketch, and a help centre
- Sign-up and sign-in with Clerk, phone-friendly layouts throughout

## Built with

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui (Radix) |
| Auth | [Clerk](https://clerk.com) |
| Database | [Neon](https://neon.tech) Postgres with [Drizzle ORM](https://orm.drizzle.team) |

## Getting started

You'll need Node.js, plus free accounts at [Clerk](https://clerk.com) and [Neon](https://neon.tech).

```bash
git clone https://github.com/AyanniyiHameed/Rail-Line-WebApp.git
cd Rail-Line-WebApp
npm install
```

Create your environment file and fill in your own keys (see [`.env.example`](.env.example)):

```bash
cp .env.example .env.local
```

Create the database tables, then start the app:

```bash
npx drizzle-kit push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk dashboard, API keys |
| `CLERK_SECRET_KEY` | Clerk dashboard, API keys |
| `DATABASE_URL` | Neon console, your project's connection string |

## Project layout

```
app/            pages and routes (search, book, my-tickets, live-times, guides, ...)
app/components/ shared UI
db/             Drizzle connection and the tickets table
lib/            mock train data, booking rules, stations, guides content
proxy.ts        Clerk middleware
```

A few design decisions worth knowing:

- **The server decides the price.** The booking page only receives *which* journey you picked. It re-runs the search and reads the price itself, so a URL can't be edited to change what you pay. Booking rules live in `lib/booking.ts`.
- **A return trip is two tickets**, one per direction, saved together in a single insert.
- **Past dates are rejected** in the date pickers, on the search page and in the booking rules.

## Roadmap

- Replace the sample live boards with real National Rail data (via the Rail Data Marketplace)
- A full UK station list
- Deploy to Vercel
- Payments (Stripe), possibly

## Licence

No licence has been chosen yet, so all rights are reserved by default.
