# Talitha
A christian themed website for teaching and encouranging the youth about our faith

## Ticket Component
 TicketCard Component with Dynamic Display Limit

To maintain a consistent and modular design, the TicketCard component was built to support dynamic data display using a limit prop. This allows the same component to be reused across different pages with varying content needs. On the homepage, a limited number of featured or upcoming events are displayed using .slice() to create a concise preview section. Meanwhile, on the full events listing page, the TicketCard is rendered without a limit to showcase all available events. This approach improves performance, enhances user experience through contextual relevance, and keeps the UI clean and focused depending on where the component is used.