import { events } from '../ticket/ticketData';
import Link from 'next/link';
import Image from 'next/image';

export default function TicketEventCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-12 ml-40 mr-40">
      {events.map(event => (
        <div
          key={event.id}
          className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-36 w-full">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
            
            <div className="flex items-center text-gray-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                  clipRule="evenodd"
                />
              </svg>
              <span>{event.location}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
                  clipRule="evenodd"
                />
              </svg>
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <span className="text-md font-bold text-lime-700">
                GH₵{event.price}
              </span>
              <Link
                href={`/ticket/${event.id}`}
                className="px-3 py-1 bg-lime-600 text-white hover:bg-lime-700 transition-colors text-sm"
              >
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}