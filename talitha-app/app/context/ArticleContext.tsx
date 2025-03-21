"use client"

import christianArticles from '@/data'
import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the type for the context value
interface ArticleContextType {
  articles: typeof christianArticles; // Use the type of christianArticles
  setArticles: React.Dispatch<React.SetStateAction<typeof christianArticles>>;
}

// Provide a default value for the context
const ArticleContext = createContext<ArticleContextType>({
  articles: christianArticles, // Default value for articles
  setArticles: () => {}, // Default function for setArticles
});

interface ArticleProviderProps {
  children: ReactNode;
}
// create context
// const ArticleContext = createContext()

export default function ArticleProvider({ children }: ArticleProviderProps) {
    // We store card data here
    const [articles, setArticles] = useState(christianArticles)
    return (
    <>
      <ArticleContext.Provider value={{ articles, setArticles }}>
        {children}
      </ArticleContext.Provider>
    </>
  )
}

// now we create a custom hook to use the new Context
export function useArticles() {
  return useContext(ArticleContext)
}