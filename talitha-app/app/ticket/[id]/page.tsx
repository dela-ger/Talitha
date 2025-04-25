"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { events } from '../ticketData';
import Image from 'next/image';

export default function TicketDetail() {
  const params = useParams();
  const { id } = params;
  const eventsData = events.find((item) => item.id === id);

  if(!events) {
    return (
            <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
                Event not found
            </div>
    )
  }

  return (
    <>
        <div>Ticket Details</div>
        <div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
                                          <Image
                                              src={eventsData?.image}
                                              alt={eventsData?.title}
                                              fill
                                              className="object-cover"
                                              priority
                                          />
                                      </div>
          <p>{eventsData?.title}</p>
          <p>{eventsData?.description}</p>
        </div>
    </>
  )
}