export function Experiences() {
  return (
    <div className="bg-[#F9F8F5] flex flex-col gap-16 py-14">
      
      {/* 1. SECCIÓN: BIENESTAR Y TINAJAS */}
      <section className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Foto Izquierda */}
          <div className="w-full h-[360px] sm:h-[420px] lg:h-[460px]">
            <img
              src="/images/tinajaHome.png"
              alt="Bienestar y Tinajas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto Derecha */}
          <div className="flex flex-col items-start justify-center">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-3">
              BIENESTAR Y TINAJAS
            </span>
            <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal leading-tight mb-4">
              La pausa también es un viaje
            </h2>
            <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              El contraste perfecto entre el calor del agua y el aire puro de la montaña. Un ritual al aire libre sumergido en el bosque nativo, diseñado para restaurar el cuerpo y la mente en absoluto silencio tras una jornada de exploración.
            </p>
            <a
              href="#tinajas"
              className="px-6 py-3 bg-[#2C3E35] text-white font-sans text-sm font-medium hover:bg-[#1f2d26] transition-colors"
            >
              Ver experiencia
            </a>
          </div>

        </div>
      </section>

      {/* 2. SECCIÓN: GASTRONOMÍA BÒREK */}
      <section className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Texto Izquierda (order-2 en móvil, order-1 en escritorio) */}
          <div className="flex flex-col items-start justify-center order-2 lg:order-1">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-3">
              GASTRONOMÍA BÒREK
            </span>
            <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal leading-tight mb-4">
              El territorio se encuentra en la mesa
            </h2>
            <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Una propuesta culinaria de origen donde la cocina a leña, los productos de recolección local y la identidad de Aysén se encuentran. Sabores honestos y de autor que rinden tributo al paisaje patagónico en un ambiente cálido e íntimo.
            </p>
            <a
              href="#borek"
              className="px-6 py-3 bg-[#2C3E35] text-white font-sans text-sm font-medium hover:bg-[#1f2d26] transition-colors"
            >
              Descubrir Bòrek
            </a>
          </div>

          {/* Foto Derecha (order-1 en móvil, order-2 en escritorio) */}
          <div className="w-full h-[360px] sm:h-[420px] lg:h-[460px] order-1 lg:order-2">
            <img
              src="/images/borekHome.png"
              alt="Gastronomía Bòrek"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

    </div>
  );
}