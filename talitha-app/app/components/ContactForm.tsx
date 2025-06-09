import React from 'react'
import { X } from 'lucide-react'

interface ContactFormProps {
  isOpen: boolean
  closeModal: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">Contact Us</h2>

        <form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 min-h-[120px] focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700 font-semibold transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
