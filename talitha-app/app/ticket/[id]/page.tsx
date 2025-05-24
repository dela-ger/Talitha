"use client"
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { events } from '../ticketData';
import Image from 'next/image';

export default function TicketDetail() {
  const params = useParams();
  const { id } = params;
  const event = events.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Event not found
      </div>
    );
  }

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
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Event Details */}
          <div className="space-y-8">
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-gray-900">{event.title}</h1>
                <div className="flex items-center space-x-4 text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg">{eventDate}</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg">{event.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Organized by: {event.organizer}
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Category: {event.category}
                  </span>
                  {event.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="lg:sticky lg:top-24 h-fit lg:self-start space-y-6 bg-white p-6 rounded-xl shadow-lg">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Get Tickets</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Price</span>
                  <span className="text-xl font-semibold">
                    {event.price > 0 ? 
                      `${event.currency} ${event.price.toLocaleString()}` : 
                      'Free'}
                  </span>
                </div>

                {event.price > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Quantity</span>
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={handleDecrement}
                        className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button 
                        onClick={handleIncrement}
                        className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {event.price > 0 && (
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-gray-700 font-medium">Total</span>
                    <span className="text-xl font-bold text-lime-600">
                      {event.currency} {totalPrice.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-colors
                  ${event.availableTickets > 0 
                    ? 'bg-lime-600 hover:bg-lime-700 text-white' 
                    : 'bg-gray-300 cursor-not-allowed text-gray-500'}`}
                disabled={event.availableTickets <= 0}
              >
                {event.availableTickets > 0 ? 
                  (event.price > 0 ? 'Proceed to Checkout' : 'Reserve Your Spot') : 
                  'Sold Out'}
              </button>

              <div className="text-center text-sm text-gray-500">
                {event.availableTickets > 0 ? 
                  `${event.availableTickets} tickets remaining` : 
                  'All tickets have been claimed'}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="text-gray-900">{eventDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="text-gray-900 text-right">{event.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="text-gray-900">{event.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}