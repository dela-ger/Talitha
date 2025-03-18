"use client"

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

// Define the type for an article
interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}


function SearchBox({ data }: { data: Article[] }) {
    const [query, setQuery] = useState("");

    // state to store the filtered search results
    const [filteredResults, setFilteredResults] = useState<Article[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value)

    if (value.trim() === ""){
        setFilteredResults([]);
        return;
    }

    // filter data bsed on query this is case insensitive
    const filtered = data.filter((item) => 
        item.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredResults(filtered)
}


  return (
    <>
        <div className='relative w-full max-w-md mx-auto mt-5'>
            <div className="relative">
                <input className='w-full px-4py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pl-10'
                    type="text" 
                    placeholder='Search...'
                    value={query}
                    onChange={handleChange}
                />
                <Search className='absolute left-3 top-0.5 text-gray-400 w-5 h-5'/>
            </div>

                {filteredResults.length > 0 && (
            <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
            {filteredResults.map((result) => (
                <li
                key={result.id}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition duration-200"
                >
                  <Link href={`/article/${result.id}`}>
                        {result.title}
                  </Link>      
                    
                </li>
            ))}
            </ul>
        )}
        </div>   
    </>
  )
}

export default SearchBox