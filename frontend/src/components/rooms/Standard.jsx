import { useState, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

// Mapeo de datos con las carpetas de imágenes individuales por habitación
const roomsData = [
  {
    id: 'lenga',
    name: 'Lenga',
    specs: '20 m²  |  Queen Size  |  2 personas',
    description:
      'Inspirada en la solidez y calidez del árbol que le da su nombre, Lenga es una invitación al descanso profundo. Un espacio envuelto en maderas nobles de origen local, textiles orgánicos y una luz natural sutil que filtra la frondosidad del bosque nativo. El refugio perfecto para pausar el ritmo y contemplar la Patagonia en absoluto silencio.',
    images: [
      '/images/Lenga/lenga1.png',
      '/images/Lenga/lenga2.png',
      '/images/Lenga/lenga3.png',
      '/images/Lenga/lenga4.png',
    ],
    reverse: false,
  },
  {
    id: 'san-valentin',
    name: 'San Valentín',
    specs: '20 m²  |  King Size  |  2 personas',
    description:
      'Ubicada en el primer nivel del lodge, San Valentín es un refugio de atmósfera íntima y acogedora. Sus 20 m² de arquitectura cálida han sido diseñados para envolver al viajero en el silencio patagónico, creando el santuario perfecto para recuperar energías y desconectar tras un día de expedición.',
    images: [
      '/images/Sanvalentin/sanvalentin1.avif',
      '/images/Sanvalentin/sanvalentin2.avif',
    ],
    reverse: true,
  },
  {
    id: 'tineo',
    name: 'Tineo',
    specs: '25 m²  |  King Size  |  2 personas',
    description:
      'Ubicada en el segundo nivel del lodge, Tineo ofrece una perspectiva elevada y serena del entorno. Un refugio íntimo de atmósfera cálida, diseñado como el santuario perfecto para recuperar energías en total confort tras un día de expedición en Aysén.',
    images: [
      '/images/Tineo/tineo.png',
      '/images/Tineo/tineo2.png',
      '/images/Tineo/tineo3.png',
      '/images/Tineo/tineo4.png',
      '/images/Tineo/tineo5.jpg',
    ],
    reverse: false,
  },
  {
    id: 'tepa',
    name: 'Tepa',
    specs: '25 m²  |  King Size  |  2 personas',
    description:
      'Ubicada en el segundo nivel del lodge, Tepa invita a contemplar el bosque nativo desde una perspectiva privilegiada. Un refugio de 25 m² donde la calidez de la madera de autor y la luz natural crean la atmósfera perfecta para el descanso sereno y la desconexión tras un día de expedición.',
    images: [
      '/images/Tepa/tepa1.png',
      '/images/Tepa/tepa2.png',
      '/images/Tepa/tepa3.png',
      '/images/Tepa/tepa4.png',
    ],
    reverse: true,
  },
];

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

  // Manejador de error para probar extensión alternativa (.jpg / .png / fallback)
  const handleImgError = (e, imgPath) => {
    if (imgPath.endsWith('.png')) {
      e.target.src = imgPath.replace('.png', '.jpg');
    } else if (imgPath.endsWith('.jpg')) {
      e.target.src = imgPath.replace('.jpg', '.png');
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* BLOQUE DE TEXTO JUSTIFICADO AL CENTRO (Figma Alignment) */}
        <div
          className={`lg:col-span-5 flex flex-col items-center justify-center text-center px-2 lg:px-6 ${
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

        {/* BLOQUE FOTOGRÁFICO VERTICAL (531px x 861px en Figma) */}
        <div
          className={`lg:col-span-7 flex justify-center w-full ${
            room.reverse ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="relative w-full max-w-[531px] h-[550px] sm:h-[680px] lg:h-[780px] overflow-hidden group shadow-md bg-[#EFECE6]">
            
            {/* Imagen interactiva con clic para expandir */}
            <img
              src={room.images[currentImgIndex]}
              alt={`Fotografía ${currentImgIndex + 1} de ${room.name}`}
              onError={(e) => handleImgError(e, room.images[currentImgIndex])}
              onClick={() => onOpenLightbox(room.images, currentImgIndex, room.name)}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-102"
            />

            {/* Overlay sutil para hover */}
            <div
              onClick={() => onOpenLightbox(room.images, currentImgIndex, room.name)}
              className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer pointer-events-none"
            >
              <span className="bg-black/60 text-white font-sans text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                Ampliar imagen
              </span>
            </div>

            {/* Flecha Izquierda */}
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

            {/* Flecha Derecha */}
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

            {/* Indicador de número de foto */}
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

export function Standard({ lang = 'ES', setLang = () => {}, navigate }) {
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

  // Escucha teclas para navegar el lightbox en pantalla completa
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

  const handleLightboxImgError = (e, imgPath) => {
    if (imgPath.endsWith('.png')) {
      e.target.src = imgPath.replace('.png', '.jpg');
    } else if (imgPath.endsWith('.jpg')) {
      e.target.src = imgPath.replace('.jpg', '.png');
    }
  };

    // Agrega estas funciones dentro del componente Standard:
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
      
      {/* 1. Navbar con texto oscuro */}
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
            <span className="text-[#C88E4B]">Standard</span>
          </p>
          <h1 className="font-serif text-[#2C3E35] text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Standard
          </h1>
        </section>

        {/* 3. LISTADO DE HABITACIONES */}
        <div className="flex flex-col gap-4 py-4">
          {roomsData.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>

        {/* 4. SECCIÓN AMENIDADES (Ancho completo alineado a Figma) */}
        <section className="bg-[#F9F8F5] py-8 md:py-12 border-t border-[#8C8377]/15">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <img
              src="/images/ameneidades.png"
              alt="Amenidades Standard Patagonia House"
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

      {/* 7. LIGHTBOX / MODAL EXPANDIDO A PANTALLA COMPLETA */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-6 text-white animate-fadeIn">
          
          {/* Header del Lightbox */}
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

          {/* Imagen central */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={lightbox.images[lightbox.index]}
              alt={`${lightbox.title} ampliada`}
              onError={(e) => handleLightboxImgError(e, lightbox.images[lightbox.index])}
              className="max-h-[82vh] max-w-[90vw] object-contain shadow-2xl transition-all duration-300"
            />

            {/* Navegación anterior/siguiente en el modal */}
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

          {/* Pie de modal */}
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

export default Standard;