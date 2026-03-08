'use client';

const services = [
  {
    id: 'residencial',
    title: 'Diseño Arquitectónico Residencial',
    description: 'Creamos hogares que reflejan tu estilo de vida y personalidad. Desde casas unifamiliares hasta villas de lujo, cada proyecto se diseña pensando en la comodidad, funcionalidad y estética.',
    features: [
      'Diseño de casas unifamiliares y multifamiliares',
      'Viviendas de lujo y casas club',
      'Casas container y viviendas alternativas',
      'Diseño de ampliaciones y mejoras'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    icon: '🏠'
  },
  {
    id: 'comercial',
    title: 'Diseño Comercial y Oficinas',
    description: 'Transformamos espacios comerciales en ambientes que potencian la productividad, refuerzan la identidad de marca y crean experiencias memorables para clientes y empleados.',
    features: [
      'Oficinas corporativas y coworking',
      'Locales comerciales y retail',
      'Hoteles y restaurantes',
      'Centros comerciales y tiendas'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    icon: '🏢'
  },
  {
    id: 'renovacion',
    title: 'Renovación y Remodelación',
    description: 'Damos nueva vida a espacios existentes conservando su esencia pero actualizando su funcionalidad. Transformamos propiedades antiguas en espacios modernos y eficientes.',
    features: [
      'Remodelación integral de viviendas',
      'Renovación de oficinas y locales',
      'Restauración de patrimonio histórico',
      'Reforma de cocinas y baños'
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    icon: '🔨'
  },
  {
    id: 'interiores',
    title: 'Diseño de Interiores',
    description: 'Creamos interiores que cuentan historias. Cada espacio se diseña con atención meticulosa a los detalles, materiales, iluminación y distribución.',
    features: [
      'Diseño de interiores residenciales',
      'Ambientación de espacios comerciales',
      'Selección de materiales y acabados',
      'Diseño de iluminación integral'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    icon: '🎨'
  },
  {
    id: 'urbanistico',
    title: 'Proyectos Urbanísticos',
    description: 'Diseñamos conjuntos residenciales, lotes y proyectos de desarrollo urbano que integran arquitectura, paisaje y planificación territorial.',
    features: [
      'Conjuntos residenciales',
      'Urbanizaciones y lotizaciones',
      'Parques y espacios públicos',
      'Master planning'
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    icon: '🌆'
  }
];

export default function Servicios() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 bg-[#f8f7ff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] text-[#7c3aed] mb-4">NUESTROS SERVICIOS</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">Servicios</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ofrecemos servicios integrales de arquitectura y diseño, adaptados a tus necesidades específicas. 
            Cada proyecto es único y merece una atención personalizada.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-24 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white px-6 py-3">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#7c3aed] mt-1">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            ¿Interesado en alguno de nuestros servicios?
          </h2>
          <p className="text-white/70 mb-8">
            Contáctanos para discutir tu proyecto y descubrir cómo podemos ayudarte a hacerlo realidad.
          </p>
          <a 
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#7c3aed] text-white tracking-widest text-sm hover:bg-[#5b21b6] transition-all duration-300"
          >
            CONTÁCTANOS
          </a>
        </div>
      </section>
    </div>
  );
}
