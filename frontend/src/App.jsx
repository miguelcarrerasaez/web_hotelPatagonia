import { useMemo, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { Footer } from './components/layout/Footer';

const hero = {
  title: 'Disfruta de la Patagonia como nunca antes',
  subtitle:
    'Explora habitaciones pensadas para desconectar, experiencias auténticas y una gastronomía que refleja la riqueza del territorio.',
};

function App() {
  const [lang, setLang] = useState('ES');

  const sections = useMemo(
    () => [
      { id: 'inicio', label: lang === 'ES' ? 'Inicio' : 'Home' },
      { id: 'habitaciones', label: lang === 'ES' ? 'Habitaciones' : 'Rooms' },
      { id: 'experiencias', label: lang === 'ES' ? 'Experiencias' : 'Experiences' },
      { id: 'gastronomia', label: lang === 'ES' ? 'Gastronomía' : 'Dining' },
      { id: 'nosotros', label: lang === 'ES' ? 'Sobre nosotros' : 'About us' },
      { id: 'reservas', label: lang === 'ES' ? 'Reservas' : 'Reservations' },
    ],
    [lang]
  );

  return (
    <div className="min-h-screen bg-ph-hueso font-sans text-ph-taupe selection:bg-ph-verde selection:text-ph-hueso">
      <Navbar lang={lang} setLang={setLang} />

      <main>
        <Hero title={hero.title} subtitle={hero.subtitle} />

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mx-auto max-w-7xl px-6 py-16 text-center"
          >
            <h2 className="text-3xl font-bold font-serif">{section.label}</h2>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;