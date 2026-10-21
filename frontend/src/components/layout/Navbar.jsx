import { useState } from 'react';

export function Navbar({ lang, setLang }) {
  const toggleLang = () => {
    setLang((prev) => (prev === 'ES' ? 'EN' : 'ES'));
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e5e4e7] bg-ph-hueso/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          className="flex items-center gap-3 text-[#292929] font-semibold"
          href="#/"
          aria-label="hotelPatagonia - Inicio"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect width="36" height="36" rx="10" fill="#1F6340" />
            <path
              d="M10 18h16M11 22h14M11 14h14"
              stroke="#F8F7F1"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span>hotelPatagonia</span>
        </a>

        <nav
          className="flex items-center gap-2 text-sm font-medium text-[#292929]"
          aria-label="Navegación principal"
        >
          {['Inicio', 'Habitaciones', 'Experiencias', 'Gastronomía', 'Sobre nosotros'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="btn-reservar text-sm"
            onClick={toggleLang}
            aria-label={lang === 'ES' ? 'Cambiar a inglés' : 'Cambiar a español'}
          >
            {lang === 'ES' ? 'EN' : 'ES'}
          </button>

          <button
            type="button"
            className="btn-reservar"
            aria-label="Reservar ahora"
          >
            Reservar
          </button>
        </div>
      </div>
    </header>
  );
}

