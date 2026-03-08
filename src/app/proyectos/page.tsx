'use client';

import { useState } from 'react';

const projects = [
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
  },
  {
    id: 4,
    title: 'Casa Garden',
    location: 'Santiago de Surco',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Vivienda unifamiliar con jardín vertical y piscina infinity.'
  },
  {
    id: 5,
    title: 'Urban Office',
    location: 'San Isidro, Lima',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'Espacio de trabajo colaborativo con diseño biofílico.'
  },
  {
    id: 6,
    title: 'Reserva Vista',
    location: 'Cerro Azul, Lima',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    description: 'Casa de campo con arquitectura contemporánea integrada al paisaje.'
  },
  {
    id: 7,
    title: 'Espacio Wellness',
    location: 'Lima Centro',
    category: 'Interiorismo',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    description: 'Centro de spa y bienestar con iluminación natural y materiales orgánicos.'
  },
  {
    id: 8,
    title: 'Edificio Horizonte',
    location: 'Callao, Lima',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    description: 'Torres mixtas con zonas comerciales y residenciales.'
  }
];

const categories = ['Todos', 'Residencial', 'Comercial', 'Interiorismo'];

export default function Proyectos() {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 bg-[#f8f7ff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] text-[#7c3aed] mb-4">PORTAFOLIO</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">Proyectos</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Una selección de nuestros proyectos más destacados, donde cada espacio cuenta una historia única de diseño, funcionalidad y belleza.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-[#7c3aed] text-white' 
                    : 'border border-gray-200 text-gray-500 hover:border-[#7c3aed] hover:text-[#7c3aed]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
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
                    <h3 className="text-xl font-light text-[#1a1a1a] group-hover:text-[#7c3aed] transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{project.location}</p>
                  </div>
                  <span className="text-xs tracking-widest text-gray-400 border border-gray-200 px-3 py-1">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
