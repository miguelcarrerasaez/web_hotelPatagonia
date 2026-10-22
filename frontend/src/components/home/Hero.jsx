export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ph-oscuro pt-32 pb-16 lg:pb-24">
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

      {/* Contenido principal - posicionado naturalmente con Flexbox */}
      <div className="relative z-10 w-full flex-grow flex flex-col px-6 md:px-12 lg:px-20 pt-6 md:pt-10 lg:pt-12">
        {/* Barra superior: Menú, Idioma y Reservar */}
        <div
          className="flex w-full justify-between items-start md:items-center gap-4 md:gap-8 pb-6 md:pb-10 lg:pb-12"
        >
          <div className="flex items-center gap-2 md:gap-3">
            <button type="button" className="flex items-center gap-2" aria-label="Menú">
              <div className="relative size-6 overflow-hidden">
                <span className="w-5 h-[1px] bg-ph-hueso" />
                <span className="w-5 h-[1px] bg-ph-hueso mt-1" />
                <span className="w-5 h-[1px] bg-ph-hueso mt-1" />
              </div>
              <span className="text-ph-hueso text-base font-sans font-normal leading-5">
                Menú
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-ph-hueso text-base font-sans font-normal leading-5">
                ES
              </span>
              <div className="size-6 relative overflow-hidden">
                <div className="w-1.5 h-3 bg-ph-hueso" />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="px-6 py-3 border border-ph-hueso flex items-center justify-center gap-2.5"
            aria-label="Reservar"
          >
            <span className="text-ph-hueso text-base font-sans font-normal leading-5">
              Reservar
            </span>
          </button>
        </div>

        {/* Contenido Hero - se empuja al fondo con flex-grow y justify-end */}
        <div className="flex-grow flex flex-col justify-end items-start gap-5 md:gap-8 pb-10 md:pb-16 lg:pb-20">
          <h1 className="font-serif text-ph-hueso text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Tu refugio privado<br />
            al pie de la montaña
          </h1>
          <p className="font-sans text-ph-hueso text-base md:text-lg lg:text-2xl font-normal leading-5 md:leading-7">
            Una experiencia boutique en el corazón de Aysén, donde la serenidad de
            la arquitectura se integra con la inmensidad de la Patagonia.
          </p>
        </div>
      </div>
    </section>
  );
}
