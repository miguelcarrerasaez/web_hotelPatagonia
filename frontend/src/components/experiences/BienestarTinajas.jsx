import { useState } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

export function BienestarTinajas({ lang = 'ES', setLang = () => {}, navigate }) {
  // Estado para la galería carrusel de tinajas
  const galleryImages = [
    '/images/tinaja1.png',
    '/images/tinaja2.png',
    '/images/tinajaExp.jpg',
  ];

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Estados del formulario Reserva Tinajas
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    medioContacto: '',
    personas: '',
    fecha: '',
    horario: '',
  });

  const nextGallery = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGallery = () => {
    setCurrentGalleryIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleImgError = (e) => {
    if (e.target.src.endsWith('.png')) {
      e.target.src = e.target.src.replace('.png', '.jpg');
    } else if (e.target.src.endsWith('.jpg')) {
      e.target.src = e.target.src.replace('.jpg', '.png');
    }
  };

  const scrollToReservas = () => {
    const section = document.getElementById('reservas-tinajas');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar lang={lang} setLang={setLang} darkText={true} navigate={navigate} />

      <main className="pt-28 md:pt-36">
        {/* 2. BREADCRUMB CON LINK A HOME */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-4 pb-4">
          <p className="font-sans text-xs md:text-sm text-[#8C8377] font-medium tracking-wide flex items-center gap-1.5">
            <button
              onClick={goHome}
              className="hover:text-[#2C3E35] hover:underline cursor-pointer transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#C88E4B]">Bienestar y tinajas</span>
          </p>
        </section>

        {/* 3. SECCIÓN: EL ENCUENTRO ENTRE EL AGUA Y EL FUEGO */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Lado Izquierdo: Imagen Bòrek */}
            <div className="w-full h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden shadow-sm bg-[#EFECE6]">
              <img
                src="/images/borekExp.jpg"
                onError={handleImgError}
                alt="Bòrek - Bienestar y Gastronomía"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Lado Derecho: Contenido explicativo */}
            <div className="flex flex-col justify-center px-2 lg:px-8">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-3">
                BIENESTAR Y GASTRONOMÍA
              </span>
              <h1 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-5">
                El encuentro entre el agua y el fuego
              </h1>
              <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed font-light mb-8">
                Una pausa concebida para restaurar el cuerpo y despertar los sentidos. Combinamos el ritual de nuestras tinajas al aire libre inmersas en el bosque nativo con la cocina de origen y fuego de Bòrek. Una experiencia que transforma el descanso en un viaje gastronómico y territorial, ya sea durante una tarde de desconexión o como parte de tu estancia en el lodge.
              </p>
              <div>
                <button
                  onClick={() => {
                    if (navigate) navigate('/gastronomia');
                    else window.location.href = '/gastronomia';
                  }}
                  className="bg-[#2C3E35] text-white font-sans text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 hover:bg-[#1f2d26] transition-colors cursor-pointer"
                >
                  Descubrir Propuesta Gastronómica
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN: NUESTROS RITUALES (ALTURA Y ESCALA AJUSTADAS) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10">
          <div className="text-left mb-6">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
              NUESTROS RITUALES
            </span>
            <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal mb-3">
              Elige tu momento de desconexión
            </h2>
            <p className="font-sans text-[#28211A]/80 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
              Dos experiencias diseñadas para disfrutar del contraste entre el calor del agua al aire libre y el silencio del bosque nativo. Selecciona el ritual que mejor se adapta al ritmo de tu viaje.
            </p>
          </div>

          {/* Imagen encuadrada con altura acotada */}
          <div className="w-full h-[280px] sm:h-[360px] lg:h-[400px] overflow-hidden bg-[#EFECE6] shadow-sm">
            <img
              src="/images/tinajaExp.jpg"
              onError={(e) => {
                if (e.target.src.includes('tinajasubHome.png')) {
                  e.target.src = '/images/tinajaExp.png';
                } else {
                  handleImgError(e);
                }
              }}
              alt="Ritual de Tinajas en la Patagonia"
              className="w-full h-full object-cover object-[center_75%]"
            />
          </div>
        </section>

        {/* 5. SECCIÓN PROGRAMAS (ESCALA MÁS PEQUEÑA Y CENTRADA) */}
        <section className="max-w-[1020px] mx-auto px-6 md:px-12 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
            
            {/* Programa 1: Estadía y Tinajas */}
            <div 
              onClick={scrollToReservas}
              className="group cursor-pointer flex flex-col items-center w-full max-w-[420px] transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src="/images/programa1tinaja.png"
                onError={handleImgError}
                alt="Programa 1 - Estadía y Tinajas: Descanso, tinajas y sabores"
                className="w-full h-auto object-contain shadow-sm border border-[#2C3E35]/10 group-hover:shadow-md transition-shadow"
              />
            </div>

            {/* Programa 2: Tinajas y Gastronomía */}
            <div 
              onClick={scrollToReservas}
              className="group cursor-pointer flex flex-col items-center w-full max-w-[420px] transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src="/images/programa2tinaja.png"
                onError={handleImgError}
                alt="Programa 2 - Tinajas y Gastronomía: Tinajas y mesa patagónica"
                className="w-full h-auto object-contain shadow-sm border border-[#2C3E35]/10 group-hover:shadow-md transition-shadow"
              />
            </div>

          </div>
        </section>

        {/* 6. SECCIÓN VER GALERÍA (Carrusel deslizante) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14">
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-serif text-[#C88E4B] text-2xl sm:text-3xl font-normal">
              Ver Galería
            </h2>
            
            {/* Botones de control del carrusel */}
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

          {/* Carrusel Visor Multimagen */}
          <div className="relative w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ease-in-out">
              {/* Foto Principal Actual */}
              <div className="h-[360px] sm:h-[440px] lg:h-[480px] bg-[#EFECE6] overflow-hidden shadow-sm">
                <img
                  src={galleryImages[currentGalleryIndex]}
                  onError={handleImgError}
                  alt={`Galería Tinajas ${currentGalleryIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>

              {/* Foto Secundaria (Siguiente) */}
              <div className="hidden md:block h-[360px] sm:h-[440px] lg:h-[480px] bg-[#EFECE6] overflow-hidden shadow-sm">
                <img
                  src={galleryImages[(currentGalleryIndex + 1) % galleryImages.length]}
                  onError={handleImgError}
                  alt={`Galería Tinajas ${(currentGalleryIndex + 2) % galleryImages.length}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. SECCIÓN "RESERVA TINAJAS" */}
        <section id="reservas-tinajas" className="bg-[#F4F1EA] py-16 md:py-20 text-[#28211A]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* Lado Izquierdo */}
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                  Reserva Tinajas
                </h2>
                <p className="font-sans text-[#28211A]/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md font-light">
                  Conéctate con la esencia de la Patagonia en un ambiente cálido y natural.
                </p>
              </div>

              {/* Lado Derecho: Formulario */}
              <div className="bg-[#EFECE6] p-6 sm:p-8 border border-[#2C3E35]/10 flex flex-col gap-4">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                  
                  {/* Nombre y Apellido */}
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

                  {/* Email y Teléfono */}
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

                  {/* Medio de contacto y Personas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        ¿En qué medio te contactamos?
                      </label>
                      <select
                        value={formData.medioContacto}
                        onChange={(e) => setFormData({ ...formData, medioContacto: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      >
                        <option value="">Selecciona...</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Email">Email</option>
                        <option value="Llamada">Llamada telefónica</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        Cantidad de personas
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        placeholder="2"
                        value={formData.personas}
                        onChange={(e) => setFormData({ ...formData, personas: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      />
                    </div>
                  </div>

                  {/* Fecha y Horario */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        ¿Qué día deseas reservar?*
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.fecha}
                        onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-medium text-[#8C8377] uppercase tracking-wider mb-1">
                        Horario
                      </label>
                      <select
                        value={formData.horario}
                        onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                        className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                      >
                        <option value="">Selecciona horario...</option>
                        <option value="12:00 - 15:00">12:00 - 15:00 hrs</option>
                        <option value="15:30 - 18:30">15:30 - 18:30 hrs</option>
                        <option value="19:00 - 22:00">19:00 - 22:00 hrs</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2C3E35] text-white font-sans text-sm font-medium py-3 hover:bg-[#1f2d26] transition-colors mt-3 cursor-pointer"
                  >
                    Enviar
                  </button>

                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default BienestarTinajas;