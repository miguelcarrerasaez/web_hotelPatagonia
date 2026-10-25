import { useState, useEffect } from 'react';

export function RoomsPreview({ navigate }) {
  const rooms = [
    {
      id: 'standard',
      title: 'Standard',
      description: 'Intimidad y confort rodeados por la frondosidad del bosque nativo.',
      img: '/images/habitacionStandard.png',
      link: '/habitaciones/standard',
    },
    {
      id: 'superior',
      title: 'Superior',
      description: 'Un ventanal privado hacia la inmensidad de las cumbres de Aysén.',
      img: '/images/habitacionSuperior.png',
      link: '/habitaciones/superior',
    },
    {
      id: 'junior-suite',
      title: 'Junior Suite',
      description: 'Amplitud y lujo de autor diseñados para el descanso en grupo.',
      img: '/images/habitacionJuniorSuite.png',
      link: '/habitaciones/junior-suite',
    },
    {
      id: 'apartment',
      title: 'Apartment',
      description: 'Independencia absoluta y máxima privacidad en una residencia exclusiva.',
      img: '/images/habitacionAparment.png',
      link: '/habitaciones/apartment',
    },
    {
      id: 'refugio-panorama',
      title: 'Refugio Panorama',
      description: 'Un ventanal privado hacia la inmensidad de las cumbres de Aysén.',
      img: '/images/refugioPanoramaHome.jpg',
      link: '/habitaciones/panorama',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [rooms.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? rooms.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  const handleRoomClick = (e, link) => {
    e.preventDefault();
    if (navigate) {
      navigate(link);
    } else {
      window.location.href = link;
    }
  };

  return (
    <section className="bg-[#F9F8F5] py-10 md:py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Encabezado */}
        <div className="mb-6">
          <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
            HABITACIONES
          </span>
          <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal leading-tight mb-3">
            Cuatro formas de imaginar tu estancia
          </h2>
          
          <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed w-full">
            Refugios de diseño contemporáneo concebidos para el descanso profundo. Cada espacio es una extensión cálida y silenciosa de la Patagonia, donde las texturas nobles y el paisaje de Aysén se integran para crear una experiencia de desconexión absoluta.
          </p>
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden">
          
          <div
            className="flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {rooms.map((room) => (
              <div key={room.id} className="relative w-full h-full flex-shrink-0">
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"></div>

                <div className="absolute bottom-8 left-8 sm:left-12 max-w-lg text-white z-10">
                  <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-2">
                    {room.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-white/90 mb-3 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <a
                    href={room.link}
                    onClick={(e) => handleRoomClick(e, room.link)}
                    className="font-sans text-sm text-white underline underline-offset-4 hover:text-white/80 transition-colors inline-block cursor-pointer"
                  >
                    Ver habitaciones
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            aria-label="Habitación anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white p-2 transition-colors cursor-pointer"
          >
            <svg className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Siguiente habitación"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white p-2 transition-colors cursor-pointer"
          >
            <svg className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-5">
          {rooms.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-[#2C3E35]' : 'w-2 bg-[#D1C9BF]'
              }`}
              aria-label={`Ir a habitación ${room.title}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default RoomsPreview;