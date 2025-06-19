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

const teachings = [
  {
    title: "Love Your Enemies",
    verse: "Matthew 5:44",
    content: "But I say to you, love your enemies and pray for those who persecute you.",
    lesson: "True love extends even to those who oppose us. This is the radical love Jesus calls us to."
  },
  {
    title: "Do Not Worry",
    verse: "Matthew 6:34",
    content: "Therefore do not worry about tomorrow, for tomorrow will worry about itself.",
    lesson: "Trust God daily. Worry robs you of today’s peace."
  },
  {
    title: "You Are the Light",
    verse: "Matthew 5:14",
    content: "You are the light of the world. A city set on a hill cannot be hidden.",
    lesson: "Let your life shine with goodness so others see God's love through you."
  },
  {
    title: "Ask, Seek, Knock",
    verse: "Matthew 7:7",
    content: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    lesson: "Persistent faith opens doors to God’s provision and wisdom."
  },
  {
    title: "The Greatest Commandment",
    verse: "Matthew 22:37-39",
    content: "Love the Lord your God with all your heart... and love your neighbor as yourself.",
    lesson: "Love is the core of every action and relationship in God's kingdom."
  },
  {
    title: "Serve One Another",
    verse: "Mark 10:45",
    content: "The Son of Man came not to be served but to serve, and to give his life as a ransom for many.",
    lesson: "Greatness in God's eyes is shown through humility and service."
  },
  {
    title: "Peace Be Still",
    verse: "Mark 4:39",
    content: "He rebuked the wind and said to the sea, 'Peace! Be still!' And the wind ceased.",
    lesson: "Even in life’s storms, Jesus brings peace that stills the soul."
  },
  {
    title: "Forgive Others",
    verse: "Matthew 6:14",
    content: "If you forgive others their trespasses, your heavenly Father will also forgive you.",
    lesson: "Forgiveness frees your heart and reflects the mercy of God."
  },
  {
    title: "Let the Children Come",
    verse: "Luke 18:16",
    content: "Let the little children come to me, and do not hinder them, for to such belongs the kingdom of God.",
    lesson: "Childlike faith and humility open the way to the heart of God."
  },
  {
    title: "The Bread of Life",
    verse: "John 6:35",
    content: "I am the bread of life. Whoever comes to me shall not hunger, and whoever believes in me shall never thirst.",
    lesson: "Only Jesus can truly satisfy the deep hunger of the soul."
  }
];



export default function FaithTags() {
  const [activeIndex, setActiveIndex] = useState(0);

  // new sermon added to the tags
  const [showModal, setShowModal] = useState(false);
const [selectedTeaching, setSelectedTeaching] = useState(teachings[0]);

  
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
              onClick={() => {
                setSelectedTeaching(teachings[index % teachings.length]); // loop if needed
                setShowModal(true);}}
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
        
        {/* sermon modal */}

        {showModal && selectedTeaching && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
    <div className="bg-gradient-to-br from-lime-50 to-emerald-50 p-8 rounded-2xl max-w-md mx-auto shadow-xl border border-lime-200 relative transform transition-transform duration-300 scale-95 animate-in fade-in-90 zoom-in-90">
      {/* Decorative elements */}
      
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => setShowModal(false)} 
          className="text-lime-700 hover:text-emerald-600 transition-colors duration-200 bg-lime-100 hover:bg-lime-200 rounded-full p-1 w-8 h-8 flex items-center justify-center shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="mt-2 text-center">
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-lime-800 mb-3 tracking-tight">
          {selectedTeaching.title}
        </h3>
        
        <div className="relative my-6 px-4">
          <div className="absolute top-0 left-0 text-5xl text-lime-300 font-serif leading-none">“</div>
          <p className="text-lg italic text-emerald-800 relative z-10 pl-6">
            {selectedTeaching.content}
          </p>
          <div className="absolute bottom-0 right-0 text-5xl text-lime-300 font-serif leading-none -mb-2">”</div>
        </div>
        
        <p className="text-sm font-medium text-lime-700 mb-1">
          — {selectedTeaching.verse}
        </p>
        
        <div className="mt-8 pt-6 border-t border-lime-200">
          <p className="text-gray-700 font-medium text-base leading-relaxed">
            {selectedTeaching.lesson}
          </p>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
    </section>
  );
}