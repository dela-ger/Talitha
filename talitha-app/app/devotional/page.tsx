import DevotionalCard from '../components/DevotionalCard';

export default function DevotionalPage() {
  const verse = {
    reference: "John 3:16",
    text: "For God so loved the world, that he gave his only begotten Son..."
  };

  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-lime-50 to-amber-50">
      <h1 className="text-4xl font-serif text-lime-800 text-center mb-10">Daily Devotional</h1>
      <DevotionalCard verse={verse} />
    </main>
  );
}
