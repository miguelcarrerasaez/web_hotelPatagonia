import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

const sustainabilityPillars = [
  {
    id: 'agua',
    title: 'Cuidamos el agua',
    description:
      'Utilizamos aguas de vertiente y aguas lluvias para riego. Además de duchas y grifería de bajo consumo. ¿Nos ayudas? Puedes elegir no cambiar toallas o sábanas todos los días.',
    icon: '/images/logge/icono_agua.svg',
  },
  {
    id: 'energia',
    title: 'Ahorramos energía',
    description:
      'Iluminación LED y sensores de movimiento. Aprovechamos al máximo la luz natural. Apaga luces y equipos al salir.',
    icon: '/images/logge/icono_energia.svg',
  },
  {
    id: 'impacto',
    title: 'Tu visita tiene impacto',
    description:
      'Con pequeñas acciones, tú puedes marcar la diferencia. Gracias por ayudarnos a conservar la Patagonia.',
    icon: '/images/logge/icono_handmade.svg',
  },
  {
    id: 'naturaleza',
    title: 'Protegemos la naturaleza',
    description:
      'No imprimimos más de lo necesario. Promovemos caminatas y excursiones de bajo impacto. Respeta senderos y no retires flora ni fauna.',
    icon: '/images/logge/icono_natura.svg',
  },
];

// Nota: Puedes reemplazar los textos de `paragraphs` directamente con los strings literales de tu Figma
const sustainabilityCards = [
  {
    id: 'tradiciones',
    title: 'Valore las tradiciones y costumbres locales',
    image: '/images/logge/tarjeta1.png',
    paragraphs: [
      'Antes de viajar, infórmese sobre las costumbres y tradiciones locales del destino que visitará (festividades costumbristas, efemérides, aniversarios, entre otros), para poder compartir, participar e integrarse con la comunidad de mejor manera.',
      'Aprenda algunas expresiones en el idioma o modismos locales; con ello podrá lograr un contacto más cercano y significativo con los habitantes.',
      'Respete y proteja todo aquello que hace de un destino un lugar único y diferente: desde su historia, arquitectura y valores culturales, hasta su música, arte, cocina, monumentos y patrimonio comunitario.',
    ],
  },
  {
    id: 'economia',
    title: 'Apoye a la economía local',
    image: '/images/logge/tarjeta2.png',
    paragraphs: [
      'Prefiera artículos de artesanía local y productos elaborados en el destino; esto le permitirá contribuir al desarrollo de las economías familiares, detallistas y de pequeña escala.',
      'Trate con respeto y amabilidad a vendedores y artesanos locales, promoviendo una relación comercial voluntaria y justa entre productores y consumidores.',
      'No adquiera productos que evidentemente parezcan falsificados o que estén prohibidos por las normativas nacionales o internacionales.',
      'Al contratar tours, procure siempre recurrir al comercio establecido para evitar estafas y engaños, prefiriendo servicios turísticos operados por habitantes de la comuna o destino.',
      'Infórmese sobre productos que cuenten con restricción legal de salida o entrada al país visitado.',
    ],
  },
  {
    id: 'medio-ambiente',
    title: 'Respete el medio ambiente',
    image: '/images/logge/tarjeta3.png',
    paragraphs: [
      'Adquiera productos que no requieran para su elaboración el uso de plantas o animales en peligro de extinción.',
      'Prefiera salidas grupales que permitan ahorrar recursos, dinero y combustible, disminuyendo su huella de carbono mediante medios de transporte más eficientes y menos contaminantes.',
      'Reduzca, reutilice y recicle residuos sólidos durante su viaje: lleve su propia botella rellenable, evite productos con envoltorios innecesarios y rechace bolsas plásticas cuando pueda transportarlos de otro modo.',
      'Reduzca su consumo de agua y electricidad en los alojamientos turísticos que visite (solicite reutilizar sus toallas y sábanas por más de un día y apague luces, calefacción y aire acondicionado al salir de la habitación).',
    ],
  },
  {
    id: 'areas-silvestres',
    title:
      'Sea cuidadoso al visitar áreas silvestres, patrimoniales, arqueológicas u otras que le parezcan frágiles y/o valiosas.',
    image: '/images/logge/tarjeta4.png',
    paragraphs: [
      'Procure regresar con toda la basura generada en su visita a estas áreas (incluso los residuos orgánicos), ya que de lo contrario podría alterar la dieta de la fauna silvestre nativa, ensuciar el paisaje y afectar al resto de los visitantes.',
      'Elija recorridos que provoquen el menor impacto sobre el paisaje, privilegiando caminos y senderos existentes. Prefiera visitas guiadas, evitando accidentes y disminuyendo la erosión del suelo, mientras fortalece el trabajo local.',
      'No incurra en delitos ambientales: si visita un área protegida, recuerde que existe un reglamento creado para preservar lugares y especies de gran valor ecológico.',
      'No alimente a la fauna silvestre.',
      'Respete la señalización e indicaciones de las comunidades existentes en la zona que visita; esto permitirá una estadía más segura para usted, su familia y el entorno.',
      'No retire recursos naturales como piedras, fósiles, caracoles, plantas o flores de su entorno original.',
      'Contribuya al mantenimiento de la infraestructura y equipamiento de las áreas protegidas pagando la tarifa solicitada y utilizando adecuadamente sus instalaciones.',
    ],
  },
  {
    id: 'viajero-informado',
    title: 'Sea un viajero informado y respetuoso',
    image: '/images/logge/tarjeta5.png',
    paragraphs: [
      'Cumpla las leyes y los reglamentos locales y nacionales.',
      'Respete los derechos humanos y proteja a niños y niñas de cualquier forma de explotación, especialmente la sexual y laboral.',
      'Infórmese sobre cómo recibir asistencia médica o ponerse en contacto con su embajada (para turistas extranjeros) en caso de emergencia.',
      'Infórmese de las condiciones meteorológicas antes de acceder a zonas cordilleranas o de clima variable; si realiza recorridos por cuenta propia o en grupo hacia la montaña, deje registro de su visita en Carabineros, CONAF u otra institución pertinente.',
      'Infórmese en oficinas de información turística con respaldo institucional oficial, público o privado, para obtener datos objetivos y contratar servicios que cumplan las disposiciones legales vigentes.',
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
          <p className="font-sans text-xs md:text-sm text-[#9E978E] font-normal tracking-wide flex items-center gap-1.5">
            <button
              onClick={goHome}
              className="hover:text-[#28211A] hover:underline cursor-pointer transition-colors"
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
          <div className="w-full h-[280px] sm:h-[420px] lg:h-[520px] overflow-hidden bg-[#EFECE6]">
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
            <p className="font-sans text-sm sm:text-[15px] text-[#28211A] leading-relaxed font-normal mb-5">
              En Patagonia House estamos comprometidos con un turismo sustentable, que cuida el entorno, valora la cultura local, y apoya a nuestra comunidad.
            </p>
            <p className="font-sans text-sm sm:text-[15px] text-[#28211A] font-normal">
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
                <h2 className="font-sans text-base sm:text-[18px] text-[#28211A] font-normal mb-2">
                  {pillar.title}
                </h2>
                <p className="font-sans text-xs sm:text-[13px] text-[#3D3832] leading-relaxed font-normal max-w-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. GRILLA DE 5 TARJETAS DE BUENAS PRÁCTICAS (2 columnas según Figma) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-28 pb-12 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-12">
            {sustainabilityCards.map((card) => (
              <article
                key={card.id}
                className="bg-[#EFECE6] flex flex-col overflow-hidden"
              >
                {/* Imagen superior de tarjeta */}
                <div className="w-full h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden bg-[#E5E1D8]">
                  <img
                    src={card.image}
                    onError={handleImgError}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido textual con colores exactos de Figma */}
                <div className="px-8 py-9 sm:px-10 sm:py-10 flex-1 flex flex-col">
                  <h3 className="font-sans text-lg sm:text-[19px] text-[#28211A] font-normal leading-snug mb-5">
                    {card.title}
                  </h3>
                  <div className="space-y-3.5 font-sans text-[13px] sm:text-sm text-[#3D3832] leading-relaxed font-normal">
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
        <section className="bg-[#F9F8F5] py-12 md:py-16">
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