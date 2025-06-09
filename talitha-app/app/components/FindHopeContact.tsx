'use client'
import React, { useState } from 'react'
import ContactForm from './ContactForm'

function FindHopeContact() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button
        onClick={openModal}
        className='bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700 font-semibold transition cursor-pointer'
      >
        Contact Us
      </button>

      <ContactForm isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default FindHopeContact
