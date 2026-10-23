export function CtaBanner() {
  return (
    <section className="relative bg-[url('/images/bannerHome.png')] bg-cover bg-center bg-no-repeat py-12 md:py-16">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl">
        <h2 className="font-serif text-white text-3xl sm:text-4xl font-bold leading-tight">
          Dale espacio a tu próxima estancia
        </h2>
        
        <p className="font-sans text-white text-base md:text-lg mt-3 mb-6">
          Cuéntanos cuándo quieres venir y qué te gustaría descubrir. La disponibilidad y los detalles de tu estancia están por confirmar.
        </p>
        
        <a
          href="#reservas"
          className="inline-flex items-center justify-center px-6 py-2.5 border border-white bg-transparent text-white font-sans font-semibold hover:bg-white hover:text-ph-oscuro transition-colors duration-300"
        >
          Planificar mi estancia
        </a>
      </div>
    </section>
  );
}