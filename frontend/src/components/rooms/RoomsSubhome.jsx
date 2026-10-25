import { Navbar } from '../layout/Navbar';
import { RoomsPreview } from '../home/RoomsPreview';
import { Footer } from '../layout/Footer';

export function RoomsSubhome({ lang = 'ES', setLang = () => {}, navigate }) {
  const ecosystemCards = [
    {
      title: 'Ritual de Tinajas',
      text: 'El calor del agua como pausa regenerativa en medio del bosque.',
      img: '/images/tinajasubHome.png',
      link: '/experiencias/bienestar'
    },
    {
      title: 'Pesca & Exploración',
      text: 'Sumérgete en los ríos de Aysén con guías expertos en la inmensidad austral.',
      img: '/images/pescasubHome.png',
      link: '/experiencias/expediciones'
    },
    {
      title: 'Gastronomía Bòrek',
      text: 'Cocina de origen a fuego lento, donde el territorio patagónico cobra vida.',
      img: '/images/boreksubHome.png',
      link: '/gastronomia'
    }
  ];

  const handleCardClick = (e, link) => {
    e.preventDefault();
    if (navigate) {
      navigate(link);
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A]">
      
      {/* 1. Navbar con estilo oscuro para fondos claros */}
      <Navbar lang={lang} setLang={setLang} darkText={true} navigate={navigate} />

      <main className="pt-28 md:pt-36">
        
        {/* 2. HERO / CABECERA DE HABITACIONES */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Foto Izquierda */}
            <div className="w-full h-[360px] sm:h-[440px] lg:h-[480px]">
              <img
                src="/images/subHome.jpg"
                alt="Habitaciones Refugio Patagonia House"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Columna Derecha de Texto */}
            <div className="flex flex-col items-start justify-center">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-3">
                HABITACIONES - REFUGIO
              </span>
              
              <h1 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                Encuentra tu lugar para hacer una pausa
              </h1>
              
              <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Refugios de diseño rodeados de bosque nativo. Cada espacio ha sido pensado para el descanso profundo, con vistas despejadas a la Patagonia y la calidez del fuego siempre encendido.
              </p>
              
              <a
                href="#catalogo-habitaciones"
                className="px-6 py-3 bg-[#2C3E35] text-white font-sans text-sm font-medium hover:bg-[#1f2d26] transition-colors inline-block"
              >
                Ver refugios y suites
              </a>
            </div>

          </div>
        </section>

        {/* 3. CATÁLOGO DE HABITACIONES (Carrusel) */}
        <div id="catalogo-habitaciones">
          <RoomsPreview />
        </div>

        {/* 4. SECCIÓN NUESTRO ECOSISTEMA DEL SUBHOME HABITACIONES */}
        <section className="bg-[#F9F8F5] py-14">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            
            {/* Encabezado con 32px de margen inferior hacia las cards */}
            <div className="mb-8 max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
                NUESTRO ECOSISTEMA
              </span>
              <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal leading-tight mb-2">
                Descanso y exploración en un mismo viaje
              </h2>
              <p className="font-sans text-[#28211A] text-sm sm:text-base leading-relaxed">
                Patagonia House conecta el refugio boutique de montaña, la exploración de Aysén con Salvaje Corazón y la gastronomía de origen de Bòrek.
              </p>
            </div>

            {/* Grilla de 3 tarjetas fotográficas con bordes rectos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ecosystemCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.link}
                  onClick={(e) => handleCardClick(e, card.link)}
                  className="relative aspect-[3/4] overflow-hidden group block cursor-pointer"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradiente oscuro inferior para contraste del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  
                  {/* Textos sobre la fotografía */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <h3 className="font-serif text-2xl font-normal mb-1">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                      {card.text}
                    </p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* 5. Footer Institucional */}
      <Footer />
    </div>
  );
}

export default RoomsSubhome;