import { useRef, useEffect } from 'react';

export function Hero({ title, subtitle }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      if (video.readyState >= 2) {
        video.play().catch(() => {
          // El usuario puede bloquear reproducción automática
        });
      }
    };

    play();
    video.addEventListener('loadedmetadata', play);

    return () => {
      video.removeEventListener('loadedmetadata', play);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ph-oscuro">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
        Tu navegador no admite el elemento de video.
      </video>

      <div className="absolute inset-0 bg-ph-oscuro/80" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#AD9E7A]">
          Hotel &amp; Resorts
        </p>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#reservas"
            className="btn-reservar"
            aria-label="Reservar ahora"
          >
            Reservar ahora
          </a>

          <a
            href="#/nosotros"
            className="text-sm font-semibold text-white transition hover:text-[#AD9E7A]"
          >
            Descubrir experiencias
          </a>
        </div>
      </div>
    </section>
  );
}

