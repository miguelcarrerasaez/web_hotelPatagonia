import { useState } from 'react';

export function Navbar({ lang = 'ES', setLang, darkText = false, navigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showExperiences, setShowExperiences] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowExperiences(false);
  };

  const handleNav = (path) => {
    toggleMenu();
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
  };

  const textColor = darkText ? 'text-[#2C3E35]' : 'text-white';
  const borderColor = darkText ? 'border-[#2C3E35]' : 'border-white';
  const burgerBg = darkText ? 'bg-[#2C3E35]' : 'bg-white';

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-6 md:py-8">
      {/* Contenedor centralizado con padding idéntico al Hero */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center relative">
        
        {/* LADO IZQUIERDO: Contenedor del Menú */}
        <div className="relative">
          
          {/* Estado cerrado */}
          {!isOpen && (
            <div className="flex items-center gap-4">
              <button
                onClick={toggleMenu}
                className={`flex items-center gap-2 ${textColor} hover:opacity-80 transition-opacity focus:outline-none cursor-pointer`}
                aria-label="Abrir menú"
              >
                <div className="flex flex-col gap-1 w-5">
                  <span className={`h-[2px] w-full ${burgerBg} block`}></span>
                  <span className={`h-[2px] w-full ${burgerBg} block`}></span>
                  <span className={`h-[2px] w-full ${burgerBg} block`}></span>
                </div>
                <span className="font-sans text-sm tracking-wide ml-1 font-medium">
                  Menú
                </span>
              </button>

              <span className={`${textColor}/40 font-light`}>|</span>

              <div className={`flex items-center gap-1 ${textColor} font-sans text-sm cursor-pointer select-none`}>
                <span>{lang}</span>
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>
          )}

          {/* Menú desplegable Glass */}
          {isOpen && (
            <div className="absolute -top-3 -left-4 w-72 sm:w-80 bg-[#1f2d26]/85 backdrop-blur-lg border border-white/15 p-5 sm:p-6 z-50 text-white shadow-2xl transition-all">
              
              <div className="flex items-center gap-4 mb-4 pb-3 border-b border-white/10">
                <button
                  onClick={toggleMenu}
                  className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-sans text-sm tracking-wide font-medium">
                    Cerrar
                  </span>
                </button>

                <span className="text-white/40 font-light">|</span>

                <div className="flex items-center gap-1 text-white font-sans text-sm cursor-pointer select-none">
                  <span>{lang}</span>
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                  </svg>
                </div>
              </div>

              <nav>
                <ul className="flex flex-col gap-3 font-sans text-sm font-medium tracking-wide">
                  <li>
                    <button
                      onClick={() => handleNav('/habitaciones')}
                      className="hover:text-[#C88E4B] transition-colors text-left w-full py-0.5 cursor-pointer"
                    >
                      Habitaciones
                    </button>
                  </li>

                  <li
                    onMouseEnter={() => setShowExperiences(true)}
                    onMouseLeave={() => setShowExperiences(false)}
                  >
                    <button
                      onClick={() => setShowExperiences(!showExperiences)}
                      className="flex items-center justify-between w-full hover:text-[#C88E4B] transition-colors py-0.5 text-left focus:outline-none font-sans text-sm font-medium tracking-wide cursor-pointer"
                    >
                      <span>Experiencias</span>
                      <svg
                        className={`w-3.5 h-3.5 stroke-current transition-transform duration-300 ${
                          showExperiences ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>

                    <div
                      className={`flex flex-col gap-2 mt-1 ml-3 font-sans text-xs font-light text-white/85 overflow-hidden transition-all duration-300 ${
                        showExperiences ? 'max-h-40 opacity-100 py-1' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <button
                        onClick={() => handleNav('/experiencias/bienestar')}
                        className="hover:text-white transition-colors text-left cursor-pointer"
                      >
                        · Bienestar y tinajas
                      </button>
                      <button
                        onClick={() => handleNav('/experiencias/expediciones')}
                        className="hover:text-white transition-colors text-left cursor-pointer"
                      >
                        · Expediciones y Tours (Salvaje Corazón)
                      </button>
                      <button
                        onClick={() => handleNav('/experiencias/pesca')}
                        className="hover:text-white transition-colors text-left cursor-pointer"
                      >
                        · Pesca con Mosca / Fly fishing
                      </button>
                    </div>
                  </li>

                  <li>
                    <button
                      onClick={() => handleNav('/gastronomia')}
                      className="hover:text-[#C88E4B] transition-colors text-left w-full py-0.5 cursor-pointer"
                    >
                      Gastronomía (Bòrek)
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => handleNav('/lodge')}
                      className="hover:text-[#C88E4B] transition-colors text-left w-full py-0.5 cursor-pointer"
                    >
                      El Lodge
                    </button>
                  </li>
                </ul>
              </nav>

            </div>
          )}

        </div>

        {/* LADO DERECHO: Botón Reservar */}
        <div>
          <a
            href="#reservas"
            className={`px-6 py-2.5 border ${borderColor} ${textColor} font-sans text-sm tracking-wider hover:bg-[#2C3E35] hover:text-white hover:border-[#2C3E35] transition-all`}
          >
            Reservar
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;