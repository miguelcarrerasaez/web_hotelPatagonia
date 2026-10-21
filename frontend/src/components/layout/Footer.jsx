export function Footer() {
  const navColumns = [
    {
      title: 'Navegación',
      links: ['Inicio', 'Habitaciones', 'Experiencias', 'Gastronomía', 'Sobre nosotros'],
    },
    {
      title: 'Legal',
      links: ['Políticas de cancelación', 'Preguntas frecuentes'],
    },
    {
      title: 'Contacto',
      links: ['Datos de contacto', 'Ubicación'],
    },
  ];

  const logos = ['Patagonia House', 'Salvaje Corazón', 'Börek'];

  return (
    <footer className="bg-[#22332A] text-[#F8F7F1]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {navColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#AD9E7A]">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="transition hover:text-[#AD9E7A]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div key={logo} className="flex flex-col items-center gap-2 text-sm">
                <div className="w-20 h-20 rounded-full bg-[#F8F7F1] flex items-center justify-center text-[#22332A] font-serif font-bold text-xs sm:text-sm tracking-wide">
                  {logo}
                </div>
                <span className="text-white/70">{logo}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-white/50">
            &copy; {new Date().getFullYear()} Patagonia House. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

