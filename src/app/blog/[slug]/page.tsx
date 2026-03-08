'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-[#1a1a1a] mb-4">Artículo no encontrado</h1>
          <Link href="/blog" className="text-[#7c3aed] hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  // Convert markdown-like content to simple paragraphs
  const contentParagraphs = post.content.split('\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al blog
            </Link>
            <p className="text-[#a78bfa] text-sm tracking-widest mb-4">{post.date}</p>
            <h1 className="text-3xl md:text-5xl font-light text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xl text-gray-500 leading-relaxed mb-12">
            {post.excerpt}
          </p>
          
          <div className="prose prose-lg max-w-none">
            {contentParagraphs.map((paragraph, index) => {
              const trimmed = paragraph.trim();
              
              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-light text-[#1a1a1a] mt-12 mb-6">
                    {trimmed.replace('## ', '')}
                  </h2>
                );
              }
              
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-light text-[#1a1a1a] mt-8 mb-4">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              
              if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                return (
                  <li key={index} className="text-gray-600 ml-4 mb-2">
                    {trimmed.replace(/^[*-] /, '')}
                  </li>
                );
              }

              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return (
                  <p key={index} className="text-gray-600 font-medium mt-8 mb-4">
                    {trimmed.replace(/\*\*/g, '')}
                  </p>
                );
              }
              
              if (trimmed.match(/^\d+\./)) {
                return (
                  <div key={index} className="text-gray-600 ml-4 mb-2">
                    {trimmed}
                  </div>
                );
              }
              
              if (trimmed.length > 0) {
                return (
                  <p key={index} className="text-gray-600 leading-relaxed mb-6">
                    {trimmed}
                  </p>
                );
              }
              
              return null;
            })}
          </div>

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-gray-500 mb-4">Compartir este artículo:</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-gray-200 text-gray-600 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors text-sm">
                Facebook
              </button>
              <button className="px-4 py-2 border border-gray-200 text-gray-600 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors text-sm">
                Twitter
              </button>
              <button className="px-4 py-2 border border-gray-200 text-gray-600 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors text-sm">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* More Posts */}
      <section className="py-16 bg-[#f8f7ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-light text-[#1a1a1a] mb-8">Otros artículos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-xs tracking-widest text-[#7c3aed] mb-2">{relatedPost.date}</p>
                  <h4 className="text-lg font-light text-[#1a1a1a] group-hover:text-[#7c3aed] transition-colors">
                    {relatedPost.title}
                  </h4>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
