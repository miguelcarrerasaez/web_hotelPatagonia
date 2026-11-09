export function Footer() {
  return (
    <footer className="bg-[#212F2B] text-white py-[64px] px-6 md:px-12 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto space-y-[32px]">
        
        {/* BLOQUE SUPERIOR: Logo, Ubicación y Mapa ampliado */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pb-[32px] border-b border-white/15">
          
          {/* Logo Principal e Identidad (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between items-start">
            <div>
              <img
                src="/images/patagonialogoHome.png"
                alt="Patagonia House Logo"
                className="h-28 md:h-36 w-auto object-contain mb-4"
              />
              <h3 className="font-serif text-2xl font-normal text-white">
                Patagonia House
              </h3>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#8C8377] font-medium block mt-1">
                REFUGIO · EXPLORACIÓN · GASTRONOMÍA
              </span>
            </div>
          </div>

          {/* Dirección y Código Postal (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-2 font-sans text-sm text-white/80 justify-start pt-2">
            <span className="text-white font-medium underline underline-offset-4 decoration-white/30 mb-2">
              Ubicación
            </span>
            <p className="leading-relaxed">
              Camino Campo Alegre S/N<br />
              Coyhaique, XI Región, Chile<br />
              <span className="text-white/60 text-xs mt-1 block">
                Código Postal: S950000
              </span>
            </p>
          </div>

          {/* Mapa Interactivo de Google Maps (5 cols - Mayor altura) */}
          <div className="md:col-span-5 w-full h-64 md:h-72 rounded-xl overflow-hidden border border-white/15 relative shadow-lg bg-stone-900">
            <iframe
              title="Ubicación Hotel Patagonia House Coyhaique"
              src="https://maps.google.com/maps?q=Hotel%20Patagonia%20House%20Coyhaique&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 contrast-[1.05]"
              loading="lazy"
              allowFullScreen=""
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