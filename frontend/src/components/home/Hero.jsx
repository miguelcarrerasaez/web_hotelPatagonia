export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pt-32 pb-16 bg-[#2C3E35] overflow-hidden">
      {/* Video de fondo a pantalla completa con bordes rectos */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

      {/* Contenedor principal limitado a 1440px con 80px (px-20) de padding lateral en escritorio */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* max-w-xl limita el ancho para que el texto rompa igual que en Figma */}
        <div className="max-w-xl text-left">
          <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-4">
            Tu refugio privado<br />al pie de la montaña
          </h1>
          <p className="font-sans text-white/90 text-base md:text-lg leading-relaxed">
            Una experiencia boutique en el corazón de Aysén, donde la serenidad de la arquitectura se integra con la inmensidad de la Patagonia.
          </p>
        </div>
      </div>
    </section>
  );
}