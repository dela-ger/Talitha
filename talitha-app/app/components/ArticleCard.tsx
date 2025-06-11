"use client"
import React from 'react';
import { useArticles } from '../context/ArticleContext';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard() {
  const { articles } = useArticles();

  return (
    <div className="py-8 px-4 sm:py-12 sm:px-6 lg:px-8 xl:px-10" id='articles'>
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-3 sm:text-4xl sm:mb-4">
          Recent Articles
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Explore our latest teachings and spiritual insights
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {articles.slice(0, 3).map((article) => (
          <article 
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg 
                     transition-shadow duration-300 flex flex-col"
          >
            {/* Image Container with Aspect Ratio */}
            <div className="relative h-48 w-full sm:h-52 md:h-48 lg:h-56">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority={false}
              />
            </div>

            {/* Content Container */}
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-900 mb-2 
                            sm:text-xl lg:text-lg xl:text-xl">
                {article.title}
              </h2>
              
              <p className="text-gray-600 line-clamp-3 mb-4 text-sm 
                           sm:text-base lg:text-sm xl:text-base flex-1">
                {article.content}
              </p>

              {/* Author & Date */}
              <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between 
                            sm:items-center sm:space-y-0 text-xs sm:text-sm">
                <span className="text-gray-500 font-medium">{article.author}</span>
                <span className="text-gray-400">{article.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* More Articles Button */}
      <div className="mt-12 flex justify-center">
        <Link 
          href="/article"
          className="bg-lime-600 text-white px-6 py-3 rounded-lg hover:bg-lime-700 
                   transition-colors text-sm sm:text-base"
        >
          Explore More Articles
        </Link>
      </div>
    </div>
  );
}