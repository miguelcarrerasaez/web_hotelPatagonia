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
    description: 'Espacios amplios con detalles de madera noble y vistas despejadas a las cumbres de Aysén.',
    path: '/habitaciones/superior',
    image: '/images/habitacionSuperior.png',
  },
  {
    id: 'junior-suite',
    title: 'Junior Suite',
    description: 'Amplitud de diseño, chimenea privada a leña y ventanales panorámicos al valle de Coyhaique.',
    path: '/habitaciones/junior-suite',
    image: '/images/habitacionJuniorSuite.png',
  },
  {
    id: 'apartment',
    title: 'Apartment',
    description: 'Residencia privada de 130 m² con 3 dormitorios independientes, cocina equipada y chimenea.',
    path: '/habitaciones/apartment',
    image: '/images/habitacionApartment.png',
  },
];

export function RoomsSubhome({ lang = 'ES', setLang = () => {}, navigate }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Movimiento automático del carrusel cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % roomSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goHome = () => {
    if (navigate) navigate('/');
    else window.location.href = '/';
  };

  const handleNavigate = (path) => {
    if (navigate) navigate(path);
    else window.location.href = path;
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? roomSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % roomSlides.length);
  };

  const handleImgError = (e) => {
    if (e.target.src.endsWith('.png')) {
      e.target.src = e.target.src.replace('.png', '.jpg');
    } else if (e.target.src.endsWith('.jpg')) {
      e.target.src = e.target.src.replace('.jpg', '.png');
    }
  };

  const currentSlide = roomSlides[currentSlideIndex];

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} darkText={true} navigate={navigate} />

      <main className="pt-28 md:pt-36">
        {/* 1. BREADCRUMB */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-4 pb-4">
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
              <h1 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-5">
                Encuentra tu lugar para hacer una pausa
              </h1>
              <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed font-light mb-8">
                Refugios de diseño rodeados de bosque nativo. Cada espacio ha sido pensado para el descanso profundo, con vistas despejadas a la Patagonia y la calidez del fuego siempre encendido.
              </p>
              <div>
                <a
                  href="#carrusel-habitaciones"
                  className="inline-block bg-[#2C3E35] text-white font-sans text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 hover:bg-[#1f2d26] transition-colors"
                >
                  Ver refugios y suites
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CARRUSEL "CUATRO FORMAS DE IMAGINAR TU ESTANCIA" */}
        <section id="carrusel-habitaciones" className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="mb-8">
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

          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px] overflow-hidden bg-[#EFECE6] shadow-sm group">
            <img
              src={currentSlide.image}
              onError={handleImgError}
              alt={currentSlide.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 sm:p-12 flex flex-col justify-end text-white">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-2">
                {currentSlide.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/90 max-w-lg mb-4 font-light">
                {currentSlide.description}
              </p>
              <div>
                <button
                  onClick={() => handleNavigate(currentSlide.path)}
                  className="font-sans text-xs uppercase tracking-wider underline underline-offset-4 hover:text-[#C88E4B] transition-colors cursor-pointer"
                >
                  Ver habitaciones
                </button>
              </div>
            </div>

            {/* Flechas */}
            <button
              onClick={prevSlide}
              aria-label="Anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all cursor-pointer z-10"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              aria-label="Siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all cursor-pointer z-10"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Puntos de Paginación */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {roomSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    idx === currentSlideIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN "NUESTRO ECOSISTEMA" */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-t border-[#2C3E35]/10">
          <div className="mb-8">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
              NUESTROS ECOSISTEMA
            </span>
            <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal mb-3">
              Descanso y exploración en un mismo viaje
            </h2>
            <p className="font-sans text-[#28211A]/80 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
              Patagonia House conecta el refugio boutique de montaña, la exploración de Aysén con Salvaje Corazón y la gastronomía de origen de Bòrek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div
              onClick={() => handleNavigate('/lodge')}
              className="group cursor-pointer bg-white border border-[#2C3E35]/10 overflow-hidden shadow-sm"
            >
              <div className="h-64 bg-[#EFECE6] overflow-hidden">
                <img
                  src="/images/refugioHome.png"
                  onError={handleImgError}
                  alt="El Lodge"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#2C3E35] mb-2">El Lodge</h3>
                <p className="font-sans text-xs text-[#28211A]/70 font-light leading-relaxed">
                  Refugio de montaña rodeado de naturaleza nativa.
                </p>
              </div>
            </div>

            <div
              onClick={() => handleNavigate('/experiencias/expediciones')}
              className="group cursor-pointer bg-white border border-[#2C3E35]/10 overflow-hidden shadow-sm"
            >
              <div className="h-64 bg-[#EFECE6] overflow-hidden">
                <img
                  src="/images/exploracionHome.png"
                  onError={handleImgError}
                  alt="Salvaje Corazón"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#2C3E35] mb-2">Salvaje Corazón</h3>
                <p className="font-sans text-xs text-[#28211A]/70 font-light leading-relaxed">
                  Expediciones y rutas guiadas por Aysén.
                </p>
              </div>
            </div>

            <div
              onClick={() => handleNavigate('/gastronomia')}
              className="group cursor-pointer bg-white border border-[#2C3E35]/10 overflow-hidden shadow-sm"
            >
              <div className="h-64 bg-[#EFECE6] overflow-hidden">
                <img
                  src="/images/gastronomiaHome.png"
                  onError={handleImgError}
                  alt="Restaurant Bòrek"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#2C3E35] mb-2">Bòrek</h3>
                <p className="font-sans text-xs text-[#28211A]/70 font-light leading-relaxed">
                  Cocina de origen y fuego patagónico.
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