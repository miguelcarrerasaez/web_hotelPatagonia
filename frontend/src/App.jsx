import { useState, useEffect } from 'react';
import { Home } from './components/home/Home';
import { RoomsSubhome } from './components/rooms/RoomsSubhome';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Escucha cuando el usuario usa los botones de avanzar/retroceder del navegador
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Función de navegación para cambiar de página sin recargar la pantalla
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0); // Vuelve al inicio de la página al cambiar de vista
  };

  // Renderizado condicional según la ruta activa
  if (currentPath === '/habitaciones') {
    return <RoomsSubhome navigate={navigate} />;
  }

  return <Home navigate={navigate} />;
}

export default App;