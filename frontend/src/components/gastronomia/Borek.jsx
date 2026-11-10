import { useState, useRef, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

export function Borek({ lang = 'ES', setLang = () => {}, navigate }) {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  // Imágenes de la galería
  const galleryImages = [
    '/images/borek/galeria1.png',
    '/images/borek/galeria2.png',
    '/images/borek/galeria3.png',
    '/images/borek/galeria4.png',
    '/images/borek/galeria5.png',
    '/images/borek/galeria6.png',
    '/images/borek/galeria7.png',
    '/images/borek/galeria8.png',
  ];

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  // Guardamos el índice numérico de la foto ampliada (null si está cerrado)
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Reproducción automática de videos
  useEffect(() => {
    [video1Ref, video2Ref].forEach((ref) => {
      if (ref.current) {
        ref.current.muted = true;
        ref.current.play().catch(() => {});
      }
    });
  }, []);

  // Avance automático del carrusel principal cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  // Controles de la galería principal
  const nextGallery = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGallery = () => {
    setCurrentGalleryIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // Controles dentro del Lightbox (Modal)
  const nextLightbox = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevLightbox = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // Navegación por teclado dentro del Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'Escape') setLightboxIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleImgError = (e) => {
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

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden font-sans">
      {/* 1. Navbar con texto oscuro */}
      <Navbar lang={lang} setLang={setLang} darkText={true} navigate={navigate} />

      <main className="pt-28 md:pt-36">
        {/* 2. BREADCRUMB */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-4 pb-2">
          <p className="font-sans text-xs md:text-sm text-[#8C8377] font-medium tracking-wide flex items-center gap-1.5">
            <button
              onClick={goHome}
              className="hover:text-[#2C3E35] hover:underline cursor-pointer transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#C88E4B]">Gastronomía Bòrek</span>
          </p>
        </section>

        {/* 3. HERO / HEADER (Frame 353) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Lado Izquierdo: Textos */}
            <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-4">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#8C8377] font-medium block mb-3">
                GASTRONOMÍA DE ORIGEN · RESTAURANT BÖREK
              </span>
              <h1 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-5">
                El sabor indómito<br />de Aysén
              </h1>
              <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed font-light mb-8">
                Al final del camino, la Patagonia tiene la mesa puesta. Descubre Börek, nuestra propuesta de cocina fusión farm-to-table donde los ingredientes locales, el fuego y la cordillera se encuentran.
              </p>
              <div>
                <a
                  href="https://borek19.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#2C3E35] text-white font-sans text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 hover:bg-[#1f2d26] transition-colors cursor-pointer rounded-sm"
                >
                  Reservar mesa en Börek
                </a>
              </div>
            </div>

            {/* Lado Derecho: 2 Videos/Imágenes verticales paralelas */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[380px] sm:h-[480px] lg:h-[540px]">
              {/* Media 1 */}
              <div className="w-full h-full overflow-hidden bg-[#EFECE6] shadow-sm relative">
                <video
                  ref={video1Ref}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/borek/videoBorek1.webm" type="video/webm" />
                  <source src="/images/borek/videoBorek1.mp4" type="video/mp4" />
                </video>
                <img
                  src="/images/borek/videoBorek1.png"
                  onError={handleImgError}
                  alt="Cocina de origen Bòrek 1"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
                />
              </div>

              {/* Media 2 */}
              <div className="w-full h-full overflow-hidden bg-[#EFECE6] shadow-sm relative">
                <video
                  ref={video2Ref}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/borek/videoBorek2.webm" type="video/webm" />
                  <source src="/images/borek/videoBorek2.mp4" type="video/mp4" />
                </video>
                <img
                  src="/images/borek/videoBorek2.png"
                  onError={handleImgError}
                  alt="Cocina de origen Bòrek 2"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 4. SECCIÓN LOGO & MANIFIESTO GASTRONÓMICO */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-t border-[#2C3E35]/10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-8 w-48 sm:w-64">
              <img
                src="/images/borek/logoBorek.png"
                onError={handleImgError}
                alt="Logo Restaurant BÖREK"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            <p className="font-sans text-[#28211A]/85 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              La cena que la Carretera Austral se merece. Börek nace de un respeto profundo por la tierra que habitamos. Creemos en una gastronomía viva, íntima y de cupos limitados, diseñada para recuperar energías tras un día de expedición. Cada plato es un tributo al territorio: ingredientes cultivados en nuestro propio invernadero, pesca de ríos fríos australes y cortes nobles provistos por productores locales a los que conocemos por su nombre. Patagonia pura, servida en tu mesa.
            </p>
          </div>
        </section>

        {/* 5. SECCIÓN 3 PILARES */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Pilar 1 */}
            <div className="flex flex-col">
              <div className="w-full h-[320px] sm:h-[360px] overflow-hidden bg-[#EFECE6] mb-5 shadow-sm">
                <img
                  src="/images/borek/pilar1.png"
                  onError={handleImgError}
                  alt="Farm-to-Table y Invernadero"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-[#2C3E35] text-xl sm:text-2xl font-normal mb-3">
                Farm-to-Table &amp; Invernadero
              </h3>
              <p className="font-sans text-[#28211A]/75 text-xs sm:text-sm leading-relaxed font-light">
                Del huerto a la mesa. Cultivamos nuestras propias hierbas y vegetales de temporada a pasos del restaurante, garantizando frescura absoluta y un profundo respeto por los ciclos de la naturaleza austral.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="flex flex-col">
              <div className="w-full h-[320px] sm:h-[360px] overflow-hidden bg-[#EFECE6] mb-5 shadow-sm">
                <img
                  src="/images/borek/pilar2.png"
                  onError={handleImgError}
                  alt="Fusión Austral (Menú Dinámico)"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-[#2C3E35] text-xl sm:text-2xl font-normal mb-3">
                Fusión Austral (Menú Dinámico)
              </h3>
              <p className="font-sans text-[#28211A]/75 text-xs sm:text-sm leading-relaxed font-light">
                Técnicas contemporáneas aplicadas a la despensa patagónica. Una carta versátil que incluye carnes locales, pesca fresca y sofisticadas opciones vegetarianas, pensadas para maridar con vinos chilenos de autor.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="flex flex-col">
              <div className="w-full h-[320px] sm:h-[360px] overflow-hidden bg-[#EFECE6] mb-5 shadow-sm">
                <img
                  src="/images/borek/pilar3.png"
                  onError={handleImgError}
                  alt="Atmósfera Íntima y Entorno"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-[#2C3E35] text-xl sm:text-2xl font-normal mb-3">
                Atmósfera Íntima &amp; Entorno
              </h3>
              <p className="font-sans text-[#28211A]/75 text-xs sm:text-sm leading-relaxed font-light">
                Un refugio silencioso enmarcado por las vistas al majestuoso Cerro Mackay. Atendemos pocas mesas para garantizar un servicio personalizado, cálido y pausado, ideal para parejas y pequeños grupos de viajeros.
              </p>
            </div>
          </div>
        </section>

        {/* 6. SECCIÓN "VISITA NUESTRO RESTAURANTE" */}
        <section id="reserva-borek" className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#F4F1EA] border border-[#2C3E35]/10 p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="w-full h-[320px] sm:h-[400px] lg:h-[440px] overflow-hidden bg-[#EFECE6]">
              <img
                src="/images/borek/visita.png"
                onError={handleImgError}
                alt="Terraza y restaurant Börek"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center px-2 lg:px-6">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#8C8377] font-medium block mb-3">
                VISITA NUESTRO RESTAURANTE
              </span>
              <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal leading-tight mb-4">
                Explora la carta y asegura tu lugar
              </h2>
              <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed font-light mb-8">
                Nuestro salón cuenta con capacidad limitada para mantener la atmósfera íntima que nos caracteriza. Te invitamos a conocer nuestro menú de temporada y reservar tu experiencia con anticipación.
              </p>
              <div>
                <a
                  href="https://borek19.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#2C3E35] text-white font-sans text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 hover:bg-[#1f2d26] transition-colors rounded-sm cursor-pointer"
                >
                  Ver Carta y Web de Börek
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SECCIÓN GALERÍA CON CARRUSEL */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 border-t border-[#2C3E35]/10">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-1">
                EXPERIENCIA VISUAL
              </span>
              <h2 className="font-serif text-[#C88E4B] text-2xl sm:text-3xl lg:text-4xl font-normal">
                Galería
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevGallery}
                aria-label="Imagen anterior"
                className="p-3 bg-[#2C3E35] text-white hover:bg-[#1f2d26] transition-colors rounded-full cursor-pointer"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={nextGallery}
                aria-label="Siguiente imagen"
                className="p-3 bg-[#2C3E35] text-white hover:bg-[#1f2d26] transition-colors rounded-full cursor-pointer"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Grilla dinámica de fotos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {/* Foto 1 */}
            <div
              onClick={() => setLightboxIndex(currentGalleryIndex)}
              className="group h-[380px] sm:h-[460px] bg-[#EFECE6] overflow-hidden shadow-sm cursor-pointer relative"
            >
              <img
                src={galleryImages[currentGalleryIndex]}
                onError={handleImgError}
                alt={`Galería Börek ${currentGalleryIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-4 py-2 backdrop-blur-sm rounded-sm">
                  Ampliar
                </span>
              </div>
            </div>

            {/* Foto 2 */}
            <div
              onClick={() => setLightboxIndex((currentGalleryIndex + 1) % galleryImages.length)}
              className="group hidden md:block h-[380px] sm:h-[460px] bg-[#EFECE6] overflow-hidden shadow-sm cursor-pointer relative"
            >
              <img
                src={galleryImages[(currentGalleryIndex + 1) % galleryImages.length]}
                onError={handleImgError}
                alt={`Galería Börek ${(currentGalleryIndex + 2) % galleryImages.length}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-4 py-2 backdrop-blur-sm rounded-sm">
                  Ampliar
                </span>
              </div>
            </div>

            {/* Foto 3 */}
            <div
              onClick={() => setLightboxIndex((currentGalleryIndex + 2) % galleryImages.length)}
              className="group hidden lg:block h-[380px] sm:h-[460px] bg-[#EFECE6] overflow-hidden shadow-sm cursor-pointer relative"
            >
              <img
                src={galleryImages[(currentGalleryIndex + 2) % galleryImages.length]}
                onError={handleImgError}
                alt={`Galería Börek ${(currentGalleryIndex + 3) % galleryImages.length}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-4 py-2 backdrop-blur-sm rounded-sm">
                  Ampliar
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. MODAL LIGHTBOX CON NAVEGACIÓN DENTRO DE LA IMAGEN AMPLIADA */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-pointer select-none"
        >
          {/* Botón cerrar (Esc) */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-[#C88E4B] transition-colors cursor-pointer z-50 p-2"
            aria-label="Cerrar vista ampliada"
          >
            ✕
          </button>

          {/* Flecha Izquierda */}
          <button
            onClick={prevLightbox}
            aria-label="Imagen anterior"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#2C3E35] text-white p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all cursor-pointer z-50 border border-white/20"
          >
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Imagen ampliada */}
          <div className="relative max-w-full max-h-[85vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightboxIndex]}
              alt={`Galería Börek ampliada ${lightboxIndex + 1}`}
              onError={handleImgError}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm transition-all duration-300"
            />
            <span className="text-white/70 font-sans text-xs uppercase tracking-widest mt-4">
              {lightboxIndex + 1} / {galleryImages.length}
            </span>
          </div>

          {/* Flecha Derecha */}
          <button
            onClick={nextLightbox}
            aria-label="Siguiente imagen"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#2C3E35] text-white p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all cursor-pointer z-50 border border-white/20"
          >
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default Borek;