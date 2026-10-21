export function LocationMap() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e5e4e7]">
      <img
        src="https://placehold.co/1400x400/292929/FFFFFF?text=Vista+a%C3%A9rea+Patagonia+House"
        alt="Vista aérea de la ubicación"
        className="w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      <div className="absolute bottom-8 left-8 z-10 text-white">
        <p className="font-sans text-sm font-semibold tracking-wide text-ph-bronce uppercase">
          Encu&eacute;tranos
        </p>
        <p className="font-serif text-white text-xl font-bold leading-tight sm:text-2xl">
          Cam. Campo Alegre S/N, Coyhaique, Ays&eacute;n
        </p>
      </div>
    </section>
  );
}
