'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className={`text-sm tracking-[0.4em] text-[#a78bfa] mb-6 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            ARQUITECTURA & DISEÑO
          </p>
          <h2 className={`text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight ${mounted ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Creando espacios<br />
            <span className="text-[#a78bfa]">que inspiran</span>
          </h2>
          <p className={`text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Diseño arquitectónico contemporáneo con enfoque en la sostenibilidad, 
            funcionalidad y estética minimalista. Donde cada espacio cuenta una historia.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${mounted ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <Link href="/proyectos" className="inline-block px-10 py-4 bg-[#7c3aed] text-white tracking-widest text-sm hover:bg-[#5b21b6] transition-all duration-300 hover:scale-105">
              VER PROYECTOS
            </Link>
            <Link href="/contacto" className="inline-block px-10 py-4 border border-white text-white tracking-widest text-sm hover:bg-white hover:text-[#1a1a1a] transition-all duration-300">
              CONTACTAR
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-[#7c3aed] mb-4">PORTAFOLIO</p>
            <h3 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">Proyectos Destacados</h3>
            <div className="w-20 h-1 bg-[#7c3aed] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'Villa Sol',
                location: 'Lima, Perú',
                category: 'Residencial',
                image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
                description: 'Casa moderna con vistas al mar, diseño minimalista y materiales sostenibles.'
              },
              {
                id: 2,
                title: 'Torre Nexus',
                location: 'Miraflores, Lima',
                category: 'Comercial',
                image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
                description: 'Edificio de oficinas con fachada ventilada y sistemas de eficiencia energética.'
              },
              {
                id: 3,
                title: 'Loft Centro',
                location: 'Barranco, Lima',
                category: 'Interiorismo',
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
                description: 'Renovación de departamento histórico con toques contemporáneos.'
              }
            ].map((project, index) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-5 left-5 right-5 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs tracking-widest opacity-80">{project.category}</p>
                    <p className="text-sm mt-1">{project.description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-light text-[#1a1a1a] group-hover:text-[#7c3aed] transition-colors">{project.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{project.location}</p>
                  </div>
                  <span className="text-xs tracking-widest text-gray-400 border border-gray-200 px-3 py-1">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/proyectos" className="inline-block px-10 py-4 border border-[#7c3aed] text-[#7c3aed] tracking-widest text-sm hover:bg-[#7c3aed] hover:text-white transition-all duration-300">
              VER TODOS LOS PROYECTOS
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-[#f8f7ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-[#7c3aed] mb-4">NUESTROS SERVICIOS</p>
            <h3 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">Qué Hacemos</h3>
            <div className="w-20 h-1 bg-[#7c3aed] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Diseño Arquitectónico',
                description: 'Proyectos desde la concepción inicial hasta los planos ejecutivos, pasando por anteproyectos y direcciones de obra.',
                icon: '📐'
              },
              {
                title: 'Interiorismo',
                description: 'Diseño de interiores que transforman espacios en experiencias únicas, personales y funcionales.',
                icon: '🎨'
              },
              {
                title: 'Renovación & Remodelación',
                description: 'Transformación de espacios existentes conservando su esencia pero actualizando su funcionalidad.',
                icon: '🔧'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <span className="text-4xl mb-6 block">{service.icon}</span>
                <h4 className="text-xl font-light text-[#1a1a1a] mb-4 group-hover:text-[#7c3aed] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/servicios" className="inline-block px-10 py-4 border border-[#7c3aed] text-[#7c3aed] tracking-widest text-sm hover:bg-[#7c3aed] hover:text-white transition-all duration-300">
              VER TODOS LOS SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-[#7c3aed] mb-4">BLOG</p>
            <h3 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">Últimos Artículos</h3>
            <div className="w-20 h-1 bg-[#7c3aed] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                slug: 'tendencias-arquitectura-sostenible-2026',
                title: 'Tendencias en Arquitectura Sostenible 2026',
                date: '8 de Marzo, 2026',
                image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
                excerpt: 'Descubre las últimas innovaciones en diseño sostenible que están transformando la arquitectura moderna.'
              },
              {
                slug: 'como-elegir-terreno-perfecto-casa',
                title: 'Cómo elegir el terreno perfecto para tu casa',
                date: '1 de Marzo, 2026',
                image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
                excerpt: 'Guía completa sobre los factores clave que debes considerar antes de comprar el terreno ideal.'
              },
              {
                slug: 'minimalismo-arquitectura-moderna',
                title: 'El minimalismo en la arquitectura moderna',
                date: '22 de Febrero, 2026',
                image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
                excerpt: 'Explora cómo el diseño minimalista crea espacios que respiran y人的生活质量。'
              }
            ].map((post, index) => (
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
                <h4 className="text-xl font-light text-[#1a1a1a] group-hover:text-[#7c3aed] transition-colors mb-2">
                  {post.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/blog" className="inline-block px-10 py-4 border border-[#7c3aed] text-[#7c3aed] tracking-widest text-sm hover:bg-[#7c3aed] hover:text-white transition-all duration-300">
              VER TODOS LOS ARTÍCULOS
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-white/70 mb-10 leading-relaxed">
            Nos encantaría conocer tu visión y ayudarte a hacerla realidad. 
            Contáctanos para una consulta gratuita.
          </p>
          <Link href="/contacto" className="inline-block px-10 py-4 bg-[#7c3aed] text-white tracking-widest text-sm hover:bg-[#5b21b6] transition-all duration-300 hover:scale-105">
            CONTACTAR AHORA
          </Link>
        </div>
      </section>
    </div>
  );
}
