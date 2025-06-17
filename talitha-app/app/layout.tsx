"use client"

import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import SearchBox from './components/SearchBox'
import christianArticles from '@/data'
import ArticleProvider from '../app/context/ArticleContext'
import Footer from './components/Footer'
import ProductProvider from './context/ProductContext'
import CheckoutProvider from './context/CheckoutContext'
import Navbar from './components/Nav'
// supabase
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'
import SignInModal from './components/SignInModal'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>)  {

  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }
  
  return (
  
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="bg-gray-50 antialiased min-h-screen flex flex-col text-[#101418] font-sans">
          <CheckoutProvider>
            <div className="flex flex-col min-h-screen">
              <header className="flex items-center justify-between border-b border-[#eaedf1] px-10 py-3">
                {/* Left Section: Logo + Nav */}
                <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/talitha_logo4(1).png"
                      width={140}
                      height={140}
                      alt="Talitha Logo"
                      className="w-24 sm:w-28 lg:w-32 h-auto drop-shadow-md"
                    />
                </Link>
                </div>

                {/* Right Section: Search + Auth */}
<div className="flex items-center gap-4 sm:gap-6">
  <div className="hidden sm:flex w-full max-w-xs lg:max-w-md">
    <SearchBox data={christianArticles} />
  </div>

  {user ? (
    <div className="flex items-center gap-3">
      <button
        onClick={handleLogout}
        className="flex items-center gap-1.5 bg-lime-100 hover:bg-lime-200 text-lime-800 px-3 py-1.5 rounded-md transition-colors text-sm sm:px-4 sm:py-2 sm:text-base shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
        </svg>
        Logout
      </button>
      
      {/* User avatar indicator - compact */}
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-lime-100 border border-lime-300 flex items-center justify-center text-lime-800 font-medium text-sm">
        {user.email?.charAt(0).toUpperCase()}
      </div>
    </div>
  ) : (
    <button
      onClick={() => setShowModal(true)}
      className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-5 py-2 rounded-md transition-colors text-base min-w-[120px] shadow-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
      Sign In
    </button>
  )}

                  {showModal && <SignInModal onClose={() => setShowModal(false)} />}

                  
                </div>
              </header>
              <Navbar />

              <ProductProvider>
                <ArticleProvider>
                  <main className="flex-1">{children}</main>
                </ArticleProvider>
              </ProductProvider>

              <Footer />
            </div>
          </CheckoutProvider>
        </body>
      </html>
  )
}