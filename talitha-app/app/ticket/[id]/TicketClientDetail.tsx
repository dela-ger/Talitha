"use client";

import { useState } from 'react';
import { events } from '../ticketData';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  price: number;
  currency: string;
  availableTickets: number;
  organizer: string;
  category: string;
  tags: string[];
};

export default function TicketClientDetail({ id }: { id: string }) {
  const event = events.find((item) => item.id === id) as Event;
  const [quantity, setQuantity] = useState(1);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-lime-700 bg-gradient-to-b from-lime-50 to-amber-50">
        Event not found
      </div>
    );
  }

  // Client-side metadata handling
  const metadata = {
    title: `${event.title} | Talitha Events`,
    description: event.description.substring(0, 160) + '...',
  };

  const handleIncrement = () => {
    if (quantity < event.availableTickets) setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const totalPrice = event.price * quantity;
  const eventDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-lime-50 to-amber-50 py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              href="/ticket" 
              className="text-lime-700 hover:text-lime-800 transition-colors flex items-center font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Events
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Event Image */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-3xl sm:text-4xl font-serif font-normal text-white leading-tight">
                  {event.title}
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Meta Information */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-lime-700">
                <div className="flex items-center mb-3 sm:mb-0">
                  <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-800 font-bold mr-3">
                    {event.organizer.charAt(0)}
                  </div>
                  <span className="font-medium">Organized by: {event.organizer}</span>
                </div>
                <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full">
                  {eventDate}
                </span>
              </div>

              {/* Event Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-lime-800">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 11111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg">{event.location}</span>
                </div>

                <div className="prose max-w-none text-lime-800/90 leading-relaxed">
                  <p className="text-lg">
                    {event.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-lime-100 text-lime-800 rounded-full text-sm font-medium">
                    Category: {event.category}
                  </span>
                  {event.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ticket Purchase Section */}
              <div className="mt-10 p-6 bg-lime-50 rounded-xl border-l-4 border-lime-600">
                <h2 className="text-2xl font-serif font-normal text-lime-800 mb-6">
                  Get Tickets
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lime-800">Price per ticket</span>
                    <span className="text-xl font-semibold">
                      {event.price > 0 ? 
                        `${event.currency} ${event.price.toLocaleString()}` : 
                        'Free'}
                    </span>
                  </div>

                  {event.price > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-lime-800">Quantity</span>
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={handleDecrement}
                          className="px-4 py-2 rounded-lg bg-lime-100 text-lime-800 hover:bg-lime-200"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-lg">{quantity}</span>
                        <button 
                          onClick={handleIncrement}
                          className="px-4 py-2 rounded-lg bg-lime-100 text-lime-800 hover:bg-lime-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  {event.price > 0 && (
                    <div className="flex justify-between items-center pt-4 border-t border-lime-200">
                      <span className="text-lime-800 font-medium">Total</span>
                      <span className="text-xl font-bold text-lime-700">
                        {event.currency} {totalPrice.toLocaleString()}
                      </span>
                    </div>
                  )}

                  <button 
                    className={`w-full py-3 px-6 mt-4 rounded-lg font-semibold text-lg transition-colors
                      ${event.availableTickets > 0 
                        ? 'bg-lime-600 hover:bg-lime-700 text-white' 
                        : 'bg-gray-300 cursor-not-allowed text-gray-500'}`}
                    disabled={event.availableTickets <= 0}
                  >
                    {event.availableTickets > 0 ? 
                      (event.price > 0 ? 'Proceed to Checkout' : 'Reserve Your Spot') : 
                      'Sold Out'}
                  </button>

                  <div className="text-center text-sm text-lime-700">
                    {event.availableTickets > 0 ? 
                      `${event.availableTickets} tickets remaining` : 
                      'All tickets have been claimed'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}