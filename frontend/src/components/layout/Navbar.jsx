export function Navbar({ lang }) {
  return (
    <header className="fixed w-full top-0 z-50 bg-transparent flex justify-between items-center px-6 md:px-12 lg:px-20 py-8 text-ph-hueso">
      {/* Lado izquierdo: Menú + idioma */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="w-5 h-[1px] bg-ph-hueso" />
          <div className="w-5 h-[1px] bg-ph-hueso" />
          <div className="w-5 h-[1px] bg-ph-hueso" />
        </div>
        <span className="text-base font-sans font-normal leading-5">Menú</span>
        <div className="w-[1px] h-4 bg-ph-hueso" />
        <div className="flex items-center gap-1">
          <span className="text-base font-sans font-normal leading-5">{lang}</span>
          <div className="w-1.5 h-3 bg-ph-hueso" />
        </div>
      </div>

      {/* Centro: intencionalmente vacío (diseño inmersivo sin logo ni enlaces) */}
      <div className="hidden" />

      {/* Lado derecho: Botón Reservar */}
      <button
        type="button"
        className="px-6 py-3 border border-ph-hueso flex items-center justify-center gap-2.5 text-white"
        aria-label="Reservar ahora"
      >
        Reservar
      </button>
    </header>
  );
}

