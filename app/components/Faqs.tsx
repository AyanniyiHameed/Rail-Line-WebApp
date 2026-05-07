'use client'
import React from 'react'
import Image from 'next/image'

type Props = {}

const Faqs = (props: Props) => {
   const [openIndex, setOpenIndex] = React.useState(null);
 
const faqs = [
  {
    question: "How do I book a train ticket on RailLine?",
    answer:
      "Simply search your route, compare available journeys, and select the option that works best for you. Your ticket is delivered instantly after checkout.",
  },
  {
    question: "Can I get refunds or change my ticket?",
    answer:
      "Yes, depending on the ticket type. Flexible tickets can be changed or refunded, while some cheaper fares may have restrictions.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No surprises here. The price you see is the price you pay. We keep things transparent so you can book with confidence.",
  },
  {
    question: "Do I need to print my ticket?",
    answer:
      "Nope. Your ticket is sent digitally and can be scanned directly from your phone at the station.",
  },
];

    return (
        <>
          <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center mb-10 gap-10 px-4 md:px-0">
              <Image
                  className="max-w-sm object-cover rounded-xl"
                  src="/images/faqpic.jpg"
                  alt="Faq Illustration"
                  width={350}
                  height={400}
                  

              />
              <div>
                  <p className="text-red-600 mb-2 text-[20px] font-medium">FAQs</p>
                <h1 className="text-3xl font-semibold tracking-tight">
                    Got questions? We’ve got answers
                </h1>
                <p className="text-sm text-slate-500 mt-2 pb-4">
                Everything you need to know about booking, tickets, and travelling with RailLine.          
                </p>
                  {faqs.map((faq, index) => (
                      <div className="border-b border-slate-200 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                          <div className="flex items-center justify-between">
                              <h3 className="text-base font-medium">
                                  {faq.question}
                              </h3>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                  <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </div>
                          <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-75 translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                              {faq.answer}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </>
    );
};


export default Faqs