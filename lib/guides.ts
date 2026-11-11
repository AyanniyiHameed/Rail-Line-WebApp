export type Guide = {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "read-a-departure-board",
    title: "How to read a live departure board",
    summary:
      "Times, platforms, 'Exp' and 'Cancelled': what every column on a station board is telling you.",
    readTime: "3 min read",
    sections: [
      {
        heading: "The columns, left to right",
        body: [
          "A departure board is a list of the next trains leaving a station, soonest first. Each row has the same few pieces of information, and once you know them you can read any board in the country.",
          "The first column is the scheduled time: when the train is supposed to leave according to the timetable. Next comes the destination, which is where the train is going to finish, not necessarily where you are going. Your station might be one of the stops along the way.",
          "Then there's the platform, and then the status. On RailLine's Live Train Times page you'll also see the operator, which is the company running that train.",
        ],
      },
      {
        heading: "What the status means",
        body: [
          "'On time' means exactly that. 'Delayed' usually comes with an expected time, shown as 'Exp' followed by a clock time. That's the new time the train is now predicted to leave, and it can change again, so keep an eye on it.",
          "'Cancelled' means the train isn't running at all. When that happens, look at the next row going to the same place, and check the operator's rules for using a later train on your ticket.",
        ],
      },
      {
        heading: "Why the platform sometimes isn't there yet",
        body: [
          "At big stations the platform is often only announced shortly before departure. If a row shows no platform, that's normal. Wait near the board, and head over once it appears.",
          "A good habit: glance at the board when you arrive, then check it again a few minutes before your train. Platforms and times can change late.",
        ],
      },
    ],
  },
  {
    slug: "ticket-types-explained",
    title: "Advance, Off-Peak, Anytime: ticket types explained",
    summary:
      "Why the same journey can cost wildly different amounts, and how to pick the right fare without overpaying.",
    readTime: "4 min read",
    sections: [
      {
        heading: "Advance: cheapest, but locked in",
        body: [
          "An Advance ticket is for one specific train. It's usually the cheapest way to travel, but there are a limited number at each price and they sell out. The catch is flexibility: if you miss your train, you generally can't just hop on the next one.",
          "Book Advance when your plans are fixed and you can commit to a time.",
        ],
      },
      {
        heading: "Off-Peak: cheaper, with time rules",
        body: [
          "An Off-Peak ticket lets you travel on any permitted train, but not during the busiest commuting hours. The exact times depend on the route, so always check the restrictions shown when you buy.",
          "It's a good middle ground if you can avoid the morning and evening rush.",
        ],
      },
      {
        heading: "Anytime: the flexible one",
        body: [
          "An Anytime ticket lets you travel on any train, at any time of day, on the day you've chosen. It's the most expensive and the most forgiving. If your plans might change, or you can't predict when a meeting will finish, it's worth the extra.",
          "Fares and rules change, so check the exact conditions on a ticket before you buy it, and on National Rail for the latest rules.",
        ],
      },
    ],
  },
  {
    slug: "are-railcards-worth-it",
    title: "Are railcards worth it?",
    summary:
      "A simple way to work out whether a railcard will pay for itself before the year is up.",
    readTime: "3 min read",
    sections: [
      {
        heading: "What a railcard does",
        body: [
          "A railcard is a card (or digital version) you buy for a year that takes money off many train fares, commonly around a third. There are different ones for different people, including young adults, older travellers, couples, families and disabled passengers.",
        ],
      },
      {
        heading: "The break-even sum",
        body: [
          "Here's the quick maths. Add up roughly what you spend on train tickets in a year. Take off the discount the railcard would give you. If the saving is bigger than the price of the railcard, it pays for itself.",
          "For example, if you spend £300 a year on trains and the card saves you a third, that's about £100 back. If the card costs less than that, you're ahead. If you only take one or two trips a year, it may not be worth it.",
        ],
      },
      {
        heading: "Check the small print",
        body: [
          "Most railcards have rules: some have a minimum fare at certain times of day, and some can't be used on every ticket. Check who qualifies and the exact terms on the official railcard website before you buy.",
        ],
      },
    ],
  },
  {
    slug: "delayed-or-cancelled",
    title: "What to do when your train is delayed or cancelled",
    summary:
      "A calm checklist for when things go wrong, plus a quick look at claiming money back.",
    readTime: "4 min read",
    sections: [
      {
        heading: "First, find out what's actually happening",
        body: [
          "Check the live departure board and the National Rail disruptions page. It tells you whether it's a single late train or a bigger problem on the line, and often suggests a different route.",
          "Station staff and announcements are also worth listening to. They often know about alternatives before the apps do.",
        ],
      },
      {
        heading: "Can I use a different train?",
        body: [
          "When a service is disrupted, train companies will often accept your ticket on other routes or operators, or on later trains, even if the ticket normally says otherwise. The exact rules vary, so ask staff or check the operator's website rather than assuming.",
        ],
      },
      {
        heading: "Claiming compensation",
        body: [
          "Many train companies run a 'Delay Repay' scheme, which lets you claim some money back if your journey is delayed by long enough. The delay threshold and the amount you get depend on the operator and your ticket.",
          "Keep your ticket (or a screenshot of it), note your journey details, and claim through the operator's own website. There's usually a time limit on claims, so don't leave it for months.",
        ],
      },
    ],
  },
  {
    slug: "engineering-works-and-busy-days",
    title: "Planning around engineering works and busy days",
    summary:
      "Why weekend trains sometimes become buses, and how to avoid being caught out.",
    readTime: "3 min read",
    sections: [
      {
        heading: "Why trains get replaced by buses",
        body: [
          "Railways need regular maintenance and upgrades, and the quietest times, often weekends and bank holidays, are when much of it gets done. That can mean a line is closed for a stretch, with replacement buses instead, or that trains take a longer route.",
        ],
      },
      {
        heading: "Check before you go",
        body: [
          "The golden rule: check your journey on the day before you travel, not just when you book. Planned works are usually published well in advance, but it's easy to forget, especially for a trip you booked weeks ago.",
          "National Rail's disruptions page lists planned works as well as problems happening today.",
        ],
      },
      {
        heading: "Busy days need a bit of extra thought",
        body: [
          "Big events, school holidays and the days either side of bank holidays can make trains much busier. If you can, travel a little earlier or later, book a seat reservation where one is offered, and leave extra time to get to the station.",
          "Travelling with large luggage? Look for the luggage racks near the doors, and try not to block the aisles.",
        ],
      },
    ],
  },
];

export function findGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
