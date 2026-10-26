export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pt-32 pb-16 bg-[#2C3E35] overflow-hidden">
      {/* Video de fondo */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

      {/* Contenedor exactamente idéntico al de la Navbar */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-xl text-left">
          <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
            Tu refugio privado<br />al pie de la montaña
          </h1>
          
          <p className="font-sans text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            Una experiencia boutique en el corazón de Aysén, donde la serenidad de la arquitectura se integra con la inmensidad de la Patagonia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;