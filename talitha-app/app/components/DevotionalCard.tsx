// components/DevotionalCard.tsx
import React from 'react';

type Devotional = {
  id: string;
  title: string;
  verse: string;
  summary: string;
  content: string;
  devotional_date: string;
};

type DevotionalCardProps = {
  devotional: Devotional;
};

export default function DevotionalCard({ devotional }: DevotionalCardProps) {
  // Format the devotional date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-amber-100 bg-white">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-lime-800">{devotional.title}</h2>
            <p className="text-lg text-amber-700">{devotional.verse}</p>
          </div>
          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
            {formatDate(devotional.devotional_date)}
          </span>
        </div>
        
        <div className="prose max-w-none text-gray-700 mb-4">
          <p className="text-lg font-medium">{devotional.summary}</p>
        </div>
        
        <div className="prose max-w-none text-gray-700">
          <p>{devotional.content}</p>
        </div>
      </div>
    </div>
  );
}