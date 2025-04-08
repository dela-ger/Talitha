// tickets.ts

export interface TicketEvent {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    price: number;
    currency: string;
    image: string;
    organizer: string;
    category: string;
    availableTickets: number;
    isFeatured: boolean;
    tags: string[];
    ticketLink: string;
  }
  
  export const events: TicketEvent[] = [
    {
      id: "evt001",
      title: "Rise & Worship 2025",
      description: "An electrifying night of worship featuring top gospel artists, choirs, and spoken word artists.",
      location: "The Grace Dome, Lagos, Nigeria",
      date: "2025-04-15T19:00:00Z",
      price: 25,
      currency: "USD",
      image: "/events/rise-and-worship.jpg",
      organizer: "Kingdom Vibes Intl",
      category: "Worship Concert",
      availableTickets: 300,
      isFeatured: true,
      tags: ["concert", "gospel", "worship"],
      ticketLink: "/tickets/rise-and-worship-2025"
    },
    {
      id: "evt002",
      title: "Christian Creators Summit",
      description: "A 2-day summit for content creators, artists, and kingdom influencers. Grow, connect, and create for Christ.",
      location: "Virtual (Zoom)",
      date: "2025-05-10T10:00:00Z",
      price: 0,
      currency: "USD",
      image: "/events/creators-summit.jpg",
      organizer: "Talitha Community",
      category: "Summit / Workshop",
      availableTickets: 1000,
      isFeatured: false,
      tags: ["summit", "creators", "online"],
      ticketLink: "/tickets/christian-creators-summit"
    },
    {
      id: "evt003",
      title: "Youth On Fire Camp",
      description: "3-day spiritual retreat for youth and young adults. Worship, word, fun, and transformation in one space.",
      location: "Camp Joseph, Ibadan, Nigeria",
      date: "2025-08-20T09:00:00Z",
      price: 60,
      currency: "USD",
      image: "/events/youth-camp.jpg",
      organizer: "Jesus Generation Network",
      category: "Retreat / Camp",
      availableTickets: 120,
      isFeatured: true,
      tags: ["youth", "camp", "retreat"],
      ticketLink: "/tickets/youth-on-fire-camp"
    },
    {
      id: "evt004",
      title: "Kingdom Business Forum",
      description: "Equipping Christian entrepreneurs to lead with faith and kingdom values in the marketplace.",
      location: "Atlanta, Georgia, USA",
      date: "2025-06-05T13:00:00Z",
      price: 40,
      currency: "USD",
      image: "/events/kingdom-business.jpg",
      organizer: "FaithBiz Network",
      category: "Conference",
      availableTickets: 200,
      isFeatured: false,
      tags: ["business", "entrepreneurship", "leadership"],
      ticketLink: "/tickets/kingdom-business-forum"
    },
    {
      id: "evt005",
      title: "Fire Fall Revival Night",
      description: "A powerful all-night prayer and healing service with prophetic worship and intercession.",
      location: "Johannesburg, South Africa",
      date: "2025-07-12T22:00:00Z",
      price: 10,
      currency: "USD",
      image: "/events/fire-fall.jpg",
      organizer: "Revive Ministries",
      category: "Prayer / Revival",
      availableTickets: 500,
      isFeatured: true,
      tags: ["revival", "prayer", "healing"],
      ticketLink: "/tickets/fire-fall-revival-night"
    },
    {
      id: "evt006",
      title: "Holy Land Tour 2025",
      description: "Walk the path of Jesus with guided tours through Jerusalem, Galilee, and more. Life-changing experience.",
      location: "Israel (Multiple Cities)",
      date: "2025-09-01T08:00:00Z",
      price: 1500,
      currency: "USD",
      image: "/events/holy-land.jpg",
      organizer: "Pilgrimage Tours Intl",
      category: "Pilgrimage",
      availableTickets: 50,
      isFeatured: true,
      tags: ["travel", "faith", "pilgrimage"],
      ticketLink: "/tickets/holy-land-tour-2025"
    },
    {
      id: "evt007",
      title: "Faith & Family Movie Night",
      description: "Outdoor film screening of top Christian movies with food trucks, music, and games for the kids.",
      location: "Sydney, Australia",
      date: "2025-04-28T18:30:00Z",
      price: 8,
      currency: "USD",
      image: "/events/family-movie-night.jpg",
      organizer: "LightHouse Media",
      category: "Entertainment / Family",
      availableTickets: 350,
      isFeatured: false,
      tags: ["family", "movie", "fun"],
      ticketLink: "/tickets/faith-family-movie-night"
    },
    {
      id: "evt008",
      title: "Christian Leadership Bootcamp",
      description: "A one-week intensive for church and ministry leaders to grow in strategy, theology, and digital tools.",
      location: "Toronto, Canada",
      date: "2025-10-15T09:00:00Z",
      price: 250,
      currency: "USD",
      image: "/events/leadership-bootcamp.jpg",
      organizer: "NextGen Ministry Hub",
      category: "Training / Workshop",
      availableTickets: 80,
      isFeatured: false,
      tags: ["leadership", "church", "mentoring"],
      ticketLink: "/tickets/christian-leadership-bootcamp"
    },
    {
      id: "evt009",
      title: "Voices United Choir Festival",
      description: "Multi-denominational gospel choir performances celebrating unity in Christ. A weekend of musical glory.",
      location: "London, UK",
      date: "2025-11-22T16:00:00Z",
      price: 30,
      currency: "USD",
      image: "/events/choir-festival.jpg",
      organizer: "United Praise Network",
      category: "Music / Festival",
      availableTickets: 400,
      isFeatured: true,
      tags: ["music", "choir", "unity"],
      ticketLink: "/tickets/voices-united-festival"
    }
  ];
  