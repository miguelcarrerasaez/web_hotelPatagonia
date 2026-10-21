export function RoomsPreview() {
  return (
    <section className="bg-ph-hueso py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ph-bronce">
            Habitaciones
          </p>
          <h2 className="font-serif text-ph-taupe text-3xl font-bold leading-tight sm:text-4xl mt-1">
            Cuatro formas de imaginar tu estancia
          </h2>
        </div>

        <div className="mt-10 relative">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#e5e4e7]">
            <img
              src="https://placehold.co/1200x675/292929/FFFFFF?text=Refugio+Panorama"
              alt="Refugio Panorama"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-6 left-6 z-10 text-white max-w-md">
              <h3 className="font-serif text-2xl font-bold mb-2">
                Refugio Panorama
              </h3>
              <p className="font-sans text-sm text-white/90 mb-4">
                Ventanas de piso a techo con vista directa a la monta&ntilde;a y
                acceso privado a la terraza.
              </p>
              <a
                href="#habitaciones"
                className="inline-block font-sans text-sm font-semibold text-ph-verde hover:underline transition"
              >
                Ver habitaciones &rarr;
              </a>
            </div>
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                className="w-2 h-2 rounded-full bg-white/30 hover:bg-white transition"
                aria-label={`Diapositiva ${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
