import { useState, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

// Mapeo de datos para las suites de la categoría Junior Suite
const juniorSuiteRooms = [
  {
    id: 'san-lorenzo',
    name: 'San Lorenzo Family Junior Suite',
    specs: '108 m²  |  2 Camas Super King  |  4 personas',
    description:
      'Un espacio donde la amplitud y el paisaje se funden. Con 108 m² diseñados para la intimidad y el descanso compartido, San Lorenzo se abre al entorno a través de ventanales que enmarcan la inmensidad del valle de Coyhaique. El centro del refugio es dominado por una chimenea a leña privada, creando una atmósfera de cálido aislamiento donde el lujo contemporáneo y el silencio de la Patagonia se encuentran.',
    images: [
      '/images/SanLorenzo/sanlorenzo1.png',
      '/images/SanLorenzo/sanlorenzo2.png',
      '/images/SanLorenzo/sanlorenzo3.png',
      '/images/SanLorenzo/sanlorenzo4.png',
      '/images/SanLorenzo/sanlorenzo5.png',
    ],
    fallbackImages: [
      '/PATAGONIA HOUSE/HABITACIONES/San Lorenzo/sanlorenzo1.png',
      '/PATAGONIA HOUSE/HABITACIONES/San Lorenzo/sanlorenzo2.png',
      '/PATAGONIA HOUSE/HABITACIONES/San Lorenzo/sanlorenzo3.png',
      '/PATAGONIA HOUSE/HABITACIONES/San Lorenzo/sanlorenzo4.png',
      '/PATAGONIA HOUSE/HABITACIONES/San Lorenzo/sanlorenzo5.png',
    ],
    reverse: false,
  },
  {
    id: 'arrayan-y-luma',
    name: 'Arrayán y Luma',
    specs: '45 m²  |  2 Camas Super King  |  4 personas',
    description:
      'Un refugio de 45 m² donde la amplitud y el paisaje patagónico toman el protagonismo. Diseñada para acoger el descanso compartido con máxima sofisticación, esta suite cuenta con dos camas Super King y ventanales que enmarcan una vista privileged. Su arquitectura de líneas cálidas y texturas nobles crea el santuario perfecto para familias o grupos que buscan confort absoluto tras un día de expedición en Aysén.',
    images: [
      '/images/Arrayan/arrayan1.png',
      '/images/Arrayan/arrayan2.png',
      '/images/Arrayan/arrayan3.png',
      '/images/Arrayan/arrayan4.png',
    ],
    fallbackImages: [
      '/PATAGONIA HOUSE/HABITACIONES/Arrayán y Luma/arrayan1.png',
      '/PATAGONIA HOUSE/HABITACIONES/Arrayán y Luma/arrayan2.png',
      '/PATAGONIA HOUSE/HABITACIONES/Arrayán y Luma/arrayan3.png',
      '/PATAGONIA HOUSE/HABITACIONES/Arrayán y Luma/arrayan4.png',
    ],
    reverse: true,
  },
];

// Componente para la Tarjeta de cada Habitación (Grilla simétrica 50/50)
function RoomCard({ room, onOpenLightbox }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % room.images.length);
  };

  // Manejo flexible de errores para cargar desde carpetas alternativas o extensiones
  const handleImgError = (e, idx) => {
    const currentSrc = e.target.src;
    if (currentSrc.includes('.png')) {
      e.target.src = currentSrc.replace('.png', '.jpg');
    } else if (room.fallbackImages && room.fallbackImages[idx] && !currentSrc.includes('PATAGONIA%20HOUSE')) {
      e.target.src = room.fallbackImages[idx];
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* COLUMNA TEXTO CENTRADO (50% de ancho) */}
        <div
          className={`flex flex-col items-center justify-center text-center px-4 lg:px-10 ${
            room.reverse ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <h2 className="font-serif text-[#C88E4B] text-3xl sm:text-4xl lg:text-5xl font-normal mb-3">
            {room.name}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#8C8377] font-medium tracking-wide mb-6">
            {room.specs}
          </p>
          <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed max-w-md">
            {room.description}
          </p>
        </div>

        {/* COLUMNA FOTOGRAFÍA CON FLECHAS Y LIGHTBOX */}
        <div
          className={`w-full h-[520px] sm:h-[640px] lg:h-[720px] ${
            room.reverse ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="relative w-full h-full overflow-hidden group shadow-sm bg-[#EFECE6]">
            <img
              src={room.images[currentImgIndex]}
              alt={`Fotografía ${currentImgIndex + 1} de ${room.name}`}
              onError={(e) => handleImgError(e, currentImgIndex)}
              onClick={() => onOpenLightbox(room.images, currentImgIndex, room.name)}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-102"
            />

            <div
              onClick={() => onOpenLightbox(room.images, currentImgIndex, room.name)}
              className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer pointer-events-none"
            >
              <span className="bg-black/60 text-white font-sans text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                Ampliar imagen
              </span>
            </div>

            {room.images.length > 1 && (
              <button
                onClick={prevImage}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white p-2 transition-all cursor-pointer rounded-full"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}

            {room.images.length > 1 && (
              <button
                onClick={nextImage}
                aria-label="Siguiente imagen"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white p-2 transition-all cursor-pointer rounded-full"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}

            {room.images.length > 1 && (
              <div className="absolute bottom-4 right-4 z-10 bg-black/50 text-white font-sans text-xs px-2.5 py-1 rounded backdrop-blur-sm">
                {currentImgIndex + 1} / {room.images.length}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export function JuniorSuite({ lang = 'ES', setLang = () => {}, navigate }) {
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Estado del Modal / Lightbox
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    index: 0,
    title: '',
  });

  const openLightbox = (images, index, title) => {
    setLightbox({
      isOpen: true,
      images,
      index,
      title,
    });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const lightboxPrev = () => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1,
    }));
  };

  const lightboxNext = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  const handleImgErrorFallback = (e) => {
    if (e.target.src.endsWith('.png')) {
      e.target.src = e.target.src.replace('.png', '.jpg');
    } else if (e.target.src.endsWith('.jpg')) {
      e.target.src = e.target.src.replace('.jpg', '.png');
    }
  };

  const goHome = () => {
    if (navigate) navigate('/');
    else window.location.href = '/';
  };

  const goRooms = () => {
    if (navigate) navigate('/habitaciones');
    else window.location.href = '/habitaciones';
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden">
      
      {/* 1. Navbar */}
      <Navbar lang={lang} setLang={setLang} darkText={true} navigate={navigate} />

      <main className="pt-28 md:pt-36">
        
        {/* 2. ENCABEZADO DE CATEGORÍA */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-4 pb-4">
          <p className="font-sans text-xs md:text-sm text-[#8C8377] font-medium tracking-wide flex items-center gap-1.5 mb-4">
            <button
              onClick={goHome}
              className="hover:text-[#2C3E35] hover:underline cursor-pointer transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={goRooms}
              className="hover:text-[#2C3E35] hover:underline cursor-pointer transition-colors"
            >
              Habitaciones
            </button>
            <span>/</span>
            <span className="text-[#C88E4B]">Junior Suite</span>
          </p>
          <h1 className="font-serif text-[#2C3E35] text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Junior Suite
          </h1>
        </section>

        {/* 3. LISTADO DE HABITACIONES JUNIOR SUITE */}
        <div className="flex flex-col gap-2 py-2">
          {juniorSuiteRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>

        {/* 4. SECCIÓN AMENIDADES JUNIOR SUITE (ameneidadesJunior.png) */}
        <section className="bg-[#F9F8F5] py-8 md:py-12 border-t border-[#8C8377]/15">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <img
              src="/images/ameneidadesJunior.png"
              onError={(e) => {
                if (e.target.src.includes('ameneidadesJunior.png')) {
                  e.target.src = '/images/ameneidades.png';
                }
              }}
              alt="Amenidades Junior Suite Patagonia House"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* 5. SECCIÓN INFORMACIÓN ÚTIL */}
        <section className="relative w-full py-16 md:py-24 bg-[#2C3E35] overflow-hidden">
          <img
            src="/images/infoUtil.png"
            alt="Fondo Información Útil"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>

          <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-white">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-10">
              Información útil
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-black/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 flex flex-col gap-4 font-sans text-xs sm:text-sm font-light leading-relaxed">
                <h3 className="font-sans font-medium text-base text-white">
                  Desayuno Patagónico
                </h3>
                <p>
                  Una propuesta matutina elaborada diariamente a partir de ingredientes locales, panadería artesanal de la casa, charcutería regional y frutas de estación. El punto de partida ideal para planificar tu jornada de exploración en Aysén.
                </p>
                <p className="mt-2">
                  <strong className="font-medium text-white block">Lugar y Horarios:</strong>
                  Todos los días de 07:00 a 10:00 hrs en Restaurant Bòrek.
                </p>
                <p>
                  <strong className="font-medium text-white block">Box Lunch de Expedición:</strong>
                  Disponible para salidas tempranas con aviso previo.
                </p>
                <p>
                  <strong className="font-medium text-white block">Requerimientos Especiales:</strong>
                  Adaptamos la propuesta a dietas vegetarianas, veganas o restricciones alimentarias notificadas con anticipación.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 flex flex-col gap-4 font-sans text-xs sm:text-sm font-light leading-relaxed">
                <h3 className="font-sans font-medium text-base text-white">
                  Check-in y Recepción
                </h3>
                <div>
                  <strong className="font-medium text-white block mb-1">Horarios:</strong>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Check-in: desde las 15:00 hrs.</li>
                    <li>Check-out: hasta las 12:00 hrs.</li>
                    <li>Recepción: De 08:00 a 22:00 hrs.</li>
                  </ul>
                </div>
                <p className="mt-2">
                  Early check-in y late check-out disponibles, sujetos a disponibilidad.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 flex flex-col gap-4 font-sans text-xs sm:text-sm font-light leading-relaxed">
                <h3 className="font-sans font-medium text-base text-white">
                  Camas extras
                </h3>
                <p>
                  Para mayor comodidad de nuestros huéspedes, contamos con la opción de camas adicionales en algunas de nuestras habitaciones.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Disponibilidad sujeta a confirmación previa.</li>
                  <li>Se puede aplicar un cargo adicional por persona/noche.</li>
                  <li>Es necesario solicitarla al momento de la reserva o con anticipación a tu llegada.</li>
                </ul>
                <p className="mt-2">
                  De esta manera aseguramos que tu estadía sea lo más confortable y adaptada a tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SECCIÓN "RESERVA TU ESTADÍA" */}
        <section id="reservas" className="bg-[#F4F1EA] py-16 md:py-20 text-[#28211A]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                  Reserva tu estadía
                </h2>
                <p className="font-sans text-[#28211A]/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md font-light">
                  Conéctate con la esencia de la Patagonia en un ambiente cálido y natural.
                </p>
              </div>

              <div className="bg-[#EFECE6] p-6 sm:p-8 border border-[#2C3E35]/10 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1.5">
                      Fecha de entrada
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1.5">
                      Fecha de salida
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1.5">
                      Adultos
                    </label>
                    <div className="flex items-center border border-[#2C3E35]/15 bg-white">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="px-3 py-2 text-[#2C3E35] font-bold hover:bg-black/5"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-sans text-sm">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="px-3 py-2 text-[#2C3E35] font-bold hover:bg-black/5"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1.5">
                      Niños
                    </label>
                    <div className="flex items-center border border-[#2C3E35]/15 bg-white">
                      <button
                        type="button"
                        onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                        className="px-3 py-2 text-[#2C3E35] font-bold hover:bg-black/5"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-sans text-sm">{childrenCount}</span>
                      <button
                        type="button"
                        onClick={() => setChildrenCount(childrenCount + 1)}
                        className="px-3 py-2 text-[#2C3E35] font-bold hover:bg-black/5"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#2C3E35] text-white font-sans text-sm font-medium py-3 hover:bg-[#1f2d26] transition-colors mt-2 cursor-pointer"
                >
                  Consultar disponibilidad
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 7. MODAL LIGHTBOX EXPANDIDO A PANTALLA COMPLETA */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-6 text-white animate-fadeIn">
          <div className="flex justify-between items-center max-w-[1440px] w-full mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-[#C88E4B]">{lightbox.title}</h3>
              <p className="font-sans text-xs text-white/70">
                Imagen {lightbox.index + 1} de {lightbox.images.length}
              </p>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar vista ampliada"
            >
              <svg className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={lightbox.images[lightbox.index]}
              alt={`${lightbox.title} ampliada`}
              onError={handleImgErrorFallback}
              className="max-h-[82vh] max-w-[90vw] object-contain shadow-2xl transition-all duration-300"
            />

            {lightbox.images.length > 1 && (
              <>
                <button
                  onClick={lightboxPrev}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer rounded-full"
                  aria-label="Anterior"
                >
                  <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button
                  onClick={lightboxNext}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer rounded-full"
                  aria-label="Siguiente"
                >
                  <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}
          </div>

          <div className="text-center font-sans text-xs text-white/50">
            Usa las flechas del teclado o los botones para navegar
          </div>
        </div>
      )}

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default JuniorSuite;