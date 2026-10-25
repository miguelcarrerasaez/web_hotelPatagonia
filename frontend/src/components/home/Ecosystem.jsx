export function Ecosystem() {
  const cards = [
    {
      title: 'Refugio',
      text: 'El arte de la pausa y el silencio patagónico.',
      img: '/images/refugioHome.png'
    },
    {
      title: 'Exploración',
      text: 'Sumérgete en la inmensidad salvaje de Aysén.',
      img: '/images/exploracionHome.png'
    },
    {
      title: 'Gastronomía',
      text: 'Cocina de origen a fuego lento y sabor local.',
      img: '/images/gastronomiaHome.png'
    }
  ];

  return (
    <section className="bg-[#F9F8F5] py-14">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Encabezado con 32px (mb-8) de margen inferior hacia las cards */}
        <div className="mb-8 max-w-2xl">
          <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
            NUESTRO ECOSISTEMA
          </span>
          <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal leading-tight mb-2">
            Un lugar. Tres maneras de sentirlo.
          </h2>
          <p className="font-sans text-[#28211A] text-base leading-relaxed">
            Patagonia House conecta el refugio boutique de montaña, la exploración de Aysén con Salvaje Corazón y la gastronomía de origen de Bòrek.
          </p>
        </div>

        {/* Grilla de tarjetas con bordes rectos (sin rounded-*) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardItems(cards)}
        </div>
      </div>
    </section>
  );
}

function cardItems(cards) {
  return cards.map((card, idx) => (
    <div key={idx} className="relative aspect-[3/4] overflow-hidden group">
      <img
        src={card.img}
        alt={card.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="font-serif text-2xl font-normal mb-1">{card.title}</h3>
        <p className="font-sans text-sm text-white/80">{card.text}</p>
      </div>
    </div>
  ));
}