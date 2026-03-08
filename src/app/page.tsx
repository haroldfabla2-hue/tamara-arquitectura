'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-light tracking-[0.2em] text-[#1a1a1a]">
            TAMARA FARAH
          </h1>
          <nav className="hidden md:flex gap-8 text-sm tracking-widest text-gray-500">
            <a href="#proyectos" className="hover:text-[#7c3aed] transition-colors">PROYECTOS</a>
            <a href="#estudio" className="hover:text-[#7c3aed] transition-colors">ESTUDIO</a>
            <a href="#contacto" className="hover:text-[#7c3aed] transition-colors">CONTACTO</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className={`text-sm tracking-[0.3em] text-[#7c3aed] mb-6 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
            ARQUITECTURA & DISEÑO
          </p>
          <h2 className={`text-5xl md:text-7xl font-light text-[#1a1a1a] mb-8 leading-tight ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Creando espacios<br />
            <span className="text-[#7c3aed]">que inspiran</span>
          </h2>
          <p className={`text-gray-500 max-w-xl mx-auto mb-12 ${mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Diseño arquitectónico contemporáneo con enfoque en la sostenibilidad, 
            funcionalidad y estética minimalista.
          </p>
          <a href="#proyectos" className={`inline-block px-8 py-3 border border-[#7c3aed] text-[#7c3aed] tracking-widest text-sm hover:bg-[#7c3aed] hover:text-white transition-all duration-300 ${mounted ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            VER PROYECTOS
          </a>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-sm tracking-[0.3em] text-[#7c3aed] mb-16 text-center">PROYECTOS</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Proyecto 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#7c3aed]/10 to-[#a78bfa]/10 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-4xl text-[#7c3aed]/20">□</span>
                </div>
              </div>
              <h4 className="text-lg font-light mb-1">Residencia Moderna</h4>
              <p className="text-sm text-gray-400">Lima, Perú</p>
            </div>
            {/* Proyecto 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#7c3aed]/10 to-[#a78bfa]/10 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-4xl text-[#7c3aed]/20">□</span>
                </div>
              </div>
              <h4 className="text-lg font-light mb-1">Oficina Corporate</h4>
              <p className="text-sm text-gray-400">Miraflores, Lima</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estudio */}
      <section id="estudio" className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-sm tracking-[0.3em] text-[#7c3aed] mb-8">EL ESTUDIO</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Con más de 10 años de experiencia, Tamara Farah Arquitectura se especializa 
            en crear espacios que equilibran forma, función y sentimiento. Cada proyecto 
            es una oportunidad para transformar visiones en realidad tangible.
          </p>
          <div className="flex justify-center gap-12 text-center">
            <div>
              <p className="text-3xl text-[#7c3aed] font-light">10+</p>
              <p className="text-sm text-gray-400 mt-2">Años de experiencia</p>
            </div>
            <div>
              <p className="text-3xl text-[#7c3aed] font-light">50+</p>
              <p className="text-sm text-gray-400 mt-2">Proyectos completados</p>
            </div>
            <div>
              <p className="text-3xl text-[#7c3aed] font-light">100%</p>
              <p className="text-sm text-gray-400 mt-2">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-sm tracking-[0.3em] text-[#7c3aed] mb-8">CONTACTO</h3>
          <p className="text-gray-600 mb-8">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo hacerlo realidad.
          </p>
          <a href="mailto:hola@tamarafarah.com" className="text-xl text-[#1a1a1a] hover:text-[#7c3aed] transition-colors">
            hola@tamarafarah.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm tracking-widest">TAMARA FARAH ARQUITECTURA</p>
          <p className="text-xs text-gray-500">© 2026 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
