import { useState, useEffect } from 'react';
import { Home } from './components/home/Home';
import { RoomsSubhome } from './components/rooms/RoomsSubhome';
import { Standard } from './components/rooms/Standard';
import { Superior } from './components/rooms/Superior';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  if (currentPath === '/habitaciones') {
    return <RoomsSubhome navigate={navigate} />;
  }

  if (currentPath === '/habitaciones/standard') {
    return <Standard navigate={navigate} />;
  }

  if (currentPath === '/habitaciones/superior') {
    return <Superior navigate={navigate} />;
  }

  return <Home navigate={navigate} />;
}

export default App;