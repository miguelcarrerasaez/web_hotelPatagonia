import { useState, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

const roomSlides = [
  {
    id: 'standard',
    title: 'Standard',
    description: 'Intimidad y confort rodeados por la frondosidad del bosque nativo.',
    path: '/habitaciones/standard',
    image: '/images/habitacionStandard.png',
  },
  {
    id: 'superior',
    title: 'Superior',
    description: 'Un ventanal privado hacia la inmensidad de las cumbres de Aysén.',
    path: '/habitaciones/superior',
    image: '/images/habitacionSuperior.png',
  },
  {
    id: 'junior-suite',
    title: 'Junior Suite',
    description: 'Amplitud y lujo de autor diseñados para el descanso en grupo.',
    path: '/habitaciones/junior-suite',
    image: '/images/habitacionJuniorSuite.png',
  },
  {
    id: 'apartment',
    title: 'Apartment',
    description: 'Independencia absoluta y máxima privacidad exclusiva.',
    path: '/habitaciones/apartment',
    image: '/images/habitacionApartment.png',
  },
];

export function RoomsSubhome({ lang = 'ES', setLang = () => {}, navigate }) {
  // Índice para el Hero principal superior
  const [heroIndex, setHeroIndex] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  // Avance automático del Hero principal cada 4.5 segundos
  useEffect(() => {
    if (isHeroPaused) return;
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % roomSlides.length);
    }, 4500);
    return () => clearInterval(heroTimer);
  }, [isHeroPaused]);

  const goHome = () => {
    if (navigate) navigate('/');
    else window.location.href = '/';
  };

  const handleNavigate = (path) => {
    if (navigate) navigate(path);
    else window.location.href = path;
  };

  // Controles Hero superior
  const prevHero = (e) => {
    e.stopPropagation();
    setHeroIndex((prev) => (prev === 0 ? roomSlides.length - 1 : prev - 1));
  };

  const nextHero = (e) => {
    e.stopPropagation();
    setHeroIndex((prev) => (prev + 1) % roomSlides.length);
  };

  const handleImgError = (e) => {
    if (e.target.src.endsWith('.png')) {
      e.target.src = e.target.src.replace('.png', '.jpg');
    } else if (e.target.src.endsWith('.jpg')) {
      e.target.src = e.target.src.replace('.jpg', '.png');
    }
  };

  const activeHeroRoom = roomSlides[heroIndex];

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden">
      {/* Navbar en blanco sobre el Hero */}
      <Navbar lang={lang} setLang={setLang} darkText={false} navigate={navigate} />

      {/* 0. HERO CARRUSEL DE HABITACIONES (Pantalla principal) */}
      <section
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
        onClick={() => handleNavigate(activeHeroRoom.path)}
        className="relative w-full h-[85vh] lg:h-[840px] bg-[#2C3E35] overflow-hidden cursor-pointer select-none group"
      >
        {roomSlides.map((room, idx) => {
          const isActive = idx === heroIndex;
          return (
            <div
              key={room.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={room.image}
                onError={handleImgError}
                alt={`Habitación ${room.title}`}
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              {/* Degradado superior sutil para legibilidad de Navbar e inferior para el título */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75 pointer-events-none" />
            </div>
          );
        })}

        {/* Flecha Izquierda Hero */}
        <button
          onClick={prevHero}
          aria-label="Habitación anterior"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/65 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Flecha Derecha Hero */}
        <button
          onClick={nextHero}
          aria-label="Siguiente habitación"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/65 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Textos centrados en la parte inferior según diseño Figma */}
        <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-end items-center text-center pb-14 sm:pb-16">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-white/90 font-medium mb-2 drop-shadow-sm">
            HABITACIONES
          </span>
          <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide drop-shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">
            {activeHeroRoom.title}
          </h1>

          {/* Puntos de paginación del Hero */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2.5 mt-6"
          >
            {roomSlides.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => setHeroIndex(idx)}
                aria-label={`Ir a ${room.title}`}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  idx === heroIndex ? 'w-10 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <main className="pt-8 md:pt-12">
        {/* 1. BREADCRUMB */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-2 pb-4">
          <p className="font-sans text-xs md:text-sm text-[#8C8377] font-medium tracking-wide flex items-center gap-1.5">
            <button
              onClick={goHome}
              className="hover:text-[#2C3E35] hover:underline cursor-pointer transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#C88E4B]">Habitaciones</span>
          </p>
        </section>

        {/* 2. ENCABEZADO "ENCUENTRA TU LUGAR PARA HACER UNA PAUSA" */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Foto del bloque principal */}
            <div className="w-full h-[360px] sm:h-[460px] lg:h-[500px] overflow-hidden bg-[#EFECE6] shadow-sm">
              <img
                src="/images/subHome.png"
                onError={(e) => {
                  if (e.target.src.includes('subHome.png')) {
                    e.target.src = '/images/refugioHome.png';
                  } else {
                    handleImgError(e);
                  }
                }}
                alt="Habitaciones Refugio Patagonia House"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texto explicativo */}
            <div className="flex flex-col justify-center px-2 lg:px-6">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
                HABITACIONES - REFUGIO
              </span>
              <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-5">
                Encuentra tu lugar para hacer una pausa
              </h2>
              <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed font-light mb-8">
                Refugios de diseño rodeados de bosque nativo. Cada espacio ha sido pensado para el descanso profundo, con vistas despejadas a la Patagonia y la calidez del fuego siempre encendido.
              </p>
              <div>
                <a
                  href="#catalogo-habitaciones"
                  className="inline-block bg-[#2C3E35] text-white font-sans text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 hover:bg-[#1f2d26] transition-colors"
                >
                  Ver refugios y suites
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. GRILLA 2x2 "CUATRO FORMAS DE IMAGINAR TU ESTANCIA" */}
        <section id="catalogo-habitaciones" className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="mb-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
              HABITACIONES
            </span>
            <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
              Cuatro formas de imaginar tu estancia
            </h2>
            <p className="font-sans text-[#28211A]/80 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
              Refugios de diseño contemporáneo concebidos para el descanso profundo. Cada espacio es una extensión cálida y silenciosa de la Patagonia, donde las texturas nobles y el paisaje de Aysén se integran para crear una experiencia de desconexión absoluta.
            </p>
          </div>

          {/* Grilla 2x2 según referencia Figma (663x452 aprox.) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {roomSlides.map((room) => (
              <div
                key={room.id}
                onClick={() => handleNavigate(room.path)}
                className="relative w-full h-[360px] sm:h-[420px] lg:h-[452px] overflow-hidden bg-[#EFECE6] shadow-sm group cursor-pointer"
              >
                <img
                  src={room.image}
                  onError={handleImgError}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Degradado inferior para lectura limpia sobre la fotografía */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Contenido en la esquina inferior izquierda (padding 38px en desktop) */}
                <div className="absolute inset-0 p-7 sm:p-[38px] flex flex-col justify-end text-white z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal mb-1.5">
                    {room.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/90 font-light leading-relaxed mb-3 max-w-md">
                    {room.description}
                  </p>
                  <div>
                    <span className="inline-block font-sans text-xs sm:text-sm text-white underline underline-offset-4 group-hover:text-[#C88E4B] transition-colors">
                      Ver habitaciones
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SECCIÓN "NUESTRO ECOSISTEMA" */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-t border-[#2C3E35]/10">
          <div className="mb-8">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
              NUESTRO ECOSISTEMA
            </span>
            <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal mb-3">
              Descanso y exploración en un mismo viaje
            </h2>
            <p className="font-sans text-[#28211A]/80 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
              Patagonia House conecta el refugio boutique de montaña, la exploración de Aysén con Salvaje Corazón y la gastronomía de origen de Bòrek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Tarjeta 1: Ritual de Tinajas */}
            <div
              onClick={() => handleNavigate('/experiencias/bienestar')}
              className="group cursor-pointer relative h-[420px] sm:h-[460px] overflow-hidden shadow-sm bg-[#EFECE6]"
            >
              <img
                src="/images/tinajasubHome.png"
                onError={(e) => {
                  if (e.target.src.includes('tinajasubHome.png')) {
                    e.target.src = '/images/tinajaHome.png';
                  } else {
                    handleImgError(e);
                  }
                }}
                alt="Ritual de Tinajas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <h3 className="font-serif text-2xl sm:text-3xl mb-2 font-normal">
                  Ritual de Tinajas
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                  El calor del agua como pausa regenerativa en medio del bosque.
                </p>
              </div>
            </div>

            {/* Tarjeta 2: Pesca & Exploración */}
            <div
              onClick={() => handleNavigate('/experiencias/pesca-mosca')}
              className="group cursor-pointer relative h-[420px] sm:h-[460px] overflow-hidden shadow-sm bg-[#EFECE6]"
            >
              <img
                src="/images/pescasubHome.png"
                onError={(e) => {
                  if (e.target.src.includes('pescasubHome.png')) {
                    e.target.src = '/images/pescaMosca/pescasubHome.png';
                  } else {
                    handleImgError(e);
                  }
                }}
                alt="Pesca & Exploración"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <h3 className="font-serif text-2xl sm:text-3xl mb-2 font-normal">
                  Pesca &amp; Exploración
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                  Sumérgete en los ríos de Aysén con guías expertos en la inmensidad austral.
                </p>
              </div>
            </div>

            {/* Tarjeta 3: Gastronomía Bòrek */}
            <div
              onClick={() => handleNavigate('/gastronomia')}
              className="group cursor-pointer relative h-[420px] sm:h-[460px] overflow-hidden shadow-sm bg-[#EFECE6]"
            >
              <img
                src="/images/boreksubHome.png"
                onError={(e) => {
                  if (e.target.src.includes('boreksubHome.png')) {
                    e.target.src = '/images/gastronomiaHome.png';
                  } else {
                    handleImgError(e);
                  }
                }}
                alt="Gastronomía Bòrek"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <h3 className="font-serif text-2xl sm:text-3xl mb-2 font-normal">
                  Gastronomía Bòrek
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                  Cocina de origen a fuego lento, donde el territorio patagónico cobra vida.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default RoomsSubhome;