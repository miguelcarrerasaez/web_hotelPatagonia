export function CtaBanner() {
  return (
    <section className="bg-ph-verde py-16 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-serif text-white text-3xl font-bold leading-tight sm:text-4xl">
          Dale espacio a tu pr&oacute;xima estancia
        </h2>
        <a
          href="#reservas"
          className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-sans font-semibold text-white bg-[#292929] hover:bg-black transition"
        >
          Planificar mi estancia
        </a>
      </div>
    </section>
  );
}
