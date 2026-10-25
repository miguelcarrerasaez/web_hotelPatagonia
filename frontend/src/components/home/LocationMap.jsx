export function LocationMap() {
  return (
    <section className="w-full bg-[#F9F8F5]">
      {/* 1. Eliminamos los paddings exteriores para que el mapa ocupe el 100% del ancho (w-full) */}
      <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src="/images/ubicacionHome.png"
          alt="Ubicación Patagonia House"
          className="w-full h-full object-cover"
        />

        {/* Degradado inferior para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"></div>

        {/* 2. Mantenemos el texto alineado con la grilla del sitio (80px de margen en desktop) */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-white">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-2 leading-tight">
              Encuéntranos en
            </h2>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-light">
              Cam. Campo Alegre S/N,<br />
              Coyhaique, Aysén
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}