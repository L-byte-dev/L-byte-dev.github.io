import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-[rgba(13,24,46,0.95)] backdrop-blur-[0.625rem] px-0 py-[1rem] transition-all duration-300 z-50">
      <div className="max-w-[75rem] mx-auto px-[1.5rem] py-0 flex justify-between items-center">
        <a
          href="#"
          className="text-[1.8rem] font-extrabold text-white no-underline"
        >
          Lucas<span className="text-[var(--secondary)]">Dev</span>
        </a>

        <div className="hidden md:block" />

        <ul className="hidden md:flex list-none space-x-8">
          <li>
            <a
              href="#skills"
              className="group relative inline-block font-medium transition-all duration-300 ease-in-out text-[#f8fafc] hover:text-[#f97316]"
            >
              Habilidades
              <span className="absolute left-0 -bottom-[0.3125rem] w-0 h-[0.125rem] bg-[#f97316] transition-all duration-300 ease-in-out group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="group relative inline-block font-medium transition-all duration-300 ease-in-out text-[#f8fafc] hover:text-[#f97316]"
            >
              Formación
              <span className="absolute left-0 -bottom-[0.3125rem] w-0 h-[0.125rem] bg-[#f97316] transition-all duration-300 ease-in-out group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="group relative inline-block font-medium transition-all duration-300 ease-in-out text-[#f8fafc] hover:text-[#f97316]"
            >
              Proyectos
              <span className="absolute left-0 -bottom-[0.3125rem] w-0 h-[0.125rem] bg-[#f97316] transition-all duration-300 ease-in-out group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="group relative inline-block font-medium transition-all duration-300 ease-in-out text-[#f8fafc] hover:text-[#f97316]"
            >
              Contacto
              <span className="absolute left-0 -bottom-[0.3125rem] w-0 h-[0.125rem] bg-[#f97316] transition-all duration-300 ease-in-out group-hover:w-full" />
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex items-center justify-center p-[0.5rem] z-[60] relative"
          onClick={() => setIsOpen((s) => !s)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      <nav
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 h-screen w-[70%] max-w-xs bg-[#0d182e] bg-opacity-95 backdrop-blur-lg transform transition-transform duration-500 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } [box-shadow:-0.3125rem_0_1.5625rem_rgba(0,0,0,0.1)]`}
      >
        <div className="px-[2rem] py-[5rem] flex flex-col space-y-6">
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="font-medium text-white text-lg"
          >
            Habilidades
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="font-medium text-white text-lg"
          >
            Experiencia
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="font-medium text-white text-lg"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="font-medium text-white text-lg"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
