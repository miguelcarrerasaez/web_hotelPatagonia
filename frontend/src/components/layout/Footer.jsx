export function Footer() {
  return (
    <footer className="bg-[#2C3E35] text-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* PARTE SUPERIOR: 3 Columnas de Información */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12 pb-12 border-b border-white/15">
          
          {/* Columna 1: Marca y descripción */}
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-2xl font-normal text-white mb-1">
              Patagonia House
            </h3>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8C8377] font-medium block mb-4">
              REFUGIO · EXPLORACIÓN · GASTRONOMÍA
            </span>
            <p className="font-sans text-sm text-white/70 leading-relaxed max-w-xs">
              Un ecosistema de refugio, exploración y gastronomía en Aysén.
            </p>
          </div>

          {/* Columna 2: Enlaces directos */}
          <div className="flex flex-col gap-3 font-sans text-sm text-white/80">
            <a href="#cancelacion" className="hover:text-white transition-colors">
              Políticas de cancelación
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Preguntas frecuentes
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Datos contacto
            </a>
            <a href="#ubicacion" className="hover:text-white transition-colors">
              Ubicación
            </a>
          </div>

          {/* Columna 3: Datos de Contacto */}
          <div className="flex flex-col gap-2 font-sans text-sm text-white/80">
            <span className="text-white font-medium mb-1">Datos contacto:</span>
            <p>Correo: contacto@patagoniahouse.cl</p>
            <p>Teléfono: +56 9 1234 5678</p>
            <p>Ubicación: Coyhaique, Chile</p>
            <p className="text-white/50 text-xs mt-3">
              RRSS · Perfiles y enlaces por confirmar
            </p>
          </div>

        </div>

        {/* PARTE INFERIOR: Logos Aumentados de Tamaño */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center pt-4">
          
          {/* Logo 1: Patagonia House (Escalado de h-24 a h-36) */}
          <div className="flex justify-center md:justify-start w-full">
            <img
              src="/images/patagonialogoHome.png"
              alt="Patagonia House Logo"
              className="h-24 sm:h-28 md:h-32 lg:h-36 object-contain"
            />
          </div>

          {/* Logo 2: Salvaje Corazón (Escalado de h-20 a h-32) */}
          <div className="flex justify-center w-full">
            <img
              src="/images/salvajecorazonlogoHome.png"
              alt="Salvaje Corazón Logo"
              className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain"
            />
          </div>

          {/* Logo 3: Bòrek (Escalado de h-16 a h-28) */}
          <div className="flex justify-center md:justify-end w-full">
            <img
              src="/images/boreklogoHome.png"
              alt="Bòrek Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
            />
          </div>

        </div>

      </div>
    </footer>
  );
}