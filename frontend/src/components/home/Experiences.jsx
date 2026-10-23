export function Experiences() {
  return (
    <section className="bg-ph-hueso py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Bloque 1: Tinajas — Imagen izquierda, Texto derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#e5e4e7]">
            <img
              src="https://placehold.co/600x750/292929/FFFFFF?text=Tinajas"
              alt="Tinajas"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ph-bronce">
              Bienestar y tinajas
            </p>
            <h3 className="font-serif text-ph-taupe text-2xl font-bold leading-tight sm:text-3xl mt-1">
              La pausa también es un viaje
            </h3>
            <p className="mt-4 font-sans text-ph-taupe text-lg leading-relaxed">
              Sumérgete en nuestras tinajas exteriores con vista al bosque y
              deja que el tiempo se detenga.
            </p>
            <a
              href="#experiencias"
              className="mt-6 inline-block font-sans text-sm font-semibold text-ph-verde hover:underline transition"
            >
              Reservar experiencia &rarr;
            </a>
          </div>
        </div>

        {/* Bloque 2: Börek — Texto izquierda, Imagen derecha */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ph-bronce">
              Gastronom&iacute;a B&ouml;rek
            </p>
            <h3 className="font-serif text-ph-taupe text-2xl font-bold leading-tight sm:text-3xl mt-1">
              El territorio se encuentra en la mesa
            </h3>
            <p className="mt-4 font-sans text-ph-taupe text-lg leading-relaxed">
              Platos de autor con ingredientes de la Patagonia, maridaje de vinos
              de la zona y atmósfera de caba&ntilde;a moderna.
            </p>
            <a
              href="#gastronomia"
              className="mt-6 inline-block font-sans text-sm font-semibold text-ph-verde hover:underline transition"
            >
              Ver carta &rarr;
            </a>
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#e5e4e7] order-1 md:order-2">
            <img
              src="https://placehold.co/600x750/292929/FFFFFF?text=Borek"
              alt="Börek Gastronomía"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
