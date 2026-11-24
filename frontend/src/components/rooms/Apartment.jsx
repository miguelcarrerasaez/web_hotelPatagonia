import { useState, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

// Mapeo de datos para la residencia Apartment (Luz 1)
const apartmentRooms = [
  {
    id: 'luz-1',
    name: 'Luz 1',
    specs: '130 m²  |  3 Camas Super King, 1 Cama Plaza y media  |  7 personas',
    description:
      'La máxima expresión de confort y exclusividad en Patagonia House. Con 130 m² de diseño luminoso y amplios espacios, esta residencia privada está concebida para grupos que buscan vivir Aysén sin transar en la privacidad. Su distribución incluye tres dormitorios independientes, cada uno como un santuario propio, que convergen en una gran área común dominada por una chimenea a leña, cocina equipada y ventanales con vistas panorámicas insuperables al valle y las montañas. Un refugio absoluto en la inmensidad del sur.',
    images: [
      '/images/Luz/luz1.png',
      '/images/Luz/luz2.png',
      '/images/Luz/luz3.png',
      '/images/Luz/luz4.png',
      '/images/Luz/luz5.png',
      '/images/Luz/luz6.png',
      '/images/Luz/luz7.png',
      '/images/Luz/luz8.png',
      '/images/Luz/luz9.png',
      '/images/Luz/luz10.png',
      '/images/Luz/luz11.png',
      '/images/Luz/luz12.png',
      '/images/Luz/luz13.png',
      '/images/Luz/luz14.png',
      '/images/Luz/luz15.png',
      '/images/Luz/luz16.png',
    ],
  },
];

// Componente para la residencia con composición de 3 fotografías (2 verticales arriba + 1 horizontal abajo con avance manual)
function RoomCard({ room, onOpenLightbox, onReserveClick }) {
  const initialBottomIndex = room.images.length > 2 ? 2 : 0;
  const [bottomImgIndex, setBottomImgIndex] = useState(initialBottomIndex);

  const secondImgIndex = room.images.length > 1 ? 1 : 0;

  const prevBottomImage = (e) => {
    e.stopPropagation();
    setBottomImgIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  const nextBottomImage = (e) => {
    e.stopPropagation();
    setBottomImgIndex((prev) => (prev + 1) % room.images.length);
  };

  const handleImgError = (e, imgPath) => {
    if (imgPath.endsWith('.png')) {
      e.target.src = imgPath.replace('.png', '.jpg');
    } else if (imgPath.endsWith('.jpg')) {
      e.target.src = imgPath.replace('.jpg', '.png');
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 w-full">
      {/* FILA SUPERIOR: Texto + Botón Reservar (izquierda) y 2 Fotos Verticales (derecha) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* BLOQUE DE TEXTO JUSTIFICADO AL CENTRO + BOTÓN RESERVAR */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center px-2 lg:px-8">
          <h2 className="font-serif text-[#C88E4B] text-3xl sm:text-4xl lg:text-5xl font-normal mb-3">
            {room.name}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#8C8377] font-medium tracking-wide mb-6 max-w-md">
            {room.specs}
          </p>
          <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed max-w-md mb-8 font-light">
            {room.description}
          </p>
          <button
            type="button"
            onClick={onReserveClick}
            className="border border-[#C88E4B] text-[#C88E4B] hover:bg-[#C88E4B] hover:text-white font-sans text-xs sm:text-sm tracking-wider px-8 py-2.5 transition-colors duration-300 cursor-pointer"
          >
            Reservar
          </button>
        </div>

        {/* 2 FOTOGRAFÍAS VERTICALES LADO A LADO */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 w-full">
          {/* Foto Vertical 1 */}
          <div
            onClick={() => onOpenLightbox(room.images, 0, room.name)}
            className="relative w-full h-[320px] sm:h-[460px] lg:h-[620px] overflow-hidden bg-[#EFECE6] shadow-sm group cursor-pointer"
          >
            <img
              src={room.images[0]}
              alt={`${room.name} vista 1`}
              onError={(e) => handleImgError(e, room.images[0])}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

          {/* Foto Vertical 2 */}
          <div
            onClick={() => onOpenLightbox(room.images, secondImgIndex, room.name)}
            className="relative w-full h-[320px] sm:h-[460px] lg:h-[620px] overflow-hidden bg-[#EFECE6] shadow-sm group cursor-pointer"
          >
            <img
              src={room.images[secondImgIndex]}
              alt={`${room.name} vista 2`}
              onError={(e) => handleImgError(e, room.images[secondImgIndex])}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </div>

      </div>

      {/* FILA INFERIOR: FOTOGRAFÍA HORIZONTAL DE ANCHO COMPLETO CON AVANCE MANUAL */}
      <div className="mt-4 sm:mt-6 w-full">
        <div
          onClick={() => onOpenLightbox(room.images, bottomImgIndex, room.name)}
          className="relative w-full h-[300px] sm:h-[440px] lg:h-[580px] overflow-hidden bg-[#EFECE6] shadow-sm group cursor-pointer"
        >
          <img
            src={room.images[bottomImgIndex]}
            alt={`${room.name} panorámica ${bottomImgIndex + 1}`}
            onError={(e) => handleImgError(e, room.images[bottomImgIndex])}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Overlay sutil al pasar el cursor */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-black/60 text-white font-sans text-xs px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              Ampliar imagen
            </span>
          </div>

          {/* Flecha Izquierda (avance manual) */}
          {room.images.length > 1 && (
            <button
              type="button"
              onClick={prevBottomImage}
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/75 text-white p-2.5 sm:p-3 transition-all cursor-pointer rounded-full backdrop-blur-sm"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Flecha Derecha (avance manual) */}
          {room.images.length > 1 && (
            <button
              type="button"
              onClick={nextBottomImage}
              aria-label="Siguiente imagen"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/75 text-white p-2.5 sm:p-3 transition-all cursor-pointer rounded-full backdrop-blur-sm"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          {/* Indicador de número de foto */}
          {room.images.length > 1 && (
            <div className="absolute bottom-4 right-4 z-10 bg-black/50 text-white font-sans text-xs px-3 py-1 rounded backdrop-blur-sm">
              {bottomImgIndex + 1} / {room.images.length}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Apartment({ lang = 'ES', setLang = () => {}, navigate }) {
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Estado del Modal Lightbox
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

  const scrollToReservas = () => {
    const section = document.getElementById('reservas');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden">
      
      {/* 1. Navbar en blanco sobre el Hero */}
      <Navbar lang={lang} setLang={setLang} darkText={false} navigate={navigate} />

      {/* 2. HERO ESTÁTICO DE SECCIÓN */}
      <section className="relative w-full h-[85vh] lg:h-[840px] bg-[#2C3E35] overflow-hidden select-none">
        <img
          src="/images/habitacionApartment.png"
          onError={handleImgErrorFallback}
          alt="Residencia Apartment Patagonia House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75 pointer-events-none" />

        <div className="absolute inset-0 z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-end items-center text-center pb-14 sm:pb-16">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-white/90 font-medium mb-2 drop-shadow-sm">
            HABITACIONES
          </span>
          <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide drop-shadow-md">
            Apartment
          </h1>
        </div>
      </section>

      <main className="pt-8 md:pt-12">
        
        {/* 3. BREADCRUMB */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-2 pb-2">
          <p className="font-sans text-xs md:text-sm text-[#8C8377] font-medium tracking-wide flex items-center gap-1.5">
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
            <span className="text-[#C88E4B]">Apartment</span>
          </p>
        </section>

        {/* 4. HABITACIÓN/RESIDENCIA LUZ 1 */}
        <div className="flex flex-col divide-y divide-[#2C3E35]/10">
          {apartmentRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onOpenLightbox={openLightbox}
              onReserveClick={scrollToReservas}
            />
          ))}
        </div>

        {/* 5. SECCIÓN AMENIDADES APARTMENT (ameneidadesAparment.png) */}
        <section className="bg-[#F9F8F5] py-8 md:py-12 border-t border-[#8C8377]/15">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <img
              src="/images/ameneidadesAparment.png"
              onError={(e) => {
                if (e.target.src.includes('ameneidadesAparment.png')) {
                  e.target.src = '/images/ameneidadesApartment.png';
                }
              }}
              alt="Amenidades Apartment Patagonia House"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* 6. SECCIÓN INFORMACIÓN ÚTIL */}
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

        {/* 7. SECCIÓN "RESERVA TU ESTADÍA" */}
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

      {/* 8. MODAL LIGHTBOX EXPANDIDO A PANTALLA COMPLETA */}
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

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default Apartment;