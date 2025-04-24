import React from 'react';
import TicketEventCard from '../components/TicketEventCard';

export default function Ticket() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      {/* <div
  className="relative bg-cover bg-center text-white py-12 sm:py-16 px-6 text-center"
  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1644959451750-a6dc98dc33ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
>
  <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
    Discover Upcoming Events
  </h1>
  <p className="max-w-2xl mx-auto text-lg sm:text-xl">
    Explore inspiring events, workshops, and gatherings to strengthen your faith and connect with the community.
  </p>
</div> */}

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

      {/* Call-to-Action Section */}
      {/* <div className="bg-lime-600 text-white py-8 sm:py-12 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Want to see more events?
        </h3>
        <p className="mb-6 text-lg">
          Stay tuned for exciting gatherings and inspirational programs near you.
        </p>
        <button className="px-6 py-3 bg-white text-lime-700 font-medium text-lg rounded-lg shadow hover:bg-gray-100 transition-colors">
          Explore All Events
        </button>
      </div> */}
    </div>
  );
}