import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

const sustainabilityPillars = [
  {
    id: 'agua',
    title: 'Cuidamos el agua',
    description:
      'Utilizamos aguas de vertiente y recolección de lluvias para riego, junto con duchas y grifería de bajo consumo. Puedes sumarte eligiendo no cambiar toallas o sábanas todos los días.',
    icon: '/images/logge/icono_agua.svg',
  },
  {
    id: 'energia',
    title: 'Ahorramos energía',
    description:
      'Contamos con iluminación LED, sensores de movimiento y aprovechamos al máximo la luz natural. Te invitamos a apagar luces y equipos al salir de tu habitación.',
    icon: '/images/logge/icono_energia.svg',
  },
  {
    id: 'impacto',
    title: 'Tu visita tiene impacto',
    description:
      'Con pequeñas acciones cotidianas durante tu estadía puedes marcar la diferencia. Gracias por ayudarnos a conservar la Patagonia.',
    icon: '/images/logge/icono_handmade.svg',
  },
  {
    id: 'naturaleza',
    title: 'Protegemos la naturaleza',
    description:
      'Reducimos impresiones innecesarias y promovemos caminatas y excursiones de bajo impacto, respetando los senderos y sin extraer flora ni fauna.',
    icon: '/images/logge/icono_natura.svg',
  },
];

const sustainabilityCards = [
  {
    id: 'tradiciones',
    title: 'Valore las tradiciones y costumbres locales',
    image: '/images/logge/tarjeta1.png',
    paragraphs: [
      'Infórmate antes de viajar sobre las costumbres, festividades y tradiciones de Aysén para compartir e integrarte con la comunidad de manera respetuosa.',
      'Incorpora algunas expresiones locales y dialoga con los habitantes del territorio para generar un intercambio cultural más cercano y significativo.',
      'Cuida y respeta aquello que hace único al destino: su historia, arquitectura, cocina, música, arte y patrimonio cultural.',
    ],
  },
  {
    id: 'economia',
    title: 'Apoye a la economía local',
    image: '/images/logge/tarjeta2.png',
    paragraphs: [
      'Elige artesanías y productos elaborados en la zona para impulsar directamente el desarrollo de emprendimientos familiares y talleres locales.',
      'Mantén un trato cordial y justo con artesanos y productores, promoviendo una relación comercial transparente y directa.',
      'Evita adquirir artículos falsificados o que infrinjan normativas nacionales e internacionales, e infórmate sobre posibles restricciones de salida o entrada al país.',
      'Contrata tours y servicios turísticos establecidos y operados por residentes y guías de la comunidad.',
    ],
  },
  {
    id: 'medio-ambiente',
    title: 'Respete el medio ambiente',
    image: '/images/logge/tarjeta3.png',
    paragraphs: [
      'Evita productos cuya elaboración involucre especies de flora o fauna en peligro de extinción.',
      'Prioriza traslados compartidos o alternativas de menor impacto ambiental para reducir tu huella de carbono durante el viaje.',
      'Reduce, reutiliza y recicla residuos sólidos: lleva tu propia botella rellenable y evita envoltorios o bolsas plásticas de un solo uso.',
      'Optimiza el consumo de agua y electricidad en el lodge reutilizando toallas y sábanas, y apagando luces o calefacción al salir.',
    ],
  },
  {
    id: 'areas-silvestres',
    title:
      'Sea cuidadoso al visitar áreas silvestres, patrimoniales, arqueológicas u otras que le parezcan frágiles y/o valiosas.',
    image: '/images/logge/tarjeta4.png',
    paragraphs: [
      'Regresa con toda la basura generada en tus recorridos, incluidos los residuos orgánicos, para mantener limpio el entorno y no alterar la dieta de la fauna nativa.',
      'Transita únicamente por caminos y senderos habilitados, prefiriendo visitas guiadas para evitar la erosión del suelo y fortalecer el trabajo local.',
      'Respeta la normativa de parques y reservas protegidas, y nunca alimentes a la fauna silvestre.',
      'Sigue siempre las señalizaciones de las comunidades locales, no retires piedras, plantas ni flores del entorno y contribuye al cuidado de la infraestructura respetando las tarifas de acceso.',
    ],
  },
  {
    id: 'viajero-informado',
    title: 'Sea un viajero informado y respetuoso',
    image: '/images/logge/tarjeta5.png',
    paragraphs: [
      'Cumple las leyes y normativas locales vigentes en el territorio.',
      'Respeta los derechos humanos y protege especialmente a niños y niñas frente a cualquier forma de vulneración o explotación.',
      'Ten a mano información sobre asistencia médica y los contactos de emergencia o de tu representación consular en caso de imprevistos.',
      'Revisa las condiciones meteorológicas antes de acceder a zonas cordilleranas y deja registro en Carabineros, CONAF o la institución pertinente si realizas salidas por tu cuenta.',
      'Consulta en oficinas de información turística oficiales para acceder a datos actualizados y servicios debidamente registrados.',
    ],
  },
];

export function ElLodge({ lang = 'ES', setLang = () => {}, navigate }) {
  const goHome = () => {
    if (navigate) navigate('/');
    else window.location.href = '/';
  };

  // Fallback flexible entre .svg / .png / .jpg según extensión real en public/images/logge
  const handleImgError = (e) => {
    const src = e.target.src;
    if (src.endsWith('.svg')) {
      e.target.src = src.replace('.svg', '.png');
    } else if (src.endsWith('.png')) {
      e.target.src = src.replace('.png', '.jpg');
    } else if (src.endsWith('.jpg')) {
      e.target.src = src.replace('.jpg', '.png');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden font-sans">
      {/* 1. Navbar con texto oscuro sobre fondo claro */}
      <Navbar darkText="{true}" lang="{lang}" navigate="{navigate}" setLang="{setLang}"/>

      <main className="pt-28 md:pt-36">
        {/* 2. BREADCRUMB */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-2 pb-5">
          <p className="font-sans text-xs md:text-sm text-[#8C8377] font-medium tracking-wide flex items-center gap-1.5">
            <button
              onClick={goHome}
              className="hover:text-[#2C3E35] hover:underline cursor-pointer transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span>El Lodge</span>
            <span>/</span>
            <span className="text-[#C88E4B]">Sustentabilidad</span>
          </p>
        </section>

        {/* 3. IMAGEN PRINCIPAL PANELES SOLARES */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="w-full h-[280px] sm:h-[420px] lg:h-[520px] overflow-hidden bg-[#EFECE6] shadow-sm">
            <img
              src="/images/logge/foter_panel.png"
              onError={handleImgError}
              alt="Sustentabilidad y energía limpia en Patagonia House"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 4. DECLARACIÓN DE COMPROMISO & 4 PILARES CON ICONOS */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-28 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <p className="font-sans text-sm sm:text-base text-[#28211A]/85 leading-relaxed font-normal mb-5">
              En Patagonia House estamos comprometidos con un turismo sustentable, que cuida el entorno, valora la cultura local y apoya a nuestra comunidad.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#28211A] font-medium">
              ¡Tú también eres parte de este compromiso!
            </p>
          </div>

          {/* Grilla 2x2 de 4 pilares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 max-w-4xl mx-auto">
            {sustainabilityPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center">
                  <img
                    src={pillar.icon}
                    onError={handleImgError}
                    alt={pillar.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="font-sans text-base sm:text-lg text-[#28211A] font-medium mb-2">
                  {pillar.title}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#28211A]/75 leading-relaxed font-light max-w-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. GRILLA DE 5 TARJETAS DE BUENAS PRÁCTICAS (2 columnas según Figma) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-28 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {sustainabilityCards.map((card) => (
              <article
                key={card.id}
                className="bg-[#F4F1EA] flex flex-col overflow-hidden shadow-xs"
              >
                {/* Imagen superior de tarjeta */}
                <div className="w-full h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden bg-[#EFECE6]">
                  <img
                    src={card.image}
                    onError={handleImgError}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido textual */}
                <div className="p-7 sm:p-9 lg:p-10 flex-1 flex flex-col">
                  <h3 className="font-sans text-base sm:text-lg text-[#28211A] font-medium leading-snug mb-5">
                    {card.title}
                  </h3>
                  <div className="space-y-3.5 font-sans text-xs sm:text-sm text-[#28211A]/80 leading-relaxed font-light">
                    {card.paragraphs.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. SELLOS Y CERTIFICACIONES (Distinción Turismo Sustentable & SERNATUR) */}
        <section className="bg-[#F9F8F5] py-12 md:py-16 border-t border-[#2C3E35]/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 lg:gap-36">
            <div className="h-24 sm:h-28 flex items-center justify-center">
              <img
                src="/images/logge/logo_turismo.png"
                onError={handleImgError}
                alt="Distinción Turismo Sustentable"
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="h-24 sm:h-28 flex items-center justify-center">
              <img
                src="/images/logge/logo_sernatur.png"
                onError={handleImgError}
                alt="Servicio Turístico Registrado SERNATUR"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <Footer/>
    </div>
  );
}

export default ElLodge;