import { useState, useRef, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

export function PescaMosca({ lang = 'ES', setLang = () => {}, navigate }) {
  const videoRef = useRef(null);

  // Forzar reproducción del video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.warn('Autoplay bloqueado por el navegador o video no encontrado:', error);
      });
    }
  }, []);

  // Estado del formulario "Diseña tu expedición"
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    programa: '',
    pescadores: '',
    fechas: '',
    notas: '',
  });

  // Manejo de extensión de imágenes (png/jpg fallback)
  const handleImgError = (e) => {
    if (e.target.src.endsWith('.png')) {
      e.target.src = e.target.src.replace('.png', '.jpg');
    } else if (e.target.src.endsWith('.jpg')) {
      e.target.src = e.target.src.replace('.jpg', '.png');
    }
  };

  // Scroll suave al formulario de expedición
  const scrollToForm = () => {
    const formSection = document.getElementById('reserva-pesca');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    if (navigate) {
      navigate('/');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden font-sans">
      {/* 1. Navbar */}
      <Navbar lang={lang} setLang={setLang} darkText={false} navigate={navigate} />

      <main>
        {/* 2. HERO CON VIDEO DE FONDO Y FALLBACK DE IMAGEN */}
        <section className="relative w-full min-h-[85vh] flex flex-col justify-end pt-32 pb-16 bg-[#2C3E35] overflow-hidden">
          {/* Imagen de respaldo si falla o no carga el video */}
          <img
            src="/images/pescaMosca/ecosistemaTrucha.png"
            onError={handleImgError}
            alt="Pesca con mosca Aysén"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          />

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/pescaMosca/ecosistemaTrucha.png"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
          >
            <source src="/videos/pescaMosca.mp4" type="video/mp4" />
          </video>

          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

          <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            {/* Breadcrumb */}
            <p className="font-sans text-xs md:text-sm text-white/80 font-medium tracking-wide flex items-center gap-1.5 mb-6">
              <button
                onClick={goHome}
                className="hover:text-white hover:underline cursor-pointer transition-colors"
              >
                Home
              </button>
              <span>/</span>
              <span>Experiencias</span>
              <span>/</span>
              <span className="text-[#AD9E7A]">Pesca con Mosca</span>
            </p>

            <div className="max-w-2xl text-left">
              <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                Pesca con mosca de clase mundial en los ríos de Aysén
              </h1>

              <p className="font-sans text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                Una experiencia de pesca técnica a la medida, guiada por expertos locales y complementada con la serenidad, la gastronomía y el confort de nuestro refugio de montaña.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN: EL TERRITORIO & LAS AGUAS */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Imagen Izquierda */}
            <div className="w-full h-[360px] sm:h-[440px] lg:h-[480px] overflow-hidden bg-[#EFECE6] shadow-sm">
              <img
                src="/images/pescaMosca/ecosistemaTrucha.png"
                onError={handleImgError}
                alt="Trucha salvaje en agua transparente"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido Derecho */}
            <div className="flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#8C8377] font-medium block mb-3">
                EL TERRITORIO &amp; LAS AGUAS
              </span>
              <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal leading-tight mb-5">
                Uno de los ecosistemas de trucha salvaje más prolíficos del planeta.
              </h2>
              <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed font-light mb-8">
                Los valles y cuencas que rodean a Coyhaique representan el epicentro indiscutido de la pesca con mosca técnica en la Patagonia chilena. Alimentadas por glaciares, deshielos cordilleranos y vertientes subterráneas, nuestras aguas ofrecen un escenario dinámico que desafía la lectura del río y premia la precisión en el lance.
              </p>
              <div>
                <button
                  onClick={scrollToForm}
                  className="bg-[#2C3E35] text-white font-sans text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 hover:bg-[#1f2d26] transition-colors cursor-pointer"
                >
                  Diseñar expedición de pesca
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN 3 COLUMNAS: CARACTERÍSTICAS TÉCNICAS */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Columna 1 */}
            <div className="flex flex-col">
              <div className="w-full h-[260px] sm:h-[300px] overflow-hidden bg-[#EFECE6] mb-5">
                <img
                  src="/images/pescaMosca/rio.png"
                  onError={handleImgError}
                  alt="De ríos caudalosos a spring creeks"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-[#2C3E35] text-xl font-normal mb-3">
                De ríos caudalosos a spring creeks técnicos
              </h3>
              <p className="font-sans text-[#28211A]/75 text-xs sm:text-sm leading-relaxed font-light">
                Acceso a una variedad de escenarios única en el hemisferio sur. Diseñamos las salidas diarias según las condiciones del clima y las eclosiones: flotadas en drift boat por cuencas abiertas, vadeo sigiloso en arroyos de montaña de aguas cristalinas o pesca fina a pez visto en lagunas remotas.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="flex flex-col">
              <div className="w-full h-[260px] sm:h-[300px] overflow-hidden bg-[#EFECE6] mb-5">
                <img
                  src="/images/pescaMosca/trucha.png"
                  onError={handleImgError}
                  alt="Truchas marrón y arcoíris"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-[#2C3E35] text-xl font-normal mb-3">
                Truchas marrón y arcoíris 100% salvajes
              </h3>
              <p className="font-sans text-[#28211A]/75 text-xs sm:text-sm leading-relaxed font-light">
                Poblaciones vigorosas sin intervención de piscicultura, reconocidas por su combatividad y respuesta franca ante moscas secas de gran porte, ninfas en punta y streamers. Peces que ponen a prueba la tensión de la línea y el pulso del pescador experimentado.
              </p>
            </div>

            {/* Columna 3 */}
            <div className="flex flex-col">
              <div className="w-full h-[260px] sm:h-[300px] overflow-hidden bg-[#EFECE6] mb-5">
                <img
                  src="/images/pescaMosca/catch.png"
                  onError={handleImgError}
                  alt="Estricto Catch and Release"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-[#2C3E35] text-xl font-normal mb-3">
                Estricto Catch &amp; Release
              </h3>
              <p className="font-sans text-[#28211A]/75 text-xs sm:text-sm leading-relaxed font-light">
                Operamos bajo una ética innegociable de captura y devolución. Empleamos anzuelos sin rebaba (barbless hooks), redes con malla de goma suave y una manipulación dentro del agua que minimiza el estrés del pez, garantizando la sostenibilidad y pureza de cada cuenca que habitamos.
              </p>
            </div>
          </div>
        </section>

        {/* 5. BANNER INTERMEDIO (Sin opacidad mix-blend / idéntico a Figma) */}
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
          {/* Imagen de fondo nítida */}
          <img
            src="/images/pescaMosca/bannerPesca.png"
            onError={handleImgError}
            alt="Camino austral pesca"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Sombra sutil para lectura de texto */}
          <div className="absolute inset-0 bg-black/45 z-10" />

          <div className="relative z-20 max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">
              Diseña tu travesía por el sur austral
            </h2>
            <p className="font-sans text-white/90 text-sm sm:text-base max-w-3xl leading-relaxed font-light mb-8">
              Conoce nuestras rutas exclusivas por la Carretera Austral y los valles de Coyhaique. Salidas a la medida coordinadas junto a guías locales expertos para transformar cada jornada en una experiencia irrepetible.
            </p>
            <button
              onClick={scrollToForm}
              className="border border-white/60 text-white font-sans text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-white hover:text-[#2C3E35] transition-all cursor-pointer"
            >
              Explorar todas las expediciones
            </button>
          </div>
        </section>

        {/* 6. SECCIÓN PROGRAMAS & ITINERARIOS (Layout en 2 columnas como Figma) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="text-left mb-10">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#8C8377] font-medium block mb-2">
              PROGRAMAS &amp; ITINERARIOS
            </span>
            <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">
              Una semana inmersiva en los ríos de la Patagonia
            </h2>
            <p className="font-sans text-[#28211A]/80 text-sm sm:text-base font-light max-w-4xl leading-relaxed">
              Programas integrales de 8 y 12 días diseñados para pescadores exigentes. Combinamos logística privada desde tu llegada a Chile, flotadas diarias guiadas por expertos locales y el confort de nuestro lodge de montaña al caer la tarde.
            </p>
          </div>

          {/* Grid de 2 columnas: Texto + Imagen nítida */}
          <div className="grid grid-cols-1 lg:grid-cols-2 shadow-md overflow-hidden rounded-sm border border-[#2C3E35]/10">
            {/* Texto Izquierdo */}
            <div className="bg-[#2C3E35] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-widest text-[#AD9E7A] font-semibold block mb-6">
                PROGRAMA BASE (8 DÍAS / 7 NOCHES)
              </span>

              <div className="space-y-6 text-sm sm:text-base font-light text-white/90">
                <div>
                  <h3 className="font-serif text-white text-xl mb-1">Días 1 &amp; 2</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                    Recepción privada en Aeropuerto Arturo Merino Benítez (SCL). Traslado y hospedaje en hotel boutique urbano. Jornada de aclimatación con cata de vinos chilenos de autor y cena de bienvenida para revisar el plan de pesca.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-white text-xl mb-1">Día 3</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                    Vuelo matutino hacia el Aeropuerto de Balmaceda (BBA). Encuentro directo con el equipo de guías. Primera sesión de pesca por la tarde en ruta hacia Coyhaique y check-in en Patagonia House.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-white text-xl mb-1">Días 4 al 7</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                    Cuatro días completos explorando cuencas icónicas (Río Simpson, Paloma, arroyos de cordillera y lagunas privadas). Flotadas y vadeo técnico planificados cada víspera según eclosiones y clima. Almuerzo campestre gourmet a orilla de río y cenas de autor en Restaurant Bòrek.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-white text-xl mb-1">Día 8</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                    Desayuno artesanal en el lodge y traslado privado al Aeropuerto de Balmaceda para conectar con el vuelo de regreso.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen Derecha Nítida */}
            <div className="w-full min-h-[380px] lg:min-h-full bg-[#EFECE6]">
              <img
                src="/images/pescaMosca/programa.png"
                onError={handleImgError}
                alt="Itinerario Pesca en bote por la Patagonia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 7. SECCIÓN AMENIDADES & INCLUSIONES */}
        <section className="bg-[#F4F1EA] py-12 md:py-16 border-y border-[#2C3E35]/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center sm:text-left">
              <div>
                <h4 className="font-serif text-[#2C3E35] text-lg font-normal mb-2">
                  Traslados Privados
                </h4>
                <p className="font-sans text-[#28211A]/75 text-xs leading-relaxed font-light">
                  Movilidad 4x4 y transfers in/out desde aeropuerto de Balmaceda (BBA).
                </p>
              </div>

              <div>
                <h4 className="font-serif text-[#2C3E35] text-lg font-normal mb-2">
                  Licencias &amp; Acceso
                </h4>
                <p className="font-sans text-[#28211A]/75 text-xs leading-relaxed font-light">
                  Gestión integral de permisos de pesca de Aysén y accesos a estancias privadas con derechos de río.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-[#2C3E35] text-lg font-normal mb-2">
                  Amenidades en Lodge
                </h4>
                <p className="font-sans text-[#28211A]/75 text-xs leading-relaxed font-light">
                  Espacio climatizado para secado de waders y almacenamiento seguro de cañas, tinajas de agua caliente post-jornada y Wi-Fi de alta velocidad para mantenerse comunicado.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-[#2C3E35] text-lg font-normal mb-2">
                  Ratio de Guías
                </h4>
                <p className="font-sans text-[#28211A]/75 text-xs leading-relaxed font-light">
                  2 pescadores por cada guía profesional bilingüe certificado.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-[#2C3E35] text-lg font-normal mb-2">
                  Gastronomía Completa
                </h4>
                <p className="font-sans text-[#28211A]/75 text-xs leading-relaxed font-light">
                  Desayuno de campo, box lunch térmico gourmet en el río con vinos locales, maridaje y cenas en Restaurant Bòrek.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SECCIÓN FORMULARIO DE RESERVA */}
        <section id="reserva-pesca" className="py-16 md:py-24 bg-[#F9F8F5]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Lado Izquierdo */}
              <div className="flex flex-col justify-center pt-4">
                <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                  Diseña tu expedición
                </h2>
                <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed max-w-md font-light">
                  Nuestras salidas de pesca son privadas y confeccionadas a medida según las condiciones de la cuenca y el estilo de cada pescador. Déjanos tus datos para coordinar una propuesta técnica personalizada junto a nuestro equipo de guías.
                </p>
              </div>

              {/* Lado Derecho: Formulario */}
              <div className="bg-[#EFECE6] p-6 sm:p-8 border border-[#2C3E35]/10 shadow-sm">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        Nombre*
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        Apellido*
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.apellido}
                        onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        Número de Teléfono*
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        Programa de interés
                      </label>
                      <select
                        value={formData.programa}
                        onChange={(e) => setFormData({ ...formData, programa: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      >
                        <option value="">Selecciona programa...</option>
                        <option value="8dias">Programa 8 Días / 7 Noches</option>
                        <option value="12dias">Programa 12 Días / 11 Noches</option>
                        <option value="personalizado">Salida Personalizada</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        N° de pescadores
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="12"
                        placeholder="2"
                        value={formData.pescadores}
                        onChange={(e) => setFormData({ ...formData, pescadores: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        Fechas tentativas*
                      </label>
                      <input
                        type="text"
                        placeholder="dd/mm/aaaa"
                        required
                        value={formData.fechas}
                        onChange={(e) => setFormData({ ...formData, fechas: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        Notas o requerimientos especiales
                      </label>
                      <input
                        type="text"
                        value={formData.notas}
                        onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2C3E35] text-white font-sans text-xs uppercase tracking-widest font-semibold py-3.5 hover:bg-[#1f2d26] transition-colors mt-3 cursor-pointer"
                  >
                    Solicitar propuesta de expedición
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default PescaMosca;