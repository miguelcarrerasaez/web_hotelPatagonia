export function Ecosystem({ navigate }) {
  const cards = [
    {
      title: 'Refugio',
      text: 'El arte de la pausa y el silencio patagónico.',
      img: '/images/refugioHome.png',
      link: '/habitaciones'
    },
    {
      title: 'Exploración',
      text: 'Sumérgete en la inmensidad salvaje de Aysén.',
      img: '/images/exploracionHome.png',
      link: '/experiencias/expediciones'
    },
    {
      title: 'Gastronomía',
      text: 'Cocina de origen a fuego lento y sabor local.',
      img: '/images/gastronomiaHome.png',
      link: '/gastronomia'
    }
  ];

  const handleCardClick = (e, link) => {
    e.preventDefault();
    if (navigate) {
      navigate(link);
    } else {
      window.location.href = link;
    }
  };

  return (
    <section className="bg-[#F9F8F5] py-14">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Encabezado de la sección */}
        <div className="mb-8 max-w-3xl">
          <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
            NUESTRO ECOSISTEMA
          </span>
          <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl font-normal leading-tight mb-2">
            Un ecosistema de refugio, exploración y gastronomía
          </h2>
        </div>

        {/* Tarjetas interactivas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href={card.link}
              onClick={(e) => handleCardClick(e, card.link)}
              className="relative aspect-[3/4] overflow-hidden group block cursor-pointer"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="font-serif text-2xl font-normal mb-1">
                  {card.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {card.text}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}