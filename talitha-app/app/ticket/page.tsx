import React from 'react'
import TicketEventCard from '../components/TicketEventCard';

// interface TicketProps {
//     events: TicketEvent[];
// }

export default function Ticket() {
  return (
    <>
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <TicketEventCard />
    </div>
    </>
  )
}