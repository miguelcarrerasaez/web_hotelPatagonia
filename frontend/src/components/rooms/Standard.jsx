import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

export function Standard({ lang = 'ES', setLang = () => {}, navigate }) {
  const roomsList = [
    {
      id: 'lenga',
      name: 'Lenga',
      specs: '20 m²  |  Queen Size  |  2 personas',
      description:
        'Inspirada en la solidez y calidez del árbol que le da su nombre, Lenga es una invitación al descanso profundo. Un espacio envuelto en maderas nobles de origen local, textiles orgánicos y una luz natural sutil que filtra la frondosidad del bosque nativo. El refugio perfecto para pausar el ritmo y contemplar la Patagonia en absoluto silencio.',
      img: '/images/lenga.png',
      reverse: false, // Texto Izquierda, Foto Derecha
    },
    {
      id: 'san-valentin',
      name: 'San Valentín',
      specs: '20 m²  |  King Size  |  2 personas',
      description:
        'Ubicada en el primer nivel del lodge, San Valentín es un refugio de atmósfera íntima y acogedora. Sus 20 m² de arquitectura cálida han sido diseñados para envolver al viajero en el silencio patagónico, creando el santuario perfecto para recuperar energías y desconectar tras un día de expedición.',
      img: '/images/sanvalentin.png',
      reverse: true, // Foto Izquierda, Texto Derecha
    },
    {
      id: 'tineo',
      name: 'Tineo',
      specs: '25 m²  |  King Size  |  2 personas',
      description:
        'Ubicada en el segundo nivel del lodge, Tineo ofrece una perspectiva elevada y serena del entorno. Un refugio íntimo de atmósfera cálida, diseñado como el santuario perfecto para recuperar energías en total confort tras un día de expedición en Aysén.',
      img: '/images/tineo.png',
      reverse: false, // Texto Izquierda, Foto Derecha
    },
    {
      id: 'tepa',
      name: 'Tepa',
      specs: '25 m²  |  King Size  |  2 personas',
      description:
        'Ubicada en el segundo nivel del lodge, Tepa invita a contemplar el bosque nativo desde una perspectiva privilegiada. Un refugio de 25 m² donde la calidez de la madera de autor y la luz natural crean la atmósfera perfecta para el descanso sereno y la desconexión tras un día de expedición.',
      img: '/images/tepa.png',
      reverse: true, // Foto Izquierda, Texto Derecha
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A]">
      
      {/* 1. Navbar adaptada a fondo claro */}
      <Navbar lang={lang} setLang={setLang} darkText={true} navigate={navigate} />

      <main className="pt-28 md:pt-36">
        
        {/* 2. ENCABEZADO DE CATEGORÍA */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-4">
          <span className="font-sans text-xs uppercase tracking-widest text-[#8C8377] font-medium block mb-2">
            HABITACIONES
          </span>
          <h1 className="font-serif text-[#2C3E35] text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Standard
          </h1>
        </section>

        {/* 3. LISTADO DE HABITACIONES (Grip alternado con gap de 142px) */}
        <div className="flex flex-col gap-12 md:gap-16 py-8">
          {roomsList.map((room) => (
            <section
              key={room.id}
              className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-14 w-full"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-32 items-center ${
                  room.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* BLOQUE DE TEXTO (5 columnas en desktop) */}
                <div
                  className={`lg:col-span-5 flex flex-col items-start justify-center ${
                    room.reverse ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <h2 className="font-serif text-[#C88E4B] text-3xl sm:text-4xl font-normal mb-3">
                    {room.name}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#8C8377] font-medium tracking-wide mb-6">
                    {room.specs}
                  </p>
                  <p className="font-sans text-[#28211A]/80 text-sm sm:text-base leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* BLOQUE FOTOGRÁFICO (7 columnas en desktop) */}
                <div
                  className={`lg:col-span-7 w-full h-[480px] sm:h-[600px] lg:h-[680px] ${
                    room.reverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={room.img}
                    alt={`Habitación ${room.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* 4. SECCIÓN AMENIDADES */}
        <section className="bg-[#F9F8F5] py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="font-serif text-[#C88E4B] text-3xl sm:text-4xl font-normal mb-8">
              Amenidades
            </h2>
            <div className="w-full overflow-x-auto flex justify-center pt-2 pb-4">
              <img
                src="/images/ameneidades.png"
                alt="Amenidades Standard Patagonia House"
                className="max-w-none md:max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* 5. SECCIÓN INFORMACIÓN ÚTIL (Fondo infoUtil.png + Tarjetas Glass) */}
        <section className="relative w-full py-16 md:py-24 bg-[#2C3E35] overflow-hidden">
          {/* Imagen de fondo */}
          <img
            src="/images/infoUtil.png"
            alt="Fondo Información Útil"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>

          {/* Contenido */}
          <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-white">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-10">
              Información útil
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1: Desayuno */}
              <div className="bg-black/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 flex flex-col gap-4 font-sans text-xs sm:text-sm font-light leading-relaxed">
                <h3 className="font-sans font-medium text-base text-white">
                  Desayuno Patagónico
                </h3>
                <p>
                  Una propuesta matutina elaborada diariamente a partir de ingredientes locales, panadería artesanal de la casa, charcutería regional y frutas de estación. El punto de partida ideal para planificar tu jornada de exploración en Aysén.
                </p>
                <p className="mt-2">
                  <strong className="font-medium text-white block">Lugar y Horarios:</strong>
                  Todos los días de 07:00 a 10:00 hrs en Restaurant Bòrek.
                </p>
                <p>
                  <strong className="font-medium text-white block">Box Lunch de Expedición:</strong>
                  Disponible para salidas tempranas con aviso previo.
                </p>
                <p>
                  <strong className="font-medium text-white block">Requerimientos Especiales:</strong>
                  Adaptamos la propuesta a dietas vegetarianas, veganas o restricciones alimentarias notificadas con anticipación.
                </p>
              </div>

              {/* Card 2: Check-in */}
              <div className="bg-black/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 flex flex-col gap-4 font-sans text-xs sm:text-sm font-light leading-relaxed">
                <h3 className="font-sans font-medium text-base text-white">
                  Check-in y Recepción
                </h3>
                <div>
                  <strong className="font-medium text-white block mb-1">Horarios:</strong>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Check-in: desde las 15:00 hrs.</li>
                    <li>Check-out: hasta las 12:00 hrs.</li>
                    <li>Recepción: De 08:00 a 22:00 hrs.</li>
                  </ul>
                </div>
                <p className="mt-2">
                  Early check-in y late check-out disponibles, sujetos a disponibilidad.
                </p>
              </div>

              {/* Card 3: Camas extras */}
              <div className="bg-black/40 backdrop-blur-md border border-white/15 p-6 sm:p-8 flex flex-col gap-4 font-sans text-xs sm:text-sm font-light leading-relaxed">
                <h3 className="font-sans font-medium text-base text-white">
                  Camas extras
                </h3>
                <p>
                  Para mayor comodidad de nuestros huéspedes, contamos con la opción de camas adicionales en algunas de nuestras habitaciones.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Disponibilidad sujeta a confirmación previa.</li>
                  <li>Se puede aplicar un cargo adicional por persona/noche.</li>
                  <li>Es necesario solicitarla al momento de la reserva o con anticipación a tu llegada.</li>
                </ul>
                <p className="mt-2">
                  De esta manera aseguramos que tu estadía sea lo más confortable y adaptada a tus necesidades.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 6. Footer institucional */}
      <Footer />
    </div>
  );
}

export default Standard;