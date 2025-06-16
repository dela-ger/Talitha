import ArticleCard from "./components/ArticleCard";
import FaithTags from "./components/FaithTags";
import FindHopePage from "./components/FindHope";
import Hero from "./components/Hero";
// import Navbar from "./components/Nav";
import TicketEventCard from "./components/TicketEventCard";
import Link from "next/link";
// use client supabase
// import { useState, useEffect } from 'react'
// import { supabase } from '@/lib/supabase'
// import { User } from '@supabase/supabase-js'
// import SignInModal from './components/SignInModal';

export default function Home() {
  // const [showModal, setShowModal] = useState(false)
  // const [user, setUser] = useState<User | null>(null)
  // Check for an active session on load
  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setUser(session?.user ?? null)
  //   })

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user ?? null)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

  // const handleLogout = async () => {
  //   await supabase.auth.signOut()
  //   setUser(null)
  // }
  return (
    <>
      <div>
        {/* <Navbar /> */}
        {/* {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Sign In / Sign Up
            </button>
          )}

          {showModal && <SignInModal onClose={() => setShowModal(false)} />} */}
        <Hero />

          <FaithTags />

          <FindHopePage />
        {/* <div className="mt-15 mr-40 ml-40"> */}
          <ArticleCard />

        {/* </div> */}
        
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
            
              <div className="max-w-3xl mx-auto mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
  Experience God&apos;s Presence Together
</h1>

                <p className="text-lg md:text-xl text-gray-600 font-medium">
                  Join fellow believers in worship, fellowship, and spiritual growth at upcoming Kingdom gatherings near you
                </p>
              </div>

              <TicketEventCard limit={3} />

              {/* CTA Button */}
              <div className="mt-12">
                <Link
                  href="/ticket"
                  className="inline-block px-8 py-3 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2"
                >
                  Explore All Events →
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 italic">
                  &quot;For where two or three gather in my name, there am I with them.&quot;
                  <br />
                  <span className="not-italic font-semibold text-lime-700">Matthew 18:20 (NIV)</span>
                </p>
              </div>
            </div>
          </div>
        
      </div>
    </>
    
  );
}
