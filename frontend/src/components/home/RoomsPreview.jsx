import { useState, useEffect } from 'react';

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

export function RoomsPreview({ navigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Movimiento automático de diapositivas
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roomSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? roomSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % roomSlides.length);
  };

  const currentSlide = roomSlides[currentIndex];

  const handleNavigate = (path) => {
    if (navigate) navigate(path);
    else window.location.href = path;
  };

  const handleImgError = (e) => {
    if (e.target.src.endsWith('.png')) {
      e.target.src = e.target.src.replace('.png', '.jpg');
    } else if (e.target.src.endsWith('.jpg')) {
      e.target.src = e.target.src.replace('.jpg', '.png');
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
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

      {/* CARRUSEL DE HABITACIONES */}
      <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden bg-[#EFECE6] shadow-sm group">
        <img
          src={currentSlide.image}
          onError={handleImgError}
          alt={currentSlide.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
        />

        {/* Overlay con Título y Botón */}
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

        {/* Flechas de Navegación */}
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

        {/* Indicadores de Puntos */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {roomSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all rounded-full cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsPreview;