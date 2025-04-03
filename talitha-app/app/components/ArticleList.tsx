"use client"
import React from 'react';
import { useArticles } from '../context/ArticleContext';
import Image from 'next/image';
import Link from 'next/link';

function ArticleList() {
    const { articles } = useArticles();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ml-40 mr-40">
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

                {/* Articles List */}
                <div className="flex flex-col space-y-8">
                    {articles.map(article => (
                        <Link 
                            href={`/article/${article.id}`}
                            key={article.id}
                            className="group flex flex-col sm:flex-row items-start gap-6 hover:bg-white/50 p-4 rounded-lg transition-colors"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 w-full sm:w-64 sm:h-40 flex-shrink-0">
                                <Image 
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 640px) 100vw, 256px"
                                    priority={false}
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-lime-700 transition-colors">
                                    {article.title}
                                </h3>
                                
                                <p className="text-gray-600 line-clamp-3 mb-4">
                                    {article.content}
                                </p>

                                {/* Author and Date */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 space-y-2 sm:space-y-0">
                                    <span className="font-medium">{article.author}</span>
                                    <span>{new Date(article.date).toLocaleDateString()}</span>
                                </div>

                                {/* Read More */}
                                <div className="mt-4">
                                    <span className="text-lime-700 font-medium group-hover:text-lime-800 transition-colors">
                                        Continue Reading →
                                    </span>
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