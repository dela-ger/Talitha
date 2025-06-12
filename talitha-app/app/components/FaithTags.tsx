"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const faithTags = [
  "🤍 What does God's love *really* mean?",
  "💭 Wrestling with questions about faith?",
  "🌿 Searching for peace in a chaotic world?",
  "🙋‍♂️ Got doubts? You're not alone.",
  "📖 Discover the truth about grace, hope, and forgiveness.",
  "💡 Faith questions. Real answers. Right here.",
  "⛪ Faith isn't just for Sundays — let's explore it daily.",
  "🕊️ Let's talk about love, pain, and purpose.",
  "🗣️ Your questions are valid. Let's unpack them together.",
  "❤️ Exploring the depth of God's love — one article at a time.",
];

export default function FaithTags() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % faithTags.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white to-lime-50 py-16 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-lime-100/50 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-lime-200/30 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-lime-800 mb-4"
          >
            Explore Faith. Find Answers.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-lime-700/90 max-w-2xl mx-auto"
          >
            Discover insights that speak to your spiritual journey
          </motion.p>
        </div>

        {/* Featured tag */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 mb-12 border-2 border-lime-200 max-w-3xl mx-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center">
            <div className="text-4xl mr-4">{faithTags[activeIndex].split(' ')[0]}</div>
            <p className="text-xl font-medium text-lime-900">
              {faithTags[activeIndex].slice(faithTags[activeIndex].indexOf(' ') + 1)}
            </p>
          </div>
        </motion.div>

        {/* Tags grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {faithTags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className={`
                bg-white rounded-xl p-5 transition-all duration-300 border border-lime-100
                ${index === activeIndex ? 'ring-2 ring-lime-400' : ''}
                hover:border-lime-300 cursor-pointer
              `}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-start">
                <div className="text-2xl mr-3 mt-0.5">{tag.split(' ')[0]}</div>
                <p className="text-lime-900/90">
                  {tag
                    .slice(tag.indexOf(' ') + 1)
                    .replace(/\*(.*?)\*/g, '<span class="font-semibold text-lime-700">$1</span>')
                    .replace(/_/g, '')
                  }
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
  onClick={() => {
    document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })
  }}
  className="bg-lime-600 hover:bg-lime-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
>
  Explore More Topics
</button>
        </motion.div>
      </div>
    </section>
  );
}