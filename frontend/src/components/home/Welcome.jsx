export function Welcome() {
  return (
    <section className="bg-[#F9F8F5] py-12 text-center">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-serif text-[#2C3E35] text-3xl sm:text-4xl lg:text-5xl font-normal">
            Bienvenido a Patagonia House
          </h2>
          
          <div className="flex flex-col gap-4 font-sans text-[#28211A] text-base md:text-lg leading-relaxed">
            <p>
              Rodeado por la frondosidad del bosque nativo y la inmensidad de la cordillera, Patagonia House es un punto de encuentro entre el confort contemporáneo y la naturaleza indómita.
            </p>
            <p>
              Desde nuestra ubicación privilegiada en Coyhaique, te invitamos a pausar el ritmo, reconectar con el entorno y descubrir el secreto mejor guardado del sur de Chile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}