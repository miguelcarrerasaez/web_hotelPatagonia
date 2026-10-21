export function Ecosystem() {
  const cards = [
    {
      title: 'Refugio',
      text: 'Habitaciones dise&ntilde;adas para el descanso y la privacidad.',
      img: 'https://placehold.co/400x500/292929/FFFFFF?text=Refugio',
    },
    {
      title: 'Exploraci&oacute;n',
      text: 'Rutas guiadas por glaciares, bosques y estepa austral.',
      img: 'https://placehold.co/400x500/292929/FFFFFF?text=Exploracion',
    },
    {
      title: 'Gastronom&iacute;a',
      text: 'Sabores de la zona con productos locales y de temporada.',
      img: 'https://placehold.co/400x500/292929/FFFFFF?text=Gastronomia',
    },
  ];

  return (
    <section className="bg-ph-hueso py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ph-bronce">
            Nuestro ecosistema
          </p>
          <h2 className="font-serif text-ph-taupe text-3xl font-bold leading-tight sm:text-4xl mt-1">
            Un lugar. Tres maneras de sentirlo.
          </h2>
          <p className="mt-4 font-sans text-ph-taupe text-lg leading-relaxed">
            Descubre c&oacute;mo cada experiencia se entrelaza con el entorno natural.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="relative h-[500px] rounded-xl overflow-hidden group"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="font-serif text-white text-2xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-white/90 text-sm sm:text-base">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
