'use client';

import { useState } from 'react';

type Verse = {
  reference: string;
  text: string;
};

export default function DevotionalCard({ verse }: { verse: Verse }) {
  const [expanded, setExpanded] = useState(false);
  const [chapterText, setChapterText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchChapter = async () => {
    if (chapterText || loading) return;
    setLoading(true);
    try {
      const res = await fetch(`https://bible-api.com/${encodeURIComponent(verse.reference)}?translation=kjv`);
      const data = await res.json();
      setChapterText(data.text);
    } catch {
      setChapterText('Error loading chapter. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    setExpanded(!expanded);
    if (!chapterText && !expanded) {
      fetchChapter();
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-lime-800 mb-2">{verse.reference}</h2>
      <p className="text-lg text-gray-700 whitespace-pre-line">{verse.text}</p>

      <button
        onClick={handleToggle}
        className="mt-4 text-lime-600 underline text-sm hover:text-lime-700 transition"
      >
        {expanded ? 'Hide full chapter' : 'Read full chapter'}
      </button>

      {expanded && (
        <div className="mt-4 bg-lime-50 border border-lime-200 rounded-md p-4 text-gray-800 whitespace-pre-line text-sm">
          {loading ? 'Loading full chapter...' : chapterText}
        </div>
      )}
    </div>
  );
}
