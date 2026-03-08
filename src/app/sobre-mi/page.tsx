'use client';

const testimonials = [
  {
    name: 'María Elena Vásquez',
    role: 'CEO, TechStart Peru',
    text: 'Tamara transformó completamente nuestras oficinas. Su visión y atención al detalle crearon un espacio donde nuestro equipo ama trabajar.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  },
  {
    name: 'Carlos Mendoza',
    role: 'Empresario',
    text: 'Nuestra villa en Lima fue más allá de nuestras expectativas. Tamara entiende perfectamente cómo crear espacios que se sienten como hogar.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  },
  {
    name: 'Patricia Chu',
    role: 'Directora, Galería Arte Nuevo',
    text: 'El diseño de nuestra galería fusiona perfectamente el arte con la arquitectura. Un espacio que realmente inspira.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  }
];

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 bg-[#f8f7ff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] text-[#7c3aed] mb-4">SOBRE MÍ</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">Tamara Farah</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Arquitecta apasionada por crear espacios que inspiran y mejoran la calidad de vida de las personas.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" 
                  alt="Tamara Farah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#7c3aed] text-white p-8 hidden md:block">
                <p className="text-4xl font-light">10+</p>
                <p className="text-sm tracking-widest mt-1">Años de experiencia</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-8">
                Arquitectura con propósito
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Con más de 10 años de experiencia en el sector de la arquitectura y el diseño de interiores, 
                me especializo en crear espacios que equilibran forma, función y sentimiento. Cada proyecto 
                es una oportunidad para transformar visiones en realidad tangible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mi enfoque integral abarca desde el diseño conceptual hasta la ejecución final, siempre con 
                un compromiso firme hacia la sostenibilidad y la excelencia craftsmanship. Creo firmemente 
                que la buena arquitectura debe ser accesible y transformar positivamente la vida de las personas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                Cuando no estoy diseñando, me puedes encontrar explorando nuevos proyectos arquitectónicos, 
                estudiando tendencias de diseño sostenible, o compartiendo conocimientos con la comunidad arquitectónica.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl text-[#7c3aed] font-light">50+</p>
                  <p className="text-sm text-gray-400 mt-2">Proyectos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl text-[#7c3aed] font-light">100%</p>
                  <p className="text-sm text-gray-400 mt-2">Satisfacción</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl text-[#7c3aed] font-light">15</p>
                  <p className="text-sm text-gray-400 mt-2">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#f8f7ff]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] text-[#7c3aed] mb-4">FILOSOFÍA</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-8">
            Mi enfoque de diseño
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            &ldquo;Creo que la arquitectura tiene el poder de transformar vidas. Cada espacio que diseño 
            busca crear una conexión emocional con quienes lo habitan, combinando estética, funcionalidad 
            y sostenibilidad de manera armónica.&rdquo;
          </p>
          <p className="text-[#7c3aed] text-lg font-light">— Tamara Farah</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#a78bfa] mb-4">TESTIMONIOS</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">Qué dicen mis clientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-light">{testimonial.name}</p>
                    <p className="text-[#a78bfa] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-gray-500 mb-8">
            Si te gustaría discutir tu proyecto o simplemente conocer más sobre mi trabajo, no dudes en contactarme.
          </p>
          <a 
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#7c3aed] text-white tracking-widest text-sm hover:bg-[#5b21b6] transition-all duration-300"
          >
            CONTACTAR
          </a>
        </div>
      </section>
    </div>
  );
}
