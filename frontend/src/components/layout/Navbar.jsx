export function Navbar() {
  return (
    // 'absolute' posiciona la barra sobre el video en el inicio, pero al scrollear hacia abajo la deja arriba
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent flex justify-between items-center px-6 md:px-12 lg:px-20 py-8 text-white">
      {/* Menú + Idioma */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <div className="flex flex-col gap-1 w-5">
            <span className="h-[2px] w-full bg-white block"></span>
            <span className="h-[2px] w-full bg-white block"></span>
            <span className="h-[2px] w-full bg-white block"></span>
          </div>
          <span className="font-sans text-sm tracking-wide ml-1">Menú</span>
        </button>
        <span className="text-white/40 font-light">|</span>
        <div className="flex items-center gap-1 text-white font-sans text-sm cursor-pointer">
          <span>ES</span>
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
          </svg>
        </div>
      </div>

      {/* Botón Reservar */}
      <div>
        <a
          href="#reservas"
          className="px-6 py-2.5 border border-white text-white font-sans text-sm tracking-wider hover:bg-white hover:text-[#2C3E35] transition-all"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}