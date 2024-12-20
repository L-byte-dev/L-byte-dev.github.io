import React, { useEffect } from 'react';

export default function ProjectModal({ isOpen, toggleModal, project }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null; 

  return (
    <div id="portfolioModal1" className="fixed inset-0 z-50 overflow-hidden">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-[#1c2a3a] rounded-lg shadow-lg max-w-4xl w-full">
          <div className="flex justify-end">
            <button className="text-gray-500 hover:text-gray-700 p-4" onClick={toggleModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white uppercase mb-4">{project.title}</h2>

            <img className="w-full h-15 md:h-36 sm:h-24 object-contain object-center" src={project.image} alt={project.title} />

            <p className="p-6 text-white">{project.description}</p>

            <div className="space-x-4 mb-4">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                rounded-full text-lg'>
                Ver Código
              </a>
              {project.webLink &&
                <a
                    href={project.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                    focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                    rounded-full text-lg'>                
                    Ver Página Web
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
