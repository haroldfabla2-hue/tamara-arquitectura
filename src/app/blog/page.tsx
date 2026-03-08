'use client';

import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 bg-[#f8f7ff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] text-[#7c3aed] mb-4">BLOG</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">Blog de Arquitectura</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Artículos sobre diseño arquitectónico, tendencias, consejos y reflexiones sobre el mundo de la arquitectura y el diseño de interiores.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <p className="text-xs tracking-widest text-[#7c3aed] mb-2">{post.date}</p>
                <h2 className="text-xl font-light text-[#1a1a1a] group-hover:text-[#7c3aed] transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            ¿Te interesa recibir nuestro contenido?
          </h2>
          <p className="text-white/70 mb-8">
            Suscríbete a nuestro newsletter para recibir los últimos artículos y noticias sobre arquitectura y diseño.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Tu email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#7c3aed]"
            />
            <button className="px-8 py-4 bg-[#7c3aed] text-white tracking-widest text-sm hover:bg-[#5b21b6] transition-all duration-300">
              SUSCRIBIRSE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
