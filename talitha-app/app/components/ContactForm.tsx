import React, { useState } from 'react'
import { X, Heart, HandHeart, BookHeart } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface ContactFormProps {
  isOpen: boolean
  closeModal: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, closeModal }) => {
  const [requestType, setRequestType] = useState('prayer')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      // Create the contact request in Supabase
      const { error } = await supabase
        .from('contact_requests')
        .insert([
          {
            request_type: requestType,
            name: name || null,
            email: email || null,
            message: message
          }
        ])
      
      if (error) {
        throw new Error(error.message || 'Failed to submit request')
      }

      // Success handling
      setSuccessMessage('Your request has been received. We will pray over it!')
      
      // Clear form and close modal after delay
      setTimeout(() => {
        setIsSubmitting(false)
        setName('')
        setEmail('')
        setMessage('')
        closeModal()
      }, 3000)
    } catch (error) {
      console.error('Error submitting contact request:', error)
      setErrorMessage('There was an error submitting your request. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-lime-50 to-amber-50 shadow-2xl p-6 sm:p-8">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-200/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-lime-700 hover:text-lime-900 transition-colors"
          onClick={closeModal}
          aria-label="Close contact form"
          disabled={isSubmitting}
        >
          <X className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 mt-10 sm:mt-0">
          <div className="flex justify-center mb-4">
            <div className="bg-lime-100 p-4 rounded-full">
              <Heart className="text-lime-700" size={36} strokeWidth={1.5} />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-normal text-lime-800">
            Share Your Heart With Us
          </h2>
          <p className="text-lime-700/90 mt-2 max-w-md mx-auto">
            We&apos;re here to lift you up in prayer and offer spiritual guidance
          </p>
        </div>

        {successMessage ? (
          <div className="text-center py-8">
            <div className="bg-lime-100 text-lime-800 p-6 rounded-xl mb-4">
              <Heart className="mx-auto w-12 h-12 text-lime-700 mb-4" />
              <h3 className="text-xl font-serif mb-2">Prayer Received!</h3>
              <p className="text-lime-700">{successMessage}</p>
            </div>
            <div className="mt-6">
              <button
                onClick={closeModal}
                className="bg-lime-600 hover:bg-lime-700 text-white font-medium py-3 px-6 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Request type */}
            <div className="text-center">
              <p className="text-lime-800 mb-3 font-medium">I&apos;m seeking:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { id: 'prayer', label: 'Prayer', icon: <HandHeart className="w-5 h-5" /> },
                  { id: 'guidance', label: 'Guidance', icon: <BookHeart className="w-5 h-5" /> },
                  { id: 'connection', label: 'Connection', icon: <Heart className="w-5 h-5" /> }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setRequestType(type.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      requestType === type.id
                        ? 'bg-lime-600 text-white shadow-md'
                        : 'bg-white text-lime-700 border border-lime-200 hover:bg-lime-50'
                    }`}
                    disabled={isSubmitting}
                  >
                    {type.icon}
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-5">
              <div>
                <label className="block font-medium text-lime-800 mb-2">
                  Your name (if you&apos;re comfortable sharing)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Blessed to know you as..."
                  className="w-full border border-lime-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-lime-300 bg-white/70 placeholder-lime-700/50"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block font-medium text-lime-800 mb-2">
                  Your email (only if you&apos;d like a response)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Where grace can reach you..."
                  className="w-full border border-lime-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-lime-300 bg-white/70 placeholder-lime-700/50"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block font-medium text-lime-800 mb-2">
                  {requestType === 'prayer'
                    ? "What would you like us to pray about?"
                    : requestType === 'guidance'
                    ? "What guidance are you seeking?"
                    : "How can we connect with you?"}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    requestType === 'prayer'
                      ? "Share your heart - every concern matters to God..."
                      : requestType === 'guidance'
                      ? "Your spiritual journey is sacred to us..."
                      : "We'd be honored to walk alongside you..."
                  }
                  className="w-full border border-lime-200 rounded-xl p-4 min-h-[160px] focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-lime-300 bg-white/70 placeholder-lime-700/50"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Scripture */}
            <div className="text-center italic text-lime-700/80 py-3 border-y border-lime-200/60">
              <p className="font-serif">&quot;Cast all your anxiety on him because he cares for you.&quot;</p>
              <p className="text-sm mt-1">— 1 Peter 5:7</p>
            </div>

            <p className="text-center text-sm text-lime-700/70">
              Your sharing is held in sacred confidence and met with compassion
            </p>

            {/* Error message */}
            {errorMessage && (
              <div className="text-red-600 text-center bg-red-50 py-2 px-4 rounded-lg">
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <div className="flex justify-center pt-4 pb-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-lime-600 hover:bg-lime-700 text-white font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Lifting Up Your Request...
                  </>
                ) : (
                  <>
                    <HandHeart className="w-5 h-5" />
                    {requestType === 'prayer' 
                      ? 'Send Prayer Request' 
                      : requestType === 'guidance' 
                        ? 'Request Guidance' 
                        : 'Request Connection'}
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactForm