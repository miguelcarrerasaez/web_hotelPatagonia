import { Navbar } from '../layout/Navbar';
import { Hero } from './Hero';
import { Welcome } from './Welcome';
import { Ecosystem } from './Ecosystem';
import { RoomsPreview } from './RoomsPreview';
import { Experiences } from './Experiences';
import { CtaBanner } from './CtaBanner';
import { LocationMap } from './LocationMap';
import { Footer } from '../layout/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-ph-hueso text-ph-taupe selection:bg-ph-verde selection:text-[#F8F7F1]">
      <Navbar lang="ES" setLang={() => {}} />

      <Hero />
      <Welcome />
      <Ecosystem />
      <RoomsPreview />
      <Experiences />
      <CtaBanner />
      <LocationMap />
      <Footer />
    </div>
  );
}

export default Home;
