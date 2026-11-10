import { useState } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

export function SalvajeCorazon({ lang = 'ES', setLang = () => {}, navigate }) {
  // Estado para el modal de Tour expandido
  const [selectedTour, setSelectedTour] = useState(null);

  // Estado para la pestaña activa en "Planificación del Viaje"
  const [activeTab, setActiveTab] = useState(0);

  // Estado del formulario de reserva al final
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    destino: '',
    personas: '',
    fechas: '',
    notas: '',
  });

  // Manejo de extensiones de imagen (.png / .jpg fallback)
  const handleImgError = (e) => {
    if (e.target.src.endsWith('.png')) {
      e.target.src = e.target.src.replace('.png', '.jpg');
    } else if (e.target.src.endsWith('.jpg')) {
      e.target.src = e.target.src.replace('.jpg', '.png');
    }
  };

  // Datos de los 6 tours conectados con las fotos de public/images/salvajeCorazon/
  const toursData = [
    {
      id: 'norte',
      title: 'La Gran Ruta Norte (Pumalín y Futaleufú)',
      shortDesc:
        'Una expedición que conecta el Parque Nacional Pumalín, sus alerces milenarios y los rápidos de clase mundial del río Futaleufú, terminando en las termas de Puyuhuapi.',
      duration: '9 Días',
      format: null,
      experience:
        'Navegación por fiordos, avistamiento de fauna marina, senderismo en bosques húmedos y cruce cordillerano.',
      phases: [
        '1. Inmersión en la selva valdiviana y fiordos (Chaitén y Pumalín).',
        '2. Aventura en aguas blancas (Futaleufú).',
        '3. Descenso al sur y recuperación (Esquel y Termas de Puyuhuapi).',
      ],
      imgCard: '/images/salvajeCorazon/tour1.png',
      imgModal: '/images/salvajeCorazon/tour2.png', // Imagen de la Vizcacha en Pumalín
    },
    {
      id: 'sur',
      title: 'Valles, Lagos y Glaciares (Ruta Sur)',
      shortDesc:
        'Travesía por el corazón de Aysén, explorando el inmenso Lago General Carrera, las capillas de mármol y la reserva de vida silvestre de Cochrane.',
      duration: '9 Días',
      format: null,
      experience:
        'Navegación glaciar, estepas vírgenes y encuentro con la cultura gaucha en valles remotos.',
      phases: [
        '1. Exploración del valle de Coyhaique.',
        '2. El gran lago turquesa y la cuenca del Río Cochrane.',
        '3. Cavernas de mármol y ventisqueros del Hielo Norte (Río Exploradores).',
      ],
      imgCard: '/images/salvajeCorazon/tour3.png',
      imgModal: '/images/salvajeCorazon/tour3.png',
    },
    {
      id: 'medida',
      title: 'Carretera Austral a Medida',
      shortDesc:
        '1.000 kilómetros de selva fría, fiordos y glaciares colgantes. Diseñamos la ruta por la mítica Carretera Austral adaptada a tus tiempos, desde 3 hasta 10 días.',
      duration: null,
      format: 'Expedición Custom / 100% Flexible.',
      experience:
        'Viajamos en vehículos 4x4 explorando rutas secundarias. Tú decides el ritmo: caminatas en glaciares colgantes, cabalgatas en estancias o navegación de ríos.',
      phases: [
        '1. Chaitén - Coyhaique',
        '2. Coyhaique - Cochrane',
        '3. Tramo más extremo hasta Villa O’Higgins',
      ],
      imgCard: '/images/salvajeCorazon/tour4.png',
      imgModal: '/images/salvajeCorazon/tour4.png',
    },
    {
      id: 'lorenzo',
      title: 'Campamento Base en Macizo San Lorenzo',
      shortDesc:
        'Una expedición andina con apoyo de caballos hacia la segunda cumbre más alta de la Patagonia. Una experiencia inmersiva en la alta montaña.',
      duration: null,
      format: '9 días (Dificultad Moderada).',
      experience:
        'Desconexión absoluta. Caminatas a glaciares milenarios, exploración de bosques de lenga y montañismo alpino desde un campamento exclusivo por sobre la línea de árboles.',
      phases: [],
      imgCard: '/images/salvajeCorazon/tour5.png',
      imgModal: '/images/salvajeCorazon/tour5.png',
    },
    {
      id: 'jeinimeni',
      title: 'Exploración Cordillera Jeinimeni',
      shortDesc:
        'Una travesía de contrastes extremos. Desde las orillas del Lago General Carrera hasta la árida y espectacular geografía de la reserva Jeinimeni.',
      duration: null,
      format: '9 días.',
      experience:
        'Aislamiento espléndido. Operamos un campamento base a orillas de un lago de montaña, explorando valles glaciares, antiguas sendas de gauchos y sitios de arte rupestre tehuelche.',
      phases: [],
      imgCard: '/images/salvajeCorazon/tour6.png',
      imgModal: '/images/salvajeCorazon/tour6.png',
    },
    {
      id: 'hielosur',
      title: 'Campo de Hielo Sur (La Última Frontera)',
      shortDesc:
        'Una travesía épica tras los pasos de los primeros exploradores. Navegación por el inmenso Lago O’Higgins y aproximación a pie hacia el Campo de Hielo Sur.',
      duration: null,
      format: 'Expedición de Alta Dificultad (con guías de montañismo expertos).',
      experience:
        'Navegación hacia estancias remotas, caminatas por valles glaciares vírgenes, asados tradicionales en puestos de gauchos y la llegada al borde mismo del caparazón de hielo más grande del hemisferio sur.',
      phases: [],
      imgCard: '/images/salvajeCorazon/tour7.png',
      imgModal: '/images/salvajeCorazon/tour7.png',
    },
  ];

  // Pestañas de Planificación del Viaje
  const planningTabs = [
    {
      title: 'Cómo Llegar & Traslados',
      content: [
        {
          bold: 'Conexión aérea:',
          text: 'Vuelo internacional a Santiago (SCL) y conexión doméstica directa de 3 horas hacia el Aeropuerto de Balmaceda (BBA).',
        },
        {
          bold: 'Recepción privada:',
          text: 'Todo el itinerario incluye bienvenida personalizada en el aeropuerto de Balmaceda y traslado privado de 45 minutos hacia Patagonia House en Coyhaique.',
        },
        {
          bold: 'Logística en ruta:',
          text: 'Travesías en vehículos 4x4 acondicionados para caminos de ripio austral, con vehículo de respaldo y telefonía satelital permanente en zonas sin cobertura.',
        },
      ],
    },
    {
      title: 'Temporada & Clima',
      content: [
        {
          bold: 'Ventana de viaje:',
          text: 'De mediados de octubre a mediados de abril.',
        },
        {
          bold: 'Verano austral (Diciembre a Febrero):',
          text: 'Días largos con luz hasta las 22:00 hrs y clima templado para navegación lacustre y alta montaña.',
        },
        {
          bold: 'Otoño dorado (Marzo a Mayo):',
          text: 'Nuestra época predilecta; los bosques de lenga se tiñen de rojo y ocre bajo cielos despejados y vientos suaves.',
        },
        {
          bold: 'Microclima de Aysén:',
          text: 'La cuenca del Lago General Carrera ofrece un clima notablemente más seco y soleado que los fiordos o Torres del Paine.',
        },
      ],
    },
    {
      title: 'Equipamiento Esencial',
      content: [
        {
          bold: 'La regla de las cuatro estaciones:',
          text: 'En la Patagonia es común vivir las cuatro estaciones en una misma jornada.',
        },
        {
          bold: 'Capas técnicas recomendadas:',
          text: 'Cortaviento/chaqueta impermeable de membrana (GORE-TEX o similar), polar térmico, primera capa transpirable, gorro, guantes y anteojos con filtro UV.',
        },
        {
          bold: 'Calzado:',
          text: 'Botas de trekking impermeables y de caña media, ya domadas previamente.',
        },
        {
          bold: 'Equipo de campamento:',
          text: 'En expediciones remotas, Salvaje Corazón provee carpas de cuatro estaciones y logística completa de cocina; el huésped solo debe traer saco de dormir y colchoneta personal.',
        },
      ],
    },
    {
      title: 'Salud, Agua & Confort',
      content: [
        {
          bold: 'Agua pura de vertiente:',
          text: 'Las aguas de los ríos, lagos y vertientes de Aysén figuran entre las más puras del mundo y son aptas para consumo directo en ruta.',
        },
        {
          bold: 'Estándar de descanso:',
          text: 'Combinamos noches en estancias y refugios locales con el confort y la gastronomía de alto nivel en nuestro lodge base en Coyhaique.',
        },
        {
          bold: 'Seguridad médica:',
          text: 'Hospital regional de alta complejidad en Coyhaique. Recomendamos viajar siempre con seguro de asistencia médica y evacuación.',
        },
      ],
    },
  ];

  const goHome = () => {
    if (navigate) navigate('/');
    else window.location.href = '/';
  };

  const scrollToReserva = () => {
    const el = document.getElementById('disena-expedicion');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden font-sans">
      {/* 1. Navbar */}
      <Navbar lang={lang} setLang={setLang} darkText={false} navigate={navigate} />

      <main>
        {/* 2. HERO CON FOTO "heroSalvaje.png" */}
        <section className="relative w-full min-h-[85vh] flex flex-col justify-end pt-32 pb-16 bg-[#2C3E35] overflow-hidden">
          <img
            src="/images/salvajeCorazon/heroSalvaje.png"
            onError={handleImgError}
            alt="Salvaje Corazón Patagonia"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          />
          <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />

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
              <span className="text-[#AD9E7A]">Salvaje Corazón</span>
            </p>

            <div className="max-w-2xl text-left">
              <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                Salvaje Corazón: El pulso indómito de la Patagonia
              </h1>
              <p className="font-sans text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-light mb-6">
                Travesías privadas y expediciones de autor a tu propio ritmo por los rincones más remotos de Aysén.
              </p>
            </div>
          </div>
        </section>

        {/* 3. LOGO SALVAJE CORAZÓN & MÁS ALLÁ DEL MAPA */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 text-center flex flex-col items-center">
          <div className="w-56 sm:w-72 mb-8">
            <img
              src="/images/salvajeCorazon/logoSalvaje.png"
              onError={handleImgError}
              alt="Logo Salvaje Corazón"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal mb-5">
            Más allá del mapa
          </h2>
          <p className="font-sans text-[#28211A]/80 text-sm sm:text-base max-w-3xl leading-relaxed font-light">
            No hacemos turismo convencional; trazamos rutas a medida para viajeros exigentes. Con años de exploración en los rincones más inaccesibles de la Carretera Austral, nuestro equipo de guías locales te lleva a donde los caminos terminan. Hospitalidad genuina, conocimiento profundo del territorio y un confort innegociable al final de cada jornada.
          </p>
        </section>

        {/* 4. SECCIÓN NUESTROS TOURS (CON TARJETAS Y MODAL EXPANDIBLE) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal mb-8 text-center sm:text-left">
            Nuestros Tours
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursData.map((tour) => (
              <div
                key={tour.id}
                onClick={() => setSelectedTour(tour)}
                className="group relative h-[360px] sm:h-[400px] overflow-hidden bg-[#2C3E35] shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Imagen de fondo del card */}
                <img
                  src={tour.imgCard}
                  onError={handleImgError}
                  alt={tour.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
                />

                {/* Capa de texto encima */}
                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end text-white bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal mb-2 leading-tight">
                    {tour.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm font-light text-white/85 line-clamp-3 leading-relaxed">
                    {tour.shortDesc}
                  </p>
                  <span className="inline-block mt-4 text-xs font-sans uppercase tracking-widest text-[#AD9E7A] font-semibold">
                    Ver detalles del tour →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL / TARJETA EXPANDIDA AL HACER CLIC EN UN TOUR */}
        {selectedTour && (
          <div
            onClick={() => setSelectedTour(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#F9F8F5] shadow-2xl rounded-sm overflow-hidden my-auto"
            >
              {/* Botón X de Cierre */}
              <button
                onClick={() => setSelectedTour(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 transition-colors cursor-pointer"
                aria-label="Cerrar detalles del tour"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Imagen superior expandida */}
              <div className="w-full h-[260px] sm:h-[340px] bg-[#EFECE6] relative">
                <img
                  src={selectedTour.imgModal}
                  onError={handleImgError}
                  alt={selectedTour.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido detallado del tour */}
              <div className="p-6 sm:p-8 md:p-10 text-[#28211A] space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2C3E35] font-normal leading-snug">
                  {selectedTour.title}
                </h3>

                <p className="font-sans text-sm sm:text-base font-light text-[#28211A]/85 leading-relaxed">
                  {selectedTour.shortDesc}
                </p>

                {selectedTour.duration && (
                  <p className="font-sans text-xs sm:text-sm font-semibold text-[#8C8377]">
                    Duración: <span className="font-normal text-[#28211A]">{selectedTour.duration}</span>
                  </p>
                )}

                {selectedTour.format && (
                  <p className="font-sans text-xs sm:text-sm font-semibold text-[#8C8377]">
                    Formato: <span className="font-normal text-[#28211A]">{selectedTour.format}</span>
                  </p>
                )}

                <div className="pt-2">
                  <p className="font-sans text-xs sm:text-sm font-semibold text-[#8C8377] mb-1">
                    La Experiencia:
                  </p>
                  <p className="font-sans text-xs sm:text-sm font-light text-[#28211A]/85 leading-relaxed">
                    {selectedTour.experience}
                  </p>
                </div>

                {selectedTour.phases && selectedTour.phases.length > 0 && (
                  <div className="pt-2">
                    <p className="font-sans text-xs sm:text-sm font-semibold text-[#8C8377] mb-2">
                      Fases del viaje / Tramos:
                    </p>
                    <ul className="space-y-1.5 font-sans text-xs sm:text-sm font-light text-[#28211A]/85">
                      {selectedTour.phases.map((phase, idx) => (
                        <li key={idx}>{phase}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-[#2C3E35]/10 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedTour(null);
                      scrollToReserva();
                    }}
                    className="bg-[#2C3E35] text-white font-sans text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#1f2d26] transition-colors cursor-pointer"
                  >
                    Cotizar este tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. SECCIÓN NUESTRA HISTORIA & FILOSOFÍA */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-[#2C3E35]/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
            <div className="w-full h-[320px] sm:h-[400px] lg:h-[440px] overflow-hidden bg-[#EFECE6] shadow-sm">
              <img
                src="/images/salvajeCorazon/historia.png"
                onError={handleImgError}
                alt="Exploradores del territorio"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#8C8377] font-medium block mb-3">
                NUESTRA HISTORIA &amp; FILOSOFÍA
              </span>
              <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal leading-tight mb-5">
                Exploradores del territorio,<br />no operadores de catálogo.
              </h2>
              <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed font-light">
                Llevamos más de una década trazando rutas entre Puerto Montt y el Estrecho de Magallanes. Nacimos con la convicción de mostrar la Patagonia que no aparece en las guías masivas: aquella donde los caminos se desvanecen, el contacto con las familias gauchas es auténtico y el silencio austral sigue intacto.
              </p>
            </div>
          </div>

          {/* 3 Pilares debajo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left pt-6">
            <div>
              <h4 className="font-serif text-[#2C3E35] text-lg font-normal mb-2">
                Centro de operaciones propio en Coyhaique
              </h4>
              <p className="font-sans text-[#28211A]/75 text-xs sm:text-sm leading-relaxed font-light">
                No intermediamos; operamos directamente desde el corazón de Aysén. Esto nos permite controlar cada detalle logístico, el estado de las rutas y la seguridad de cada salida.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-[#2C3E35] text-lg font-normal mb-2">
                Expediciones 100% privadas y flexibles
              </h4>
              <p className="font-sans text-[#28211A]/75 text-xs sm:text-sm leading-relaxed font-light">
                Cada grupo viaja a su propio ritmo. Diseñamos travesías técnicas para aventureros experimentados, así como viajes contemplativos adaptados a familias.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-[#2C3E35] text-lg font-normal mb-2">
                El privilegio de llegar primero
              </h4>
              <p className="font-sans text-[#28211A]/75 text-xs sm:text-sm leading-relaxed font-light">
                Acceso exclusivo a estancias privadas, pasos cordilleranos y valles vírgenes gracias a un vínculo de confianza forjado por años con la comunidad local.
              </p>
            </div>
          </div>
        </section>

        {/* 6. SECCIÓN PLANIFICACIÓN DEL VIAJE (CON FONDO "planificacion.png" Y PESTAÑAS CARPETA) */}
        <section className="relative w-full py-16 md:py-24 bg-[#2C3E35] overflow-hidden text-white">
          <img
            src="/images/salvajeCorazon/planificacion.png"
            onError={handleImgError}
            alt="Camino austral planificacion"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          />
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

          <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="mb-8">
              <h2 className="font-serif text-white text-3xl sm:text-4xl font-normal mb-2">
                Planificación del Viaje
              </h2>
              <p className="font-sans text-white/85 text-xs sm:text-sm font-light">
                Lo que necesitas saber sobre logística, clima y equipamiento para una travesía fluida y segura por Aysén.
              </p>
            </div>

            {/* Pestañas estilo Carpeta con efecto Glass */}
            <div className="w-full">
              {/* Encabezados de Pestañas */}
              <div className="flex flex-wrap gap-2 border-b border-white/20">
                {planningTabs.map((tab, index) => {
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-5 py-3 font-sans text-xs sm:text-sm font-medium transition-all rounded-t-md cursor-pointer ${
                        isActive
                          ? 'bg-[#1f2d26]/90 backdrop-blur-md text-white border-t-2 border-[#AD9E7A] -mb-px shadow-md'
                          : 'bg-black/40 text-white/70 hover:bg-black/60'
                      }`}
                    >
                      {tab.title}
                    </button>
                  );
                })}
              </div>

              {/* Contenido de la carpeta activa */}
              <div className="bg-[#1f2d26]/85 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-b-md rounded-tr-md shadow-xl border border-white/10 min-h-[220px]">
                <ul className="space-y-4">
                  {planningTabs[activeTab].content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-sans text-xs sm:text-sm font-light text-white/90 leading-relaxed">
                      <span className="text-[#AD9E7A] font-bold">•</span>
                      <span>
                        <strong className="font-semibold text-white">{item.bold} </strong>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SECCIÓN "DISEÑA TU EXPEDICIÓN CON NOSOTROS" (NUEVO FORMULARIO) */}
        <section id="disena-expedicion" className="py-16 md:py-24 bg-[#F9F8F5]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="bg-[#F4F1EA] border border-[#2C3E35]/10 shadow-sm p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Lado Izquierdo: Título y texto */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-5">
                    Diseña tu expedición con nosotros
                  </h2>
                  <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed font-light">
                    No creemos en los paquetes cerrados. Cuéntanos qué paisajes deseas descubrir, tu nivel de experiencia y de cuántos días dispones, y nuestros expertos en territorio diseñarán una ruta exclusiva para tu grupo.
                  </p>
                </div>

                {/* Lado Derecho: Formulario */}
                <div className="lg:col-span-7 bg-[#EFECE6] p-6 sm:p-8 border border-[#2C3E35]/10 shadow-sm">
                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#8C8377] uppercase tracking-wider mb-1">
                          Nombre*
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#8C8377] uppercase tracking-wider mb-1">
                          Apellido*
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.apellido}
                          onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                          className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#8C8377] uppercase tracking-wider mb-1">
                          Email*
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#8C8377] uppercase tracking-wider mb-1">
                          Número de Teléfono*
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#8C8377] uppercase tracking-wider mb-1">
                          Destino de interés
                        </label>
                        <select
                          value={formData.destino}
                          onChange={(e) => setFormData({ ...formData, destino: e.target.value })}
                          className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                        >
                          <option value="">Selecciona ruta...</option>
                          <option value="norte">La Gran Ruta Norte (Pumalín y Futaleufú)</option>
                          <option value="sur">Valles, Lagos y Glaciares (Ruta Sur)</option>
                          <option value="medida">Carretera Austral a Medida</option>
                          <option value="lorenzo">Campamento Base en Macizo San Lorenzo</option>
                          <option value="jeinimeni">Exploración Cordillera Jeinimeni</option>
                          <option value="hielosur">Campo de Hielo Sur</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#8C8377] uppercase tracking-wider mb-1">
                          N° de personas
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          placeholder="2"
                          value={formData.personas}
                          onChange={(e) => setFormData({ ...formData, personas: e.target.value })}
                          className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#8C8377] uppercase tracking-wider mb-1">
                          Fechas tentativas*
                        </label>
                        <input
                          type="text"
                          placeholder="dd/mm/aaaa"
                          required
                          value={formData.fechas}
                          onChange={(e) => setFormData({ ...formData, fechas: e.target.value })}
                          className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-xs font-semibold text-[#8C8377] uppercase tracking-wider mb-1">
                          Notas o requerimientos especiales
                        </label>
                        <input
                          type="text"
                          value={formData.notas}
                          onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                          className="w-full bg-white border border-[#2C3E35]/15 px-3 py-2.5 font-sans text-sm text-[#28211A] focus:outline-none focus:border-[#2C3E35]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#2C3E35] text-white font-sans text-xs uppercase tracking-widest font-semibold py-3.5 hover:bg-[#1f2d26] transition-colors mt-3 cursor-pointer"
                    >
                      Solicitar itinerario privado
                    </button>
                  </form>
                </div>

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

export default SalvajeCorazon;