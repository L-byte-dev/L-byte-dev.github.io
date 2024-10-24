import React from 'react';

export default function ProjectModal({ isOpen, toggleModal, project }) {
  if (!isOpen) return null; 

  return (
    <div id="portfolioModal1" className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full">
          <div className="flex justify-end p-4 border-b">
            <button className="text-gray-500 hover:text-gray-700" onClick={toggleModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4">{project.title}</h2>

            <div className="flex justify-center items-center mb-6">
              <div className="w-1/4 h-px bg-gray-400"></div>
              <div className="px-4 text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 17.75l-6.472 3.404 1.236-7.207-5.244-5.103 7.236-1.051L12 0l3.244 7.793 7.236 1.051-5.244 5.103 1.236 7.207L12 17.75z" />
                </svg>
              </div>
              <div className="w-1/4 h-px bg-gray-400"></div>
            </div>

            <img className="w-full h-48 md:h-36 sm:h-24 object-contain object-center" src={project.image} alt={project.title} />

            <p className="text-gray-600 mb-6">{project.description}</p>

            <div className="space-x-4">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 inline-flex items-center"
              >
                Ver Código
              </a>
              {project.webLink &&
                <a
                    href={project.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 inline-flex items-center"
                >
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
