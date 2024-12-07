import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import django from '../../assets/django.svg';
import spring from '../../assets/spring.svg';
import react from '../../assets/react.svg';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const listProjects = [
    {
        id: 1,
        image: django,
        title: 'Blog DeFi',
        description: 'El objetivo de este proyecto fue crear una aplicación web utilizando el framework Django y aplicando los conocimientos adquiridos durante el curso. El blog permitirá a los visitantes leer artículos, filtrar el contenido por categorías, antigüedad y orden alfabético. Los usuarios registrados, además, podrán comentar en los artículos, editar y eliminar sus comentarios. Los usuarios colaboradores podrán crear, editar y eliminar artículos, categorías y comentarios.',
        codeLink: 'https://github.com/matheosc/g5-blog',
        webLink: 'https://triclion01.pythonanywhere.com',
    },
    {
        id: 3,
        image: spring,
        title: 'Streaming Música',
        description: 'El objetivo de este proyecto fue crear una aplicación back end usando el framework Spring Boot y una base de datos. La aplicación permite a los usuarios explorar una biblioteca musical, realizar búsquedas avanzadas por título, género, artista o álbum, y descubrir nuevas canciones basadas en sus preferencias. Los usuarios pueden crear perfiles con listas de reproducción personalizadas, gestionarlas (añadir/eliminar canciones, hacerlas públicas, repetir o reproducir aleatoriamente) y compartirlas con otros.',
        codeLink: 'https://github.com/L-byte-dev/trabajopracticospring',
    },
    {
        id: 4,
        image: react,
        title: 'Youtube Music Podcasts',
        description: 'El objetivo de este proyecto fue crear una aplicación con un diseño inspirado en Youtube Music. Se usa un custom hook para consumir la API audioboom y obtener los datos de los podcasts. La aplicación permite que al seleccionar un podcast se despliegue una barra de reproducción en la cual se puede pausar y adelantar o retroceder al audio, además permite crear, con un formulario, listas de reproducción, las cuales se muestra en tiempo real.',
        codeLink: 'https://github.com/L-byte-dev/podcast-player',
        webLink: 'https://podcast-player-lake.vercel.app',
    },
  ];

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

  const toggleModal = (project) => {
    setIsModalOpen(!isModalOpen);
    setCurrentProject(project);
  };

  return (
    <section data-aos='fade-right' data-aos-delay='100' id="projects" className="relative overflow-hidden flex flex-col text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-36 sm:h-24 object-contain object-center cursor-pointer"
                  onClick={() => toggleModal(project)} 
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <ProjectModal isOpen={isModalOpen} toggleModal={() => toggleModal(null)} project={currentProject} />
      </div>
    </section>
  );
}
