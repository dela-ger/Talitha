'use client';

import { useEffect, useState } from 'react';
import DevotionalCard from '../components/DevotionalCard';
import { supabase } from '@/lib/supabase';

type Devotional = {
  id: string; // Changed to string to match UUID
  title: string; // Added title
  verse: string;
  summary: string;
  content: string; // Added content
  devotional_date: string; // Added devotional_date
};

export default function DevotionalPage() {
  const [devotionals, setDevotionals] = useState<Devotional[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Set current date for display
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    setCurrentDate(formattedDate);
    
    const fetchDevotionals = async () => {
      setLoading(true);
      
      // Fetch all columns that match your table
      const { data, error } = await supabase
        .from('devotionals')
        .select('id, title, verse, summary, content, devotional_date');

      console.log("Supabase response:", { data, error }); // For debugging

      if (error) {
        console.error("Supabase error:", error);
        setError(`Database error: ${error.message}`);
        setLoading(false);
        return;
      }

      if (!data || data.length === 0) {
        setError("No devotionals found in the database.");
        setLoading(false);
        return;
      }
      
      setDevotionals(data);
      setLoading(false);
    };

    fetchDevotionals();
  }, []);


  // test supabase connection
  // Temporarily add this to test connection
useEffect(() => {
  const testConnection = async () => {
    const { data, error } = await supabase
      .from('devotionals')
      .select('*')
      .limit(1);
    
    console.log("Connection test:", { data, error });
    console.log(data)
  };
  testConnection();
}, []);

  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-lime-50 to-lime-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-lime-800">Daily Devotional</h1>
          <p className="text-xl text-lime-700 mt-2 font-medium">{currentDate}</p>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-600"></div>
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded text-center">
            <p className="text-red-700">{error}</p>
            <p className="text-sm mt-2">
              Check your Supabase connection and table permissions
            </p>
          </div>
        )}

        {!loading && devotionals.length > 0 && (
          <div className="space-y-8">
            {devotionals.map((devotional) => (
              <DevotionalCard 
                key={devotional.id} 
                devotional={devotional} 
              />
            ))}
          </div>
        )}

        {!loading && devotionals.length === 0 && !error && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded text-center">
            <p className="text-amber-700">No devotionals available. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}