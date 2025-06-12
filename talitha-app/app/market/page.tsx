import React from 'react';
import ProductCard from '../components/ProductCard';
import CartLink from '../components/CartLink';

export default function Market() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-amber-50 overflow-x-hidden">
      <CartLink />
      {/* Hero Section */}
      <div className="relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-100/30 to-amber-100/30 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto py-16 md:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-lime-800 mb-6 leading-tight">
            Discover Resources to Deepen Your Faith Journey
          </h1>
          <p className="text-base sm:text-lg text-lime-700/90 mb-10 max-w-2xl mx-auto">
            Explore thoughtfully curated books, music, and gifts that inspire spiritual growth and bring you closer to God
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button className="bg-lime-600 hover:bg-lime-700 text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
              Browse Collections
            </button>
            <button className="bg-white text-lime-700 border border-lime-300 hover:bg-lime-50 font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm sm:text-base">
              View New Arrivals
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-lime-800 mb-4">
            Spirit-Lifting Favorites
          </h2>
          <p className="text-lime-700/90 max-w-2xl mx-auto text-sm sm:text-base">
            Resources our community loves and recommends
          </p>
        </div>

        {/* Product Cards */}
        <div className="w-full">
          <ProductCard />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-lime-100/50 py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-lime-800 mb-4">
              Blessed by Our Community
            </h2>
            <p className="text-lime-700/90 max-w-xl mx-auto text-sm sm:text-base">
              Hear how these resources have impacted spiritual journeys
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime-200 flex items-center justify-center text-lime-800 font-bold mr-4 text-sm sm:text-base">
                SJ
              </div>
              <div>
                <h4 className="font-medium text-lime-800 text-base sm:text-lg">Sarah J.</h4>
                <p className="text-lime-700/80 text-xs sm:text-sm">North Carolina</p>
              </div>
            </div>
            <p className="text-lime-700 italic text-base sm:text-lg">
              &quot;The Daily Grace Devotional has transformed my morning quiet time. The reflections are insightful yet accessible, helping me start each day centered on God&apos;s truth.&quot;
            </p>
            <div className="flex mt-4 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
