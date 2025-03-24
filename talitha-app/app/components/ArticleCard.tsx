"use client"
import React from 'react';
import { useArticles } from '../context/ArticleContext';

export default function ArticleCard() {
  const { articles } = useArticles()

  return (
    <>
        <div>
          <div className='flex justify-center items-center mb-20'>
            <h1 className='text-4xl'>Recent Article</h1>
          </div>
          <div className='flex flex-wrap justify-around border border-red-500'>
            {articles.map((article) => (
                <div key={article.id} className='border border-red-500 w-100 h-52'  >
                  <h2>{article.title}</h2>
                  <p>{article.content.substring(0, 80)}...</p>
                  <p>{article.author}</p>
                </div>
              ) )}
          </div>
            
        </div>
    </>
  )
}