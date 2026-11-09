export function Footer() {
  return (
    <footer className="bg-[#212F2B] text-white py-[64px] px-6 md:px-12 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto space-y-[24px]">
        
        {/* BLOQUE SUPERIOR: Logo, Ubicación y Mapa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pb-[24px] border-b border-white/15">
          
          {/* Logo Principal e Identidad */}
          <div className="flex flex-col items-start">
            <img
              src="/images/patagonialogoHome.png"
              alt="Patagonia House Logo"
              className="h-28 md:h-36 w-auto object-contain mb-3"
            />
            <h3 className="font-serif text-2xl font-normal text-white">
              Patagonia House
            </h3>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8C8377] font-medium block mt-1">
              REFUGIO · EXPLORACIÓN · GASTRONOMÍA
            </span>
          </div>

          {/* Ubicación */}
          <div className="flex flex-col gap-1 font-sans text-sm text-white/80">
            <span className="text-white font-medium underline underline-offset-4 decoration-white/30 mb-2">
              Ubicación
            </span>
            <p className="leading-relaxed">
              Camino Campo Alegre S/N<br />
              Coyhaique, XI Region, Chile<br />
              <span className="text-white/60 text-xs">Postal Code: S950000</span>
            </p>
          </div>

          {/* Embed Mapa Google */}
          <div className="w-full h-36 rounded-lg overflow-hidden border border-white/10 relative bg-stone-800">
            <iframe
              title="Ubicación Hotel Patagonia House"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.0!2d-72.0666!3d-45.5714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzE3LjEiUyA3MsKwMDMnNTkuOCJX!5e0!3m2!1ses!2scl!4v1600000000000!5m2!1ses!2scl"
              className="w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* BLOQUE INFERIOR: Descripción, Contacto y Enlaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          
          {/* Columna 1: Descripción de la marca */}
          <div className="flex flex-col items-start">
            <h4 className="font-serif text-xl font-normal text-white">
              Patagonia House
            </h4>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
              REFUGIO · EXPLORACIÓN · GASTRONOMÍA
            </span>
            <p className="font-sans text-xs text-white/70 leading-relaxed max-w-xs">
              Un ecosistema de refugio, exploración y gastronomía en Aysén.
            </p>
          </div>

          {/* Columna 2: Datos de Contacto */}
          <div className="flex flex-col gap-1 font-sans text-xs text-white/80">
            <span className="text-white font-medium text-sm mb-1">Datos contacto:</span>
            <a
              href="mailto:recepcion@patagonia-house.com"
              className="hover:text-white transition-colors underline decoration-white/30 w-fit"
            >
              recepcion@patagonia-house.com
            </a>
            <p>Emergencias: +56933617995</p>
            <p>Recepción: +56672211488</p>
            <p className="text-white/50 text-[11px] mt-2">
              RRSS · Perfiles y enlaces por confirmar
            </p>
          </div>

          {/* Columna 3: Enlaces de Interés */}
          <div className="flex flex-col gap-2 font-sans text-xs text-white/80">
            <a
              href="#cancelacion"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30 w-fit"
            >
              Políticas de cancelación
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30 w-fit"
            >
              Preguntas frecuentes
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}