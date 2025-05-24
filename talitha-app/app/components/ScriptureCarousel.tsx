// components/ScriptureCarousel.tsx
'use client'

import { useState } from 'react'

interface Verse {
  text: string
  reference: string
}

export function ScriptureCarousel({ verses }: { verses: Verse[] }) {
  const [current, setCurrent] = useState(0)

  return (
    <div className="p-6 bg-[#FFF8E7] rounded-lg shadow-sm relative">
      <div className="text-lg italic mb-2">&quot;{verses[current].text}&quot;</div>
      <div className="text-right text-[#022B3A] font-medium">
        {verses[current].reference}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {verses.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-[#022B3A]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}