import python from '../../assets/python.svg';
import sql from '../../assets/sql.svg';
import java from '../../assets/java.svg';
import typescript from '../../assets/typescript.svg';
import django from '../../assets/django.svg';
import spring from '../../assets/spring.svg';
import react from '../../assets/react.svg';
import tailwind from '../../assets/tailwind.svg';

export default function Skills() {
  return (
    <section id='skills'>
      <div className='max-w-[75rem] mx-[auto] my-[0] px-6 py-[0]'>
        <h2>Mis Habilidades</h2>

        <div className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8 mt-12'>
          <div
            data-aos='fade-in'
            data-aos-duration='500'
            data-aos-anchor-placement='top-bottom'
            className='bg-[rgba(30,_41,_59,_0.5)] rounded-[1rem] p-8 [transition:all_0.3s_ease] hover:-translate-y-[0.313rem] hover:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.2)]'
          >
            <h3 className='flex items-center mb-6'>
              Lenguajes de Programación
            </h3>

            <ul className='[list-style:none]'>
              <li className='flex items-center mb-4'>
                <img src={python} alt='Python Logo' className='w-6 h-6' />
                <span className='ml-3'>Python</span>
              </li>

              <li className='flex items-center mb-4'>
                <img src={sql} alt='SQL Logo' className='w-6 h-6' />
                <span className='ml-3'>SQL</span>
              </li>

              <li className='flex items-center mb-4'>
                <img src={java} alt='Java Logo' className='w-6 h-6' />
                <span className='ml-3'>Java</span>
              </li>

              <li className='flex items-center mb-4'>
                <img
                  src={typescript}
                  alt='TypeScript Logo'
                  className='w-6 h-6'
                />
                <span className='ml-3'>TypeScript</span>
              </li>
            </ul>
          </div>
          <div
            data-aos='fade-in'
            data-aos-duration='500'
            data-aos-anchor-placement='top-bottom'
            className='bg-[rgba(30,_41,_59,_0.5)] rounded-[1rem] p-8 [transition:all_0.3s_ease] hover:-translate-y-[0.313rem] hover:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.2)]'
          >
            <h3 className='flex items-center mb-6'>Frameworks y Librerías</h3>

            <ul className='[list-style:none]'>
              <li className='flex items-center mb-4'>
                <img src={django} alt='Django Logo' className='w-6 h-6' />
                <span className='ml-3'>Django</span>
              </li>

              <li className='flex items-center mb-4'>
                <img src={spring} alt='Spring Logo' className='w-6 h-6' />
                <span className='ml-3'>Spring</span>
              </li>

              <li className='flex items-center mb-4'>
                <img src={react} alt='React Logo' className='w-6 h-6' />
                <span className='ml-3'>React</span>
              </li>

              <li className='flex items-center mb-4'>
                <img src={tailwind} alt='Tailwind Logo' className='w-6 h-6' />
                <span className='ml-3'>Tailwind</span>
              </li>
            </ul>
          </div>
          <div
            data-aos='fade-in'
            data-aos-duration='500'
            data-aos-anchor-placement='top-bottom'
            className='bg-[rgba(30,_41,_59,_0.5)] rounded-[1rem] p-8 [transition:all_0.3s_ease] hover:-translate-y-[0.313rem] hover:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.2)]'
          >
            <h3 className='flex items-center mb-6'>Habilidades de Software</h3>

            <ul className='[list-style:none]'>
              <li className='flex items-center mb-4'>
                <span>Programación Orientada a Objetos (POO)</span>
              </li>

              <li className='flex items-center mb-4'>
                <span>Consumo de APIs</span>
              </li>

              <li className='flex items-center mb-4'>
                <span>Extracción, Transformación y Carga de Datos (ETL)</span>
              </li>
            </ul>
          </div>
          <div
            data-aos='fade-in'
            data-aos-duration='500'
            data-aos-anchor-placement='top-bottom'
            className='bg-[rgba(30,_41,_59,_0.5)] rounded-[1rem] p-8 [transition:all_0.3s_ease] hover:-translate-y-[0.313rem] hover:[box-shadow:0_10px_30px_rgba(0,_0,_0,_0.2)]'
          >
            <h3 className='flex items-center mb-6'>Habilidades Blandas</h3>

            <ul className='[list-style:none]'>
              <li className='flex items-center mb-4'>
                <span>Aprendizaje Rápido</span>
              </li>

              <li className='flex items-center mb-4'>
                <span>Proactividad</span>
              </li>

              <li className='flex items-center mb-4'>
                <span>Resolución de problemas</span>
              </li>

              <li className='flex items-center mb-4'>
                <span>Adaptabilidad</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
