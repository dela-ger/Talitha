"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

function SearchBox({ data }: { data: Article[] }) {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<Article[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const filtered = data.filter(item => 
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredResults(filtered.slice(0, 5)); // Limit to 5 results
  };

  const clearSearch = () => {
    setQuery("");
    setFilteredResults([]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Highlight matching text
  const highlightMatch = (text: string, match: string) => {
    if (!match.trim()) return text;
    
    const regex = new RegExp(`(${match})`, "gi");
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? 
        <span key={index} className="bg-lime-100 text-lime-800 font-medium">{part}</span> : 
        part
    );
  };

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-lime-500 focus-within:border-lime-500 transition-all">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            className="w-full ml-2 focus:outline-none text-sm"
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
          />
          {query && (
            <button 
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {(isFocused && filteredResults.length > 0) && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-[1000] overflow-hidden">
            {filteredResults.map((result) => (
              <Link 
                key={result.id} 
                href={`/article/${result.id}`}
                onClick={() => {
                  setQuery("");
                  setFilteredResults([]);
                  setIsFocused(false);
                }}
              >
                <div className="p-3 hover:bg-lime-50 transition-colors border-b border-gray-100 last:border-b-0">
                  <div className="font-medium text-gray-900">
                    {highlightMatch(result.title, query)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    By {result.author} • {new Date(result.date).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {(isFocused && query && filteredResults.length === 0) && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-[1000] p-3 text-center text-gray-500">
            No articles found
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBox;