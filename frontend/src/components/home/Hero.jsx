export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-transparent pt-32 pb-16 lg:pb-24">
      {/* Video de fondo - ocupa toda el área con object-cover y capa bajo el contenido */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20"
        autoPlay
        loop
        muted
        playsInline
        poster="https://placehold.co/1920x1080/1F6340/FFFFFF?text=Fondo+Bosque+Patagonia"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>

      {/* Overlay de oscurecimiento para legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40 -z-10" aria-hidden="true" />

      {/* Contenido Hero - anclado abajo con justify-end del section */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-6 md:pt-10 lg:pt-12">
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
