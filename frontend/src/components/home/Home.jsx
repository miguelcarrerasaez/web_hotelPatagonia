import { Navbar } from '../layout/Navbar';
import { Hero } from './Hero';
import { Welcome } from './Welcome';
import { Ecosystem } from './Ecosystem';
import { RoomsPreview } from './RoomsPreview';
import { CtaBanner } from './CtaBanner';
import { Experiences } from './Experiences';
import { LocationMap } from './LocationMap';
import { Footer } from '../layout/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-ph-hueso text-ph-taupe selection:bg-ph-verde selection:text-[#F8F7F1]">
      {/* 1. Navbar con posición absoluta superpuesta al Hero */}
      <Navbar lang="ES" setLang={() => {}} />

      {/* 2. Flujo completo de la Landing Page según Figma */}
      <Hero />
      <Welcome />
      <Ecosystem />
      <RoomsPreview />
      <CtaBanner />
      <Experiences />
      <LocationMap />

      {/* 3. Cierre con el Footer de 3 columnas y logotipos */}
      <Footer />
    </div>
  );
}

export default Home;