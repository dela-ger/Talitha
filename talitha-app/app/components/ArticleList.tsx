"use client"

import React from 'react';
import { useArticles } from '../context/ArticleContext';
import Image from 'next/image';
import Link from 'next/link';

function ArticleList() {
  const { articles } = useArticles();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Spiritual Insights
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover teachings to strengthen your faith journey
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-8">
          {articles.map(article => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-72">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                  {article.content}
                </p>
                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">{article.author}</span>
                  <span>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                {/* Read More Button */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    className="text-lime-700 hover:text-lime-800 font-medium"
                    // onClick={(e) => e.preventDefault()} // Prevent link navigation
                  >
                    Read Full Article →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleList;