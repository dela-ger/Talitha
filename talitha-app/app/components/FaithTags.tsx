"use client"
import React from "react"

const faithTags = [
  "🤍 What does God's love *really* mean?",
  "💭 Wrestling with questions about faith?",
  "🌿 Searching for peace in a chaotic world?",
  "🙋‍♂️ Got doubts? You're not alone.",
  "📖 Discover the truth about grace, hope, and forgiveness.",
  "💡 Faith questions. Real answers. Right here.",
  "⛪ Faith isn’t just for Sundays — let’s explore it daily.",
  "🕊️ Let’s talk about love, pain, and purpose.",
  "🗣️ Your questions are valid. Let’s unpack them together.",
  "❤️ Exploring the depth of God’s love — one article at a time.",
]

export default function FaithTags() {
  return (
    <section className="bg-gradient-to-br from-white to-lime-50 py-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-lime-700 mb-6">Explore Faith. Find Answers.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          {faithTags.map((tag, index) => (
            <div
              key={index}
              className="bg-white border border-lime-200 shadow-sm rounded-lg p-4 hover:shadow-lg hover:bg-lime-50 transition"
            >
              <p className="text-base leading-relaxed">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
