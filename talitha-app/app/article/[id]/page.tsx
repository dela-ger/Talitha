"use client";
import { useParams } from "next/navigation";
import christianArticles from "../../../data";
import Image from "next/image";
import Link from "next/link";

export default function ArticleDetail() {
  const params = useParams();
  const { id } = params;
  const article = christianArticles.find((item) => item.id === parseInt(id as string));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Article not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Back Button */}
        <div className="mb-4 px-6 pt-6">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-lime-600 transition-colors flex items-center"
          >
            <span className="mr-1">←</span>
            Back to Articles
          </Link>
        </div>

        {/* Article Image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-8">
          {/* Meta Information */}
          <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
            <span className="font-medium">{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Content */}
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Spiritual Emphasis */}
          <div className="mt-8 p-4 bg-lime-50 rounded-lg border-l-4 border-lime-600">
            <p className="text-lime-800 italic">
              `For the word of God is living and active...` - Hebrews 4:12
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}