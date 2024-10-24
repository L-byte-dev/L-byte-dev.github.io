import React from 'react'
import icon from '../../assets/icon.png'

export default function Experience() {
  return (

    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
             <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
            <img src={icon} className='object-center rounded relative z-10' alt="Experience" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 '>Experiencia</h1>
            <h2 className='title-font font-bold text-white sm:text-2xl '>2023:</h2>
            <h3 className='title-font font-bold text-white sm:text-xl	'>Curso Desarrollo Web Informatorio:</h3>
            <p className='mb-8 text-white leading-relaxed '>
              Proyecto en equipo para crear una aplicación web utilizando el framework Django. Apliqué conocimientos teóricos para desarrollar un blog con funciones como filtrado de contenido, registro de usuarios y autenticación. Se usó MySQL como gestor de la base de datos.
            </p>
            <h3 className='title-font font-bold text-white sm:text-xl	'>Curso Java Informatorio:</h3>
            <p className='mb-8 text-white leading-relaxed '>
              Aprendizaje del back-end, POO y diagrama entidad-relación. Se utilizó Maven como gestor de proyectos y también Spring Framework para la construcción de una aplicación con operaciones CRUD. Se usó DBeaver y Postman.
            </p>
            <h2 className='title-font font-bold text-white sm:text-2xl '>2024:</h2>
            <h3 className='title-font font-bold text-white sm:text-xl	'>Curso React Informatorio:</h3>
            <p className='mb-8 text-white leading-relaxed '>
              Práctica de los conceptos fundamentales de JavaScript. Se creó una aplicación client-side rendering, que usando hooks como: useState, useRef, useContext y custom hooks, permite reproducir podcasts. También se trabajó con NextJS y con React server components.
            </p>
        </div>
        </div>
    </section>

  )
}
