import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

const roomCategories = [
  {
    id: 'standard',
    title: 'Standard',
    path: '/habitaciones/standard',
    specs: '20 - 25 m² | Hasta 2 personas',
    description:
      'Inspiradas en la calidez de las maderas nobles de la Patagonia, ofreciendo un refugio íntimo, acogedor y funcional.',
    image: '/images/habitacionStandard.png',
  },
  {
    id: 'superior',
    title: 'Superior',
    titleSub: '(Cerro Castillo, Ñire, Ciprés, Mañío, Coihue, Notro)',
    path: '/habitaciones/superior',
    specs: '20 - 35 m² | De 2 a 3 personas',
    description:
      'Espacios amplios envueltos en texturas orgánicas y detalles de autor, diseñados para el descanso profundo con vistas despejadas.',
    image: '/images/habitacionSuperior.png',
  },
  {
    id: 'junior-suite',
    title: 'Junior Suite',
    titleSub: '(San Lorenzo, Arrayán y Luma)',
    path: '/habitaciones/junior-suite',
    specs: '45 - 108 m² | Hasta 4 personas',
    description:
      'Suites de gran amplitud con chimenea privada o amplios ventanales enmarcados en la serenidad del valle de Coyhaique.',
    image: '/images/habitacionJuniorSuite.png',
  },
  {
    id: 'apartment',
    title: 'Apartment',
    titleSub: '(Luz 1)',
    path: '/habitaciones/apartment',
    specs: '130 m² | Hasta 7 personas',
    description:
      'Residencia privada de 3 dormitorios independientes, cocina equipada, gran área común y chimenea a leña para grupos o familias.',
    image: '/images/habitacionApartment.png',
  },
];

export function RoomsSubhome({ lang = 'ES', setLang = () => {}, navigate }) {
  const goHome = () => {
    if (navigate) navigate('/');
    else window.location.href = '/';
  };

  const handleNavigate = (path) => {
    if (navigate) navigate(path);
    else window.location.href = path;
  };

  const handleImgError = (e) => {
    if (e.target.src.endsWith('.png')) {
      e.target.src = e.target.src.replace('.png', '.jpg');
    } else if (e.target.src.endsWith('.jpg')) {
      e.target.src = e.target.src.replace('.jpg', '.png');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A] overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} darkText={true} navigate={navigate} />

      <main className="pt-28 md:pt-36">
        {/* BREADCRUMB */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-4 pb-4">
          <p className="font-sans text-xs md:text-sm text-[#8C8377] font-medium tracking-wide flex items-center gap-1.5">
            <button
              onClick={goHome}
              className="hover:text-[#2C3E35] hover:underline cursor-pointer transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#C88E4B]">Habitaciones</span>
          </p>
        </section>

        {/* ENCABEZADO PRINCIPAL */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8">
          <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
            HABITACIONES - REFUGIO
          </span>
          <h1 className="font-serif text-[#2C3E35] text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight max-w-2xl mb-6">
            Encuentra tu lugar para hacer una pausa
          </h1>
          <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
            Refugios de diseño rodeados de bosque nativo. Cada espacio ha sido pensado para el descanso profundo, con vistas despejadas a la Patagonia y la calidez del fuego siempre encendido.
          </p>
        </section>

        {/* TARJETAS DE LAS 4 CATEGORÍAS */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {roomCategories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleNavigate(cat.path)}
                className="group cursor-pointer bg-white border border-[#2C3E35]/10 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="w-full h-[320px] sm:h-[380px] bg-[#EFECE6] overflow-hidden">
                  <img
                    src={cat.image}
                    onError={handleImgError}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="font-serif text-[#2C3E35] text-2xl sm:text-3xl font-normal mb-1">
                      {cat.title}
                    </h2>
                    {cat.titleSub && (
                      <span className="font-sans text-xs text-[#8C8377] block mb-3 font-normal">
                        {cat.titleSub}
                      </span>
                    )}
                    <p className="font-sans text-xs text-[#C88E4B] font-medium uppercase tracking-wider mb-3">
                      {cat.specs}
                    </p>
                    <p className="font-sans text-[#28211A]/80 text-sm font-light leading-relaxed mb-6">
                      {cat.description}
                    </p>
                  </div>

                  <span className="inline-block self-start font-sans text-xs font-medium uppercase tracking-wider bg-[#2C3E35] text-white px-5 py-2.5 group-hover:bg-[#1f2d26] transition-colors">
                    Ver habitaciones
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default RoomsSubhome;