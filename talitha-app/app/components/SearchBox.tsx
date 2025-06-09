"use client"

import React, { useState } from 'react';
// import { Search } from 'lucide-react';
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
        <div className='relative w-full max-w-md mx-auto'>
            <div className="relative w-full">
                <input className='w-full border border-gray-300 rounded-lg p-2'
                    type="text" 
                    placeholder='Search...'
                    value={query}
                    onChange={handleChange}
                />
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    {filteredResults.map((result) => (
                        <div key={result.id} className="p-2 hover:bg-gray-100">
                            <Link href={`/article/${result.id}`}>
                                {result.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>   
    </>
  )
}

export default SearchBox