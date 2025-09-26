import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 500,  
      easing: 'ease', 
      offset: 150,   
      once: true     
    })
  },[]);
  return (
   <main className='bg-[#0d182e]'>
    <Navbar />
    <Hero /> 
    <Skills />
    <Education />
    <Projects />
    <Contact />
   </main>
  )
}

