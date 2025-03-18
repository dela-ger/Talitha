"use client"

import React, { useState } from 'react'


function SearchBox() {
    const [query, setQuery] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(
        e.target.value
    )
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
            </div>
        </div>   
    </>
  )
}

export default SearchBox