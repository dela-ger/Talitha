"use client"
import React from 'react';
import { useArticles } from '../context/ArticleContext';

export default function ArticleCard() {
  const { articles } = useArticles()

  return (
    <>
        <div>
          <div>
            <h1 className='text-4xl'>Recent Article</h1>
          </div>
          
            {articles.map((article) => (
              <div key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.content.substring(0, 80)}...</p>
                <p>{article.author}</p>
              </div>
            ) )}
        </div>
    </>
  )
}