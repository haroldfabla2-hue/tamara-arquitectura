'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Imágenes de Unsplash
const HERO_IMAGE = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80';

const PROJECTS = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Residencia Moderna',
    location: 'Lima, Perú',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Oficina Corporate',
    location: 'Miraflores, Lima',
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80',
    title: 'Villa Playera',
    location: 'Costa Verde, Lima',
  },
  {
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    title: 'Departamento de Lujo',
    location: 'San Isidro, Lima',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    title: 'Casa de Campo',
    location: 'Chaclacayo, Lima',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    title: 'Edificio Comercial',
    location: 'Centro de Lima',
  },
];

const STUDIO_IMAGE = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-purple-100/50"
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-lg font-light tracking-[0.35em] text-[#1a1a1a]">
            TAMARA FARAH
          </h1>
          <nav className="hidden md:flex gap-10 text-xs tracking-[0.15em] text-gray-400">
            <a href="#proyectos" className="hover:text-[#7c3aed] transition-all duration-300 hover:scale-105">
              PROYECTOS
            </a>
            <a href="#estudio" className="hover:text-[#7c3aed] transition-all duration-300 hover:scale-105">
              ESTUDIO
            </a>
            <a href="#contacto" className="hover:text-[#7c3aed] transition-all duration-300 hover:scale-105">
              CONTACTO
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Hero con Parallax */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Imagen de fondo con parallax */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          />
          {/* Gradient overlay sofisticado */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-violet-900/20" />
        </motion.div>

        {/* Contenido del hero */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 max-w-5xl mx-auto px-8 text-center"
        >
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm tracking-[0.4em] text-white/90 mb-6 font-light"
          >
            ARQUITECTURA & DISEÑO
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1]"
          >
            Creando espacios<br />
            <span className="bg-gradient-to-r from-purple-300 to-violet-200 bg-clip-text text-transparent">
              que inspiran
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed"
          >
            Diseño arquitectónico contemporáneo con enfoque en la sostenibilidad, 
            funcionalidad y estética minimalista.
          </motion.p>
          
          <motion.a 
            href="#proyectos"
            initial={{ opacity: 0, y: 40 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white tracking-[0.2em] text-xs hover:bg-white hover:text-purple-900 transition-all duration-500"
          >
            VER PROYECTOS
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h3 className="text-xs tracking-[0.4em] text-[#7c3aed] mb-4 font-medium">PORTAFOLIO</h3>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">Proyectos Destacados</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] mb-5 overflow-hidden rounded-sm">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-lg font-light text-[#1a1a1a] mb-1 group-hover:text-[#7c3aed] transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-400 font-light">{project.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estudio */}
      <section id="estudio" className="py-32 bg-gradient-to-br from-[#fafafa] to-purple-50/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xs tracking-[0.4em] text-[#7c3aed] mb-4 font-medium">EL ESTUDIO</h3>
              <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8">
                Una década de excelencia arquitectónica
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                Con más de 10 años de experiencia, Tamara Farah Arquitectura se especializa 
                en crear espacios que equilibran forma, función y sentimiento. Cada proyecto 
                es una oportunidad para transformar visiones en realidad tangible.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: '10+', label: 'Años de experiencia' },
                  { number: '50+', label: 'Proyectos completados' },
                  { number: '100%', label: 'Clientes satisfechos' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl md:text-4xl bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent font-light">
                      {stat.number}
                    </p>
                    <p className="text-xs text-gray-400 mt-2 tracking-wide">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${STUDIO_IMAGE})` }}
                />
              </div>
              {/* Elemento decorativo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#7c3aed]/30 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xs tracking-[0.4em] text-[#7c3aed] mb-4 font-medium">CONTACTO</h3>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-gray-500 mb-10 text-lg font-light">
              ¿Tienes un proyecto en mente? Me encantaría conocer tu visión y ayudarte a hacerla realidad.
            </p>
            <motion.a 
              href="mailto:hola@tamarafarah.com"
              whileHover={{ scale: 1.02 }}
              className="inline-block text-xl text-[#1a1a1a] hover:text-[#7c3aed] transition-all duration-300 pb-1 border-b border-transparent hover:border-[#7c3aed]"
            >
              hola@tamarafarah.com
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm tracking-[0.2em] text-white/80">TAMARA FARAH ARQUITECTURA</p>
          <p className="text-xs text-gray-500">© 2026 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
