export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-ph-hueso">
      <img
        src="https://placehold.co/1200x900/292929/FFFFFF?text=Bosque+Patagonia"
        alt="Bosque de Patagonia"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="absolute bottom-16 left-8 z-10 text-white">
        <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Tu refugio privado al pie de la montaña
        </h1>
        <p className="mt-4 font-sans text-lg sm:text-xl max-w-md text-white/90 leading-relaxed">
          Una experiencia boutique en el coraz&oacute;n de Ays&eacute;n.
        </p>
      </div>
    </section>
  );
}
