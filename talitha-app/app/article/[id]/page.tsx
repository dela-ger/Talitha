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
      <div className="min-h-screen flex items-center justify-center text-xl text-lime-700 bg-gradient-to-b from-lime-50 to-amber-50">
        Article not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-amber-50 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/article" 
            className="text-lime-700 hover:text-lime-800 transition-colors flex items-center font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Articles
          </Link>
        </div>

        {/* Article Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Article Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-3xl sm:text-4xl font-serif font-normal text-white leading-tight">
                {article.title}
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 sm:p-8">
            {/* Meta Information */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-lime-700">
              <div className="flex items-center mb-3 sm:mb-0">
                <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-800 font-bold mr-3">
                  {article.author.charAt(0)}
                </div>
                <span className="font-medium">{article.author}</span>
              </div>
              <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full">
                {new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>

            {/* Content */}
            <div className="prose max-w-none text-lime-800/90 leading-relaxed space-y-4">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Spiritual Emphasis */}
            <div className="mt-10 p-6 bg-lime-50 rounded-xl border-l-4 border-lime-600">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-700 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="text-lime-800 italic text-lg font-serif">
                  &quot;For the word of God is living and active, sharper than any two-edged sword, 
                  piercing to the division of soul and of spirit, of joints and of marrow, 
                  and discerning the thoughts and intentions of the heart.&quot;
                  <br />
                  <span className="not-italic font-semibold text-lime-700 block mt-2">
                    Hebrews 4:12
                  </span>
                </p>
              </div>
            </div>

            {/* Share and Prayer Section */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-lime-600 text-white py-3 rounded-lg hover:bg-lime-700 transition-colors font-medium flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share This Article
              </button>
              <button className="flex-1 border-2 border-lime-600 text-lime-700 py-3 rounded-lg hover:bg-lime-50 transition-colors font-medium flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Request Prayer
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-lime-800 mb-6">
            More to Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {christianArticles
              .filter(a => a.id !== article.id)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link 
                  key={relatedArticle.id} 
                  href={`/article/${relatedArticle.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-lime-800 mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-lime-700/80 text-sm">
                      {new Date(relatedArticle.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}