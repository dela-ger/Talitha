'use client'

import Image from 'next/image'
import FindHopeContact from './FindHopeContact'
// import Link from 'next/link'
// import FindHopeContact from './FindHopeContact'

export default function FindHopeSection() {
  return (
    <section className="relative min-h-screen bg-slate-50 font-['Newsreader',_'Noto_Sans',_sans-serif]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Stories of Hope Section */}
        <div className="mb-20 space-y-8">
          <header className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-[#0d161c] sm:text-4xl">
              Stories of Hope
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#497c9c]">
              Discover how faith has transformed lives and brought light in difficult times
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sarah's Journey to Peace",
                text: "Sarah found solace and strength in her faith during a difficult time, leading her to a deeper understanding of God's love.",
                image: 'https://images.unsplash.com/photo-1637849312643-fce4b6702a1a?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: "David's Path to Purpose",
                text: "David discovered his purpose through prayer and reflection, finding guidance and direction in his life.",
                image: 'https://images.unsplash.com/photo-1676807823421-1a6a6d280166?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: "Community of Faith",
                text: "Sharing experiences and supporting each other, this community found hope and encouragement in their shared faith.",
                image: 'https://images.unsplash.com/photo-1681936490173-92b7bf63f264?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
            ].map((story, index) => (
              <article 
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#0d161c]">
                    {story.title}
                  </h3>
                  <p className="text-[#497c9c] leading-relaxed">
                    {story.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        {/* <div className="rounded-2xl bg-[#f8fafc] px-8 py-12 text-center shadow-inner sm:px-16">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold text-[#0d161c] sm:text-4xl">
              You&apos;re Not Alone
            </h2>
            <p className="mx-auto text-lg text-[#497c9c]">
              Our compassionate team is here to walk with you through life&apos;s challenges. 
              Reach out for prayer, guidance, or simply someone to listen.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-[#5bc112] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#4aa00f] hover:shadow-md"
            >
              Connect with Support
            </Link>
            <p className="text-sm text-[#7a9eb3] mt-4">
              Available 24/7 • Confidential • Faith-Based
            </p>
          </div>
        </div> */}
        < FindHopeContact />
      </div>
    </section>
  )
}