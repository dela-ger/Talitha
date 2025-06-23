'use client'

import { useState, useRef } from 'react'
import { askGemini } from '@/lib/gemini';

export default function BibleChat() {
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'ai'}[]>([
    {text: "Hello! I'm Talitha. Ask me anything about the Bible.", sender: 'ai'}
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
  
    const userMessage = { text: input, sender: 'user' as const };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
  
    try {
      const aiResponse = await askGemini(`Answer this Bible question: ${input}`);
      setMessages((prev) => [...prev, { text: aiResponse, sender: 'ai' }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, {
        text: "I couldn't fetch a Bible answer. Please try again later.",
        sender: 'ai'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-gradient-to-br from-lime-50 to-amber-50 border border-lime-200 rounded-xl shadow-md">
      <h2 className="text-2xl font-serif font-normal text-lime-800 mb-4 text-center">
        Ask Talitha about the Bible
      </h2>
      
      <div className="bg-white rounded-lg shadow-inner p-4 mb-4 h-80 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`mb-4 ${msg.sender === 'user' ? 'text-right' : ''}`}
          >
            <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
              msg.sender === 'user' 
                ? 'bg-lime-100 text-lime-800' 
                : 'bg-lime-600 text-white'
            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
        {loading && (
          <div className="flex justify-center mb-4">
            <div className="animate-pulse text-lime-700">
              ✝️ Thinking about Scripture...
            </div>
          </div>
        )}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-lime-300 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What did Jesus say about forgiveness?"
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center"
          disabled={loading || !input.trim()}
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Asking...
            </span>
          ) : (
            'Ask'
          )}
        </button>
      </div>
      
      <p className="text-xs text-center text-lime-700/70 mt-4">
        Answers provided by AI. Always consult your Bible and church leaders for spiritual guidance.
      </p>
    </div>
  )
}