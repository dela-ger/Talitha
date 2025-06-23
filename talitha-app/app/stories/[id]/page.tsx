import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
// import { stories } from './../../data/stories';

// Generate static params for all stories at build time
export async function generateStaticParams() {
  try {
    const { data: stories, error } = await supabase
      .from('stories')
      .select('id');
    
    if (error) {
      console.error('Error fetching story IDs:', error);
      return [];
    }
    
    return stories.map((story) => ({
      id: story.id.toString(),
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

// Generate metadata for each story page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  try {
    const { data: story } = await supabase
      .from('stories')
      .select('title, content')
      .eq('id', id)
      .single();

    if (!story) {
      return {
        title: 'Story Not Found | Talitha',
        description: 'The requested story could not be found.'
      };
    }

    // Create a short description from the first paragraph
    const description = story.content
      ? story.content.split('\n\n')[0].substring(0, 160) + '...'
      : 'A story of hope from Talitha';

    return {
      title: `${story.title} | Talitha Stories`,
      description,
      openGraph: {
        title: story.title,
        description,
        type: 'article',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Story | Talitha',
      description: 'A story of hope from Talitha'
    };
  }
}

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params before using them
  const { id } = await params;
  
  const { data: story, error} = await supabase
    .from('stories')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching story:', error);
    return notFound();
  }

  // const story = stories.find((s) => s.id === parseInt(params.id));

  if (!story) return notFound();

  // Split content into paragraphs
  const paragraphs: string[] = story.content.split('\n\n');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-lime-50 font-['Newsreader','Noto_Sans',sans-serif]">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-lime-700 hover:text-lime-600 transition-colors font-medium group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            All Stories of Hope
          </Link>
        </div>

        {/* Story Card */}
        <article className="bg-white rounded-xl shadow-xl overflow-hidden border border-lime-100 transition-all duration-300 hover:shadow-2xl">
          {/* Hero Image */}
          <div className="relative h-96 w-full">
            <Image
              src={story.image_url}
              alt={story.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#0d161c] mb-2">
                  {story.title}
                </h1>
                <div className="flex items-center space-x-3">
                  {story.author && (
                    <span className="inline-flex items-center text-lime-800 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      {story.author}
                    </span>
                  )}
                  {story.date && (
                    <span className="inline-flex items-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {new Date(story.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="bg-lime-100 text-lime-800 px-3 py-1.5 rounded-full text-sm font-medium">
                Story of Hope
              </div>
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 border-t border-lime-100 pt-6">
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Sharing/CTA */}
        <div className="mt-12 bg-lime-50 rounded-xl p-6 border border-lime-100">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-lime-800 mb-4">
              Was this story meaningful to you?
            </h3>
            <p className="text-gray-600 mb-6">
              Share it with someone who might need hope today
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-lime-600 hover:bg-lime-700 text-white px-5 py-2.5 rounded-full transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share
              </button>
              <Link 
                href="/" 
                className="border-2 border-lime-600 text-lime-700 hover:bg-lime-600 hover:text-white px-5 py-2.5 rounded-full transition-colors"
              >
                Read More Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}