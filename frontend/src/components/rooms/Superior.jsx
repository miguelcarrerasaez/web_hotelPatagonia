import { useState, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

// Primer grupo de habitaciones Superior (2 personas)
const superiorRoomsGroup1 = [
  {
    id: 'cerro-castillo',
    name: 'Cerro Castillo',
    specs: '32 m²  |  Super King  |  2 personas',
    description:
      'Bautizada en honor a una de las cumbres más imponentes de Aysén, Cerro Castillo ofrece 32 m² de amplitud y serenidad. Un refugio de atmósfera cálida, envuelto en detalles de madera noble y texturas orgánicas que invitan a la contemplación. El santuario perfecto para pausar el ritmo y disfrutar de un descanso profundo tras un día de expedición en la Patagonia.',
    images: [
      '/images/cerroCastillo/cerrocastillo1.png',
      '/images/cerroCastillo/cerrocastillo2.png',
      '/images/cerroCastillo/cerrocastillo3.png',
    ],
    reverse: false,
  },
  {
    id: 'nire',
    name: 'Ñire',
    specs: '20 m²  |  Super King  |  2 personas',
    description:
      'Bautizada con el nombre de uno de los árboles más resilientes de la Patagonia, Ñire es un refugio íntimo de 20 m² diseñado para brindar total independencia. Su arquitectura cálida en maderas nativas integra sutilmente una cocina privada, creando el espacio perfecto para quienes buscan autonomía, privacidad y un descanso sereno tras explorar los paisajes de Aysén.',
    images: [
      '/images/Ñire/ñire1.png',
      '/images/Ñire/ñire2.png',
      '/images/Ñire/ñire3.png',
      '/images/Ñire/ñire4.png',
      '/images/Ñire/ñire5.png',
      '/images/Ñire/ñire6.png',
      '/images/Ñire/ñire7.png',
    ],
    reverse: true,
  },
  {
    id: 'cipres',
    name: 'Ciprés',
    specs: '25 m²  |  King Size  |  2 personas',
    description:
      'Ubicada en el segundo nivel del lodge, Ciprés ofrece una perspectiva elevada y serena del entorno. Un refugio íntimo de atmósfera cálida, diseñado como el santuario perfecto para recuperar energías en total confort tras un día de expedición en Aysén.',
    images: [
      '/images/Cipres/cipres1.png',
      '/images/Cipres/cipres2.png',
      '/images/Cipres/cipres3.png',
      '/images/Cipres/cipres4.png',
    ],
    reverse: false,
  },
  {
    id: 'manio',
    name: 'Mañío',
    specs: '25 m²  |  King Size  |  2 personas',
    description:
      'Ubicada en el segundo nivel del lodge, Mañío invita a contemplar el bosque nativo desde una perspectiva privileged. Un refugio de 25 m² donde la calidez de la madera de autor y la luz natural crean la atmósfera perfecta para el descanso sereno y la desconexión tras un día de expedición.',
    images: [
      '/images/Manio/manio1.png',
      '/images/Manio/manio2.png',
      '/images/Manio/manio3.png',
      '/images/Manio/manio4.png',
    ],
    reverse: true,
  },
  {
    id: 'coihue',
    name: 'Coihue',
    specs: '24 m²  |  Super King  |  2 personas',
    description:
      'Inspirada en la majestuosidad de uno de los árboles más emblemáticos del bosque austral, Coihue ofrece 24 m² de refugio cálido y versátil. Su diseño interior, en sintonía con las texturas de la naturaleza, crea un ambiente sereno para el descanso profundo. Gracias a su distribución, el espacio permite adaptarse para recibir a un tercer huésped, siendo una opción perfecta para compartir la inmensidad de la Patagonia.',
    images: [
      '/images/Coihue/coihue1.png',
      '/images/Coihue/coihue2.png',
    ],
    reverse: false,
  },
];

// Habitación especial Notro (3 personas)
const notroRoom = {
  id: 'notro',
  name: 'Notro',
  specs: '35 m²  |  1 cama Super King, 1 cama Plaza y media  |  3 personas',
  description:
    'Bautizada en honor a la floración viva del bosque austral, Notro ofrece un refugio generoso de 35 m² diseñado para acoger el descanso compartido. Su distribución equilibrada integra una cama queen y una cama twin en una atmósfera de maderas cálidas y luz natural, creando el santuario perfecto para grupos pequeños o familias que buscan explorar la inmensidad de Aysén con total confort e intimidad.',
  images: [
    '/images/Notro/notro1.png',
    '/images/Notro/notro2.png',
    '/images/Notro/notro3.png',
    '/images/Notro/notro4.png',
    '/images/Notro/notro5.png',
    '/images/Notro/notro6.png',
  ],
  reverse: true,
};

// Componente para la Tarjeta de cada Habitación
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

  const handleImgError = (e, imgPath) => {
    if (imgPath.endsWith('.png')) {
      e.target.src = imgPath.replace('.png', '.jpg');
    } else if (imgPath.endsWith('.jpg')) {
      e.target.src = imgPath.replace('.jpg', '.png');
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* COLUMNA 1: TEXTO CENTRADO (50% ANCHO) */}
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

        {/* COLUMNA 2: FOTOGRAFÍA ALINEADA EN EL EJE MEDIO */}
        <div
          className={`w-full h-[520px] sm:h-[640px] lg:h-[720px] ${
            room.reverse ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="relative w-full h-full overflow-hidden group shadow-sm bg-[#EFECE6]">
            <img
              src={room.images[currentImgIndex]}
              alt={`Fotografía ${currentImgIndex + 1} de ${room.name}`}
              onError={(e) => handleImgError(e, room.images[currentImgIndex])}
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

export function Superior({ lang = 'ES', setLang = () => {}, navigate }) {
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Estado del Lightbox / Modal
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
            <span className="text-[#C88E4B]">Superior</span>
          </p>
          <h1 className="font-serif text-[#2C3E35] text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Superior
          </h1>
        </section>

        {/* 3. PRIMER GRUPO DE HABITACIONES SUPERIOR (2 Personas) */}
        <div className="flex flex-col gap-2 py-2">
          {superiorRoomsGroup1.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>

        {/* 4. PRIMERA SECCIÓN AMENIDADES (2 Personas) */}
        <section className="bg-[#F9F8F5] py-8 md:py-12 border-t border-[#8C8377]/15">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <img
              src="/images/ameneidadesSuperior.png"
              onError={handleImgErrorFallback}
              alt="Amenidades Habitaciones Superior 2 Personas"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* 5. HABITACIÓN NOTRO (3 Personas) */}
        <div className="py-2">
          <RoomCard
            room={notroRoom}
            onOpenLightbox={openLightbox}
          />
        </div>

        {/* 6. SEGUNDA SECCIÓN AMENIDADES (Notro / 3 Personas) */}
        <section className="bg-[#F9F8F5] py-8 md:py-12 border-t border-[#8C8377]/15">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <img
              src="/images/ameneidadesNotro.png"
              onError={handleImgErrorFallback}
              alt="Amenidades Habitación Notro 3 Personas"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* 7. SECCIÓN INFORMACIÓN ÚTIL */}
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

        {/* 8. SECCIÓN "RESERVA TU ESTADÍA" */}
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

      {/* 9. MODAL LIGHTBOX EXPANDIDO */}
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

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

export default Superior;