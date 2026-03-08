'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'INICIO' },
  { href: '/proyectos', label: 'PROYECTOS' },
  { href: '/servicios', label: 'SERVICIOS' },
  { href: '/blog', label: 'BLOG' },
  { href: '/sobre-mi', label: 'SOBRE MÍ' },
  { href: '/contacto', label: 'CONTACTO' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isHome && !scrolled ? 'text-white' : 'text-[#1a1a1a]';
  const bgColor = isHome && !scrolled ? 'bg-transparent' : 'bg-white/95 backdrop-blur-lg shadow-sm';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className={`text-xl font-light tracking-[0.25em] transition-colors duration-500 ${textColor}`}>
          TAMARA FARAH
        </Link>
        <nav className="hidden md:flex gap-8 text-sm tracking-widest">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`transition-colors duration-300 hover:text-[#7c3aed] ${pathname === item.href ? 'text-[#7c3aed]' : textColor === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu button */}
        <button className={`md:hidden ${textColor}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
