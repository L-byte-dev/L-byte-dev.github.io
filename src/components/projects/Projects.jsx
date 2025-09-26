import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import defi from '../../assets/defi.png';
import streaming from '../../assets/streaming.jpeg';
import podcasts from '../../assets/podcasts.png';
import dashboard from '../../assets/dashboard.jpeg';
import testing from '../../assets/testing.png';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const listProjects = [
    {
      id: 1,
      image: defi,
      title: 'DeFi Blog',
      description:
        'El objetivo de este proyecto en equipo fue crear un blog funcional utilizando Python, Django, MySQL, HTML, CSS y Bootstrap. Se diseñaron e implementaron las secciones de artículos, categorías, nosotros y contacto. Se Incorporó un sistema de autenticación y permisos por roles, en donde los usuarios registrados pueden comentar y los usuario colaboradores pueden crear nuevos artículos, además se añadió funcionalidades de filtrado, para mejorar la experiencia del usuario y la interacción con el contenido.',
      technologies: ['Python', 'MySQL', 'Django'],
      codeLink: 'https://github.com/matheosc/g5-blog',
      webLink: 'https://triclion01.pythonanywhere.com',
    },
    {
      id: 2,
      image: streaming,
      title: 'Biblioteca musical',
      description:
        'En este proyecto Back-End se desarrolló una biblioteca musical utilizando Java, Maven Spring Boot. Se diseñó un modelo de datos relacional optimizado y se construyó una API RESTful con operaciones CRUD para la gestión de entidades musicales. Se implementó endpoints avanzados con filtros y búsquedas personalizadas, además de la lógica de negocio para administrar perfiles de usuario y listas de reproducción, asegurando flexibilidad y escalabilidad en la aplicación.',
      technologies: ['Java', 'Maven', 'Spring Boot'],
      codeLink: 'https://github.com/L-byte-dev/trabajopracticospring',
    },
    {
      id: 3,
      image: podcasts,
      title: 'Clon de Youtube Music',
      description:
        'El objetivo de este proyecto fue crear una aplicación con un diseño inspirado en Youtube Music React y TypeScript. Se crearon múltiples componentes reutilizables para una interfaz moderna y dinámica, se implementó la gestión de estado para un reproductor de audio y formularios interactivos, además de la creación de listas de reproducción en tiempo real. Se integró el consumo de la API de Audioboom para obtener y reproducir streams de audio de manera eficiente y fluida.',
      technologies: ['React', 'TypeScript', 'API'],
      codeLink: 'https://github.com/L-byte-dev/podcast-player',
      webLink: 'https://podcast-player-lake.vercel.app',
    },
    {
      id: 4,
      image: dashboard,
      title: 'Dashboard con Storytelling',
      description:
        'Este proyecto presenta un análisis de datos de mortalidad en Argentina entre 2005 y 2023, utilizando información oficial del Ministerio de Salud. Se identificaron las tres principales causas de muerte: insuficiencia cardíaca, neumonía no especificada e infarto agudo del miocardio. A través de un dashboard interactivo hecho en Power BI se muestran tendencias temporales, distribuciones por grupo etario y comparaciones clave, aportando una visión integral para comprender patrones de salud pública en el país.',
      technologies: ['SQL', 'ETL', 'Power BI'],
      codeLink: 'https://github.com/L-byte-dev/Proyecto-Final-Analisis-de-datos',
    },
    {
      id: 5,
      image: testing,
      title: 'Testing manual OpenCart',
      description:
        'Este proyecto consistió en el diseño y ejecución de pruebas manuales sobre una tienda en línea (OpenCart Demo). A partir de 3 historias de usuario se elaboraron 15 casos de prueba positivos y negativos, validados en escenarios como registro de clientes, búsqueda de productos y gestión del carrito. Se documentaron resultados, evidencias y reporte de bugs, aplicando técnicas de testing funcional para asegurar calidad y detectar fallos.',
      technologies: ['Casos de prueba', 'Reporte de bugs'],
      codeLink: 'https://github.com/L-byte-dev/Proyecto-Final-Testing',
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='projects'>
      <div className='max-w-[1200px] mx-[auto] my-[0] px-6 py-[0]'>
        <h2>Mis Proyectos</h2>
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className='p-4'>
              <div
                data-aos='fade-in'
                data-aos-duration='500'
                data-aos-anchor-placement='top-bottom'
                onClick={() => openModal(project)}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(project);
                    }
                  }}
                className='bg-[rgba(30,_41,_59,_0.5)] rounded-[1rem] overflow-hidden [transition:all_0.3s_ease] hover:-translate-y-[5px] hover:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.2)] cursor-pointer'
              >
                <div className='w-full h-[10rem] overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover [transition:all_0.5s_ease] hover:scale-105'
                    loading='lazy'
                  />
                </div>
                <div className='p-4'>
                  <h3>{project.title}</h3>

                  <div className='flex flex-wrap gap-2 mx-[0] my-4'>
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='bg-[rgba(249,_115,_22,_0.1)] px-3 py-1 rounded-[3.125rem] text-[0.8rem] font-medium text-[var(--secondary)]'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-4 mt-6'>
                    <a
                      href={project.codeLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block px-8 py-3 rounded-[3.125rem] no-underline font-semibold [transition:all_0.3s_ease] cursor-pointer border-[none] text-[1rem] bg-[var(--primary)] text-[white] hover:bg-[var(--primary-dark)] hover:-translate-y-[0.125rem] hover:[box-shadow:0_10px_25px_rgba(37,_99,_235,_0.3)]'
                    >
                      Código
                    </a>
                    {project.webLink && (
                      <a
                        href={project.webLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='inline-block px-8 py-3 rounded-[3.125rem] no-underline font-semibold [transition:all_0.3s_ease] cursor-pointer border-[none] text-[1rem] bg-transparent text-[var(--secondary)] border-[0.125rem] border-[solid] border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[white] hover:-translate-y-[0.125rem] hover:[box-shadow:0_10px_25px_rgba(249,_115,_22,_0.3)]'
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <ProjectModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          project={currentProject}
        />
      </div>
    </section>
  );
}
