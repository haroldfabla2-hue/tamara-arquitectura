// Blog posts data - easy to extend
export const blogPosts = [
  {
    slug: 'tendencias-arquitectura-sostenible-2026',
    title: 'Tendencias en Arquitectura Sostenible 2026',
    date: '8 de Marzo, 2026',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
    excerpt: 'Descubre las últimas innovaciones en diseño sostenible que están transformando la arquitectura moderna.',
    content: `
La arquitectura sostenible ha dejado de ser una tendencia para convertirse en una necesidad. En 2026, observamos cómo el diseño ecológico evoluciona con tecnologías y enfoques que redefinen cómo construimos y habitamos nuestros espacios.

## Materiales Renovables y Reciclados

Una de las tendencias más destacadas es el uso masivo de materiales sostenibles. Desde maderas certificadas hasta hormigones reciclados, los arquitectos están optando por materiales que reducen la huella de carbono sin sacrificar la estética o durabilidad.

### Principales materiales:
- **Madera contralaminada (CLT)**: Perfecta para estructuras de gran escala
- **Hormigones reciclados**: Reducen hasta 30% las emisiones
- **Bioplasticos arquitectónicos**: Alternativas innovadoras para revestimientos
- **Vidrio fotovoltaico**: Genera energía mientras permite la luz natural

## Diseño Pasivo y Eficiencia Energética

El diseño pasivo sigue siendo fundamental. Los edificios ahora incorporan sistemas inteligentes que optimizan el consumo energético en tiempo real, desde persianas automatizadas hasta sistemas de climatización predictivos.

## Edificios Biodiversos

La integración de la naturaleza en la arquitectura alcanza nuevos niveles. Los edificios no solo son eficientes energéticamente, sino que también contribuyen a la biodiversidad urbana mediante huertos verticales, techos verdes y hábitats para fauna local.

## Conclusión

La arquitectura sostenible en 2026 nos demuestra que es posible crear espacios hermosos y funcionales sin comprometer el futuro de nuestro planeta. Como arquitectos, tenemos la responsabilidad de liderar este cambio hacia un construccion más consciente.
    `
  },
  {
    slug: 'como-elegir-terreno-perfecto-casa',
    title: 'Cómo elegir el terreno perfecto para tu casa',
    date: '1 de Marzo, 2026',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    excerpt: 'Guía completa sobre los factores clave que debes considerar antes de comprar el terreno ideal.',
    content: `
Elegir el terreno adecuado es una de las decisiones más importantes en tu proyecto de construcción. Un buen terreno no solo facilita la construcción, sino que también define el carácter de tu futuro hogar.

## Ubicación y Entorno

La ubicación lo es todo. Considera:

- **Proximidad a servicios**: Escuelas, hospitales, tiendas
- **Transporte**: Acceso a carreteras principales, transporte público
- **Vecindario**: Tipo de construcciones vecinas, ambiente del sector
- **Seguridad**: Índices de criminalidad, iluminación pública

## Características Físicas del Terreno

### Topografía
Un terreno plano es ideal, pero los terrenos con pendiente ofrecen oportunidades únicas para diseños espectaculares con múltiples niveles y vistas panorámicas.

### Orientación Solar
La orientación determina:
- Iluminación natural durante el día
- Temperatura interior
- Eficiencia energética

### Suelo y Terreno
Es fundamental realizar estudios de suelo para conocer:
- Capacidad portante
- Nivel freático
- Estabilidad geológica

## Consideraciones Legales

Antes de comprar, verifica:
- Zonificación del área
- Restricciones de construcción
- Permisos necesarios
- Linderos y títulos de propiedad

## Mi Recomendación

Visita el terreno en diferentes horarios del día. Observa cómo incide el sol, cómo drena el agua de lluvia, y cómo se siente el lugar en diferentes condiciones. Tu intuición es tu mejor guía.
    `
  },
  {
    slug: 'minimalismo-arquitectura-moderna',
    title: 'El minimalismo en la arquitectura moderna',
    date: '22 de Febrero, 2026',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    excerpt: 'Explora cómo el diseño minimalista crea espacios que respiran y mejoran la calidad de vida.',
    content: `
El minimalismo arquitectónico es mucho más que una estética: es una filosofía de vida que promueve la claridad, la calma y la intención en cada elemento construido.

## Principios del Diseño Minimalista

### Menos es Más
Cada elemento debe tener un propósito. La eliminación de lo superfluous revela la esencia del espacio.

### Línea Limpia
Las líneas rectas y los ángulos definidos crean una sensación de orden y serenidad que favorece la meditación y el descanso.

### Espacio como Material
El espacio vacío no es la ausencia de algo, sino un material de diseño tan importante como el concreto o la madera.

## Características Distintivas

- **Paletas de color neutras**: Blancos, grises, tonos tierra
- **Materiales naturales**: Madera, piedra, vidrio
- **Iluminación natural**: Maximizar la entrada de luz
- **Almacenamiento oculto**: Mantener las líneas limpias

## Beneficios del Minimalismo

1. **Claridad mental**: Espacios ordenados promueven pensamientos ordenados
2. **Funcionalidad**: Cada elemento tiene un propósito definido
3. **Sostenibilidad**: Menos materiales, menor impacto ambiental
4. **Atemporalidad**: El diseño minimalista no pasa de moda

## Implementación Práctica

Para lograr un diseño minimalista exitoso:
- Invierte en carpintería de calidad
- Elige家具 con líneas simples
- Controla la paleta de colores
- Maximiza la iluminación natural

El minimalismo no es vaciar un espacio, sino dotarlo de significado y propósito.
    `
  }
];

export function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}
