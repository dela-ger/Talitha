import TicketClientDetail from './TicketClientDetail';
import { events } from '../ticketData';
import { notFound } from 'next/navigation';

// This tells Next.js which static pages to generate at build time
export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

// Optional: Metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return {
      title: 'Event Not Found | Talitha',
      description: 'The requested event could not be found.',
    };
  }

  return {
    title: `${event.title} | Talitha Events`,
    description: event.description.substring(0, 160),
    openGraph: {
      title: event.title,
      description: event.description.substring(0, 160),
      type: 'website',
    },
  };
}

// ✅ Add async here to match Next.js expectations
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound(); // Return 404 page if event doesn't exist
  }

  return <TicketClientDetail id={id} />;
}
