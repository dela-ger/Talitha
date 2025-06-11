'use client'

import Image from 'next/image'
import FindHopeContact from './FindHopeContact'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import { useRef, useState, useEffect } from 'react'

export default function FindHopeSection() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [navigationReady, setNavigationReady] = useState(false)

  useEffect(() => {
    // Delay setting navigation until refs are set
    setNavigationReady(true)
  }, [])

  const stories = [
    {
      title: "Sarah's Journey to Peace",
      text: "Sarah found solace and strength in her faith during a difficult time, leading her to a deeper understanding of God's love.",
      image: 'https://images.unsplash.com/photo-1637849312643-fce4b6702a1a?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'sarahs-journey'
    },
    {
      title: "David's Path to Purpose",
      text: "David discovered his purpose through prayer and reflection, finding guidance and direction in his life.",
      image: 'https://images.unsplash.com/photo-1676807823421-1a6a6d280166?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'davids-path'
    },
    {
      title: "Community of Faith",
      text: "Sharing experiences and supporting each other, this community found hope and encouragement in their shared faith.",
      image: 'https://images.unsplash.com/photo-1681936490173-92b7bf63f264?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'community-faith'
    },
    {
      title: "Finding Light in Darkness",
      text: "Through spiritual guidance, Michael overcame depression and found new meaning in his life.",
      image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'light-in-darkness'
    },
    {
      title: "Healing Through Prayer",
      text: "After a serious illness, Emily experienced remarkable recovery that strengthened her faith.",
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      slug: 'healing-prayer'
    }
  ];

  return (
    <section className="relative min-h-screen bg-slate-50 font-['Newsreader',_'Noto_Sans',_sans-serif]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-12 space-y-8">
          <header className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-[#0d161c] sm:text-4xl">
              Stories of Hope
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#497c9c]">
              Discover how faith has transformed lives and brought light in difficult times
            </p>
          </header>
        </div>
      </div>

      <div className="relative w-full h-[80vh] max-h-[800px]">
        {navigationReady && (
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1200}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            onAutoplayTimeLeft={(swiper, time, progress) => {
              const progressBar = document.getElementById('progress-bar')
              if (progressBar) {
                progressBar.style.width = `${progress * 100}%`
              }
            }}
            slidesPerView={1}
            loop={true}
            className="h-full w-full"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8">
                  <div className="max-w-4xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                      {story.title}
                    </h3>
                    <p className="text-xl sm:text-2xl text-white mb-10 max-w-3xl mx-auto">
                      {story.text}
                    </p>
                    <Link
                      href={`/stories/${story.slug}`}
                      className="inline-block bg-white text-[#0d161c] font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg"
                    >
                      Read Full Story
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Progress Bar Timer */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/30 overflow-hidden">
          <div id="progress-bar" className="h-full bg-white transition-all duration-0 w-0" />
        </div>

        {/* Navigation Arrows */}
        <div ref={prevRef} className="hero-swiper-button-prev absolute left-4 top-1/2 z-30 -translate-y-1/2 cursor-pointer bg-white/30 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/50 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div ref={nextRef} className="hero-swiper-button-next absolute right-4 top-1/2 z-30 -translate-y-1/2 cursor-pointer bg-white/30 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/50 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <FindHopeContact />
      </div>
    </section>
  )
}
