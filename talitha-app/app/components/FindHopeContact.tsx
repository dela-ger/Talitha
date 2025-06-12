"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from './ContactForm'

export default function FindHopeContact() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center px-4"
      >
        <div className="mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          
          <h3 className="text-2xl md:text-3xl font-serif font-normal text-lime-800 mb-4 mt-6">
            We&apos;re Here for You
          </h3>
          
          <p className="text-lg md:text-xl text-lime-700/90 leading-relaxed max-w-xl mx-auto">
            Whether you need prayer, guidance, or just someone to listen, 
            we welcome your requests with open hearts. Reach out anytime.
          </p>
        </div>

        <motion.button onClick={openModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-lime-600 hover:bg-lime-700 text-white font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            Contact Us
          </span>
        </motion.button>
      </motion.div>
      <ContactForm isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}