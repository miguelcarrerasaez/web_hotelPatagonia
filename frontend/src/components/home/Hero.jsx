export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pt-32 pb-16 lg:pb-24 bg-ph-oscuro overflow-hidden">
      {/* Capa 0 - Video de fondo */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />

      {/* Capa 10 - Overlay oscuro para legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 pointer-events-none" aria-hidden="true" />

      {/* Capa 20 - Contenido Hero */}
      <div className="relative z-20 flex-grow flex flex-col justify-end px-6 md:px-12 lg:px-20 pt-6 md:pt-10 lg:pt-12 pb-10 md:pb-16 lg:pb-20">
        <h1 className="font-serif text-ph-hueso text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
          Tu refugio privado<br />
          al pie de la montaña
        </h1>
        <p className="mt-6 font-sans text-ph-hueso text-base md:text-lg lg:text-2xl font-normal leading-5 md:leading-7">
          Una experiencia boutique en el corazón de Aysén, donde la serenidad de
          la arquitectura se integra con la inmensidad de la Patagonia.
        </p>
      </div>
    </section>
  );
}
