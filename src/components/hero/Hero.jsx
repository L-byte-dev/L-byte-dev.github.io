import CV from './CV.pdf'

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center relative pt-[5rem]'> 
      <div className='max-w-[75rem] mx-auto my-0 px-[1.5rem] py-0'>
        <div className='w-full flex flex-col md:flex-row items-center gap-[3rem] relative max-w-[75rem]'>
          
          <div className='w-full md:w-[60%] order-2 md:order-none md:pr-[2.7rem]'>
            <span className='inline-block bg-[rgba(249,115,22,0.1)] text-[#f97316] px-[1rem] py-[0.5rem] rounded-[3.125rem] text-[0.9rem] font-medium mb-[1.5rem]'>
              Desarrollador Full Stack
            </span>
            <h1>Transformando ideas en experiencias digitales</h1>
            <p>
              Soy Lucas Gabriel Gómez, desarrollador web con experiencia en React, Java y Python. 
              Mi pasión es crear soluciones innovadoras que resuelvan problemas reales y brinden valor a los usuarios.
            </p>
            
            <div className='flex gap-[1rem] mt-[2rem]'>
              <a 
                href={CV} 
                target='_blank' 
                className='inline-block px-[2rem] py-[0.75rem] rounded-[3.125rem] no-underline font-semibold [transition:all_0.3s_ease] cursor-pointer border-[none] text-[1rem] bg-transparent text-[#f97316] border-[0.125rem] border-[solid] border-[#f97316] hover:bg-[#f97316] hover:text-[white] hover:-translate-y-[0.125rem] hover:[box-shadow:0_0.625rem_1.5625rem_rgba(249,_115,_22,_0.3)]'>
                Ver CV
              </a>
            </div>
          </div>
          
          <div className='md:absolute md:right-0 md:top-2/4 md:-translate-y-1/2 w-full md:w-[45%] max-w-[31.25rem] mx-auto md:mx-0 overflow-hidden [box-shadow:0_1.25rem_3.75rem_rgba(249,_115,_22,_0.3)] animate-morphing order-first md:order-none'>
            <img 
              src='https://l-byte-dev.github.io/assets/img-DkV39Vib.jpeg'
              alt='Lucas Gabriel Gómez - Desarrollador Full Stack'
              className='w-full h-auto block' 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
