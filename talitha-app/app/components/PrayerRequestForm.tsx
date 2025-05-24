// components/PrayerRequestForm.tsx
'use client'

import { useState } from 'react'

export function PrayerRequestForm() {
  const [request, setRequest] = useState('')

  return (
    <div className="p-6 bg-[#F8F9FA] rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-[#022B3A] mb-4">Prayer Request</h2>
      <form className="space-y-4">
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          className="w-full p-3 border rounded-lg"
          placeholder="Share your prayer need..."
          rows={4}
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-[#022B3A] text-white rounded hover:bg-opacity-90 transition-colors"
        >
          Submit Prayer
        </button>
      </form>
    </div>
  )
}