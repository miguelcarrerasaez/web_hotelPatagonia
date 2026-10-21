import { NavLink } from 'react-router-dom';

const footerLinks = [
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

export function Footer() {
  return (
    <footer className="bg-ph-oscuro text-[#F8F7F1]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#AD9E7A]">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                {column.links.map((link) => (
                  <li key={link}>
                    <NavLink
                      to={`#${link.toLowerCase()}`}
                      className="transition hover:text-[#AD9E7A]"
                    >
                      {link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/70">
          &copy; {new Date().getFullYear()} hotelPatagonia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

