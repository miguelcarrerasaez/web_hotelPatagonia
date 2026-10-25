import { Navbar } from '../layout/Navbar';
import { RoomsPreview } from '../home/RoomsPreview';
import { Footer } from '../layout/Footer';

export function RoomsSubhome({ lang = 'ES', setLang = () => {} }) {
  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A]">
      
      {/* 1. Navbar adaptada con tema oscuro (darkText) para leerse sobre fondo hueso */}
      <Navbar lang={lang} setLang={setLang} darkText={true} />

      <main className="pt-28 md:pt-36">
        
        {/* 2. HERO / CABECERA DE SUBHOME HABITACIONES (56px py, 80px px) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Foto Izquierda */}
            <div className="w-full h-[360px] sm:h-[440px] lg:h-[480px]">
              <img
                src="/images/refugioHome.png"
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

        {/* 3. CATÁLOGO DE HABITACIONES (Reutilizamos RoomsPreview) */}
        <div id="catalogo-habitaciones">
          <RoomsPreview />
        </div>

      </main>

      {/* 4. Footer institucional */}
      <Footer />
    </div>
  );
}

export default RoomsSubhome;