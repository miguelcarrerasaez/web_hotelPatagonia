import { Navbar } from '../layout/Navbar';
import { Hero } from './Hero';
import { Welcome } from './Welcome';
import { Ecosystem } from './Ecosystem';
import { RoomsPreview } from './RoomsPreview';
import { CtaBanner } from './CtaBanner';
import { Experiences } from './Experiences';
import { LocationMap } from './LocationMap';
import { Footer } from '../layout/Footer';

export function Home({ navigate }) {
  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#28211A]">
      <Navbar lang="ES" setLang={() => {}} navigate={navigate} />

      <Hero />
      <Welcome />
      <Ecosystem navigate={navigate} />
      <RoomsPreview navigate={navigate} />
      <CtaBanner />
      <Experiences navigate={navigate} />
      <LocationMap />
      <Footer />
    </div>
  );
}

export default Home;