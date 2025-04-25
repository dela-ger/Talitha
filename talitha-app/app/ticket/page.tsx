import React from 'react';
import TicketEventCard from '../components/TicketEventCard';

export default function Ticket() {
  return (
    <div className="bg-gray-50 min-h-screen">

<div className="relative text-white py-12 sm:py-16 px-6 text-center overflow-hidden">
  {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/eventsai.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

  {/* Content on top */}
  <div className="relative z-10">
    <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
      Discover Upcoming Events
    </h1>
    <p className="max-w-2xl mx-auto text-lg sm:text-xl">
      Explore inspiring events, workshops, and gatherings to strengthen your faith and connect with the community.
    </p>
  </div>
</div>


      {/* Events Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          Upcoming Events
        </h2>

        {/* Render Event Cards */}
        <TicketEventCard />
      </div>

    </div>
  );
}