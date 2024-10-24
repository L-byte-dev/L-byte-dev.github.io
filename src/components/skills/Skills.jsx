import React from 'react'
import java from '../../assets/java.svg'
import js from '../../assets/js.svg'
import python from '../../assets/python.svg'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font pt-32'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Habilidades</h1>
                <p data-aos='fade-right' data-aos-delay='5s00' className='leading-relaxed text-base'>
                Aprendo rápido, soy muy bueno para resolver problemas. Estoy motivado por los desafíos y siempre busco maneras de mejorar mis conocimientos y habilidades. Tengo un enfoque proactivo hacia el aprendizaje continuo y la adaptación a nuevas tecnologías.
                </p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={python} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={java} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={js} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
            </nav>
            </div>
        </div>
    </section>
  )
}
