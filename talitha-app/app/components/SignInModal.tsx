// talitha-app/components/AuthModal.tsx
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { motion } from 'framer-motion'

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  async function handleAuth() {
    setIsLoading(true)
    setError(null)
    setSuccessMessage(null)
    
    try {
      const { error } = isSignUp
        ? await supabase.auth.signUp({ 
            email, 
            password,
            options: {
              emailRedirectTo: `${location.origin}/auth/callback`
            }
          })
        : await supabase.auth.signInWithPassword({ email, password })

      if (error) {
        setError(error.message)
      } else {
        if (isSignUp) {
          setSuccessMessage('Verification email sent! Please check your inbox.')
        } else {
          onClose()
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'An unexpected error occurred')
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Header with decorative elements */}
        <div className="bg-gradient-to-r from-lime-100 to-emerald-100 p-6 relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-lime-300"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-emerald-300"></div>
            <div className="absolute top-10 right-10 w-6 h-6 rounded-full bg-lime-400"></div>
          </div>
          
          <div className="relative z-10 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-lime-800">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="relative z-10 mt-2 text-lime-700">
            {isSignUp 
              ? 'Join our community of hope and inspiration' 
              : 'Sign in to continue your spiritual journey'}
          </p>
        </div>

        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
          
          {successMessage && (
            <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 rounded-lg text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {successMessage}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            {!isSignUp && (
              <div className="text-right">
                <button 
                  type="button"
                  className="text-sm text-lime-700 hover:text-lime-900 hover:underline transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              onClick={handleAuth}
              disabled={isLoading}
              className={`w-full flex justify-center items-center py-3 px-4 rounded-lg text-white font-medium transition-all ${
                isLoading 
                  ? 'bg-lime-400 cursor-not-allowed' 
                  : 'bg-lime-600 hover:bg-lime-700 shadow hover:shadow-md'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </>
              ) : (
                isSignUp ? 'Create Account' : 'Sign In'
              )}
            </button>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 rounded-b-xl">
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            </p>
            <button
              onClick={() => {
                setIsSignUp(!isSignUp)
                setError(null)
                setSuccessMessage(null)
              }}
              className="ml-2 text-sm font-medium text-lime-700 hover:text-lime-900 hover:underline transition-colors"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}