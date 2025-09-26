const experiences = [
  {
    year: '2023',
    title: 'Curso Desarrollo Web - Informatorio',
    desc: 'Curso Full Stack que tuvo como principales temas la programación orientada a objetos, el uso de Python y Django, la creación y despliegue de un blog con métodos CRUD, el uso de MySQL como gestor de base de datos y el uso de Bootstrap para el diseño.',
    certificate: 'https://i.ibb.co/W3T2LxV/DIPLOMA-2-ETAPA-PROGR.jpg?fbclid=IwZXh0bgNhZW0CMTAAAR1ALY8VlGGU1eVVaE3U_xtTL0-wx0iJ3SdY75MWuq2xjn9TecHvdP__jvc_aem_YxrmkiC7rZ6e5aBsVWzzhA'
  },
  {
    year: '2023',
    title: 'Curso Java - Informatorio',
    desc: 'Curso Back End en donde se utilizó Maven como gestor de proyectos y Spring Boot para la construcción de una aplicación API REST, incluyó la creación de modelos entidad-relación, y la utilización de Postman para probar endpoints',
    certificate: 'https://i.ibb.co/fQjSjy0/Certificado-Java.jpg?fbclid=IwZXh0bgNhZW0CMTAAAR1K8SxWQgkSz2FH0YYKn-1GDXs7TEHcFj5w2TqZT-D9Bn6Bm5qRN_vsNgA_aem_FsE9PqfjG0z7VxkzTq_cww'
  },
  {
    year: '2024',
    title: 'Curso React - Informatorio',
    desc: 'Curso Front End que abarcó conceptos como la creación de componentes reutilizables, la aplicación de patrones de diseño, la utilización de TypeScript para mejorar la mantenibilidad y escalabilidad, el consumo de APIs, y una introducción a Next.js.',
    certificate: 'https://i.ibb.co/MfRksvv/Certificado-Aprobacin-React.jpg'
  },
  {
    year: '2025',
    title: 'Curso Data Analytics - Informatorio',
    desc: 'Curso que cubrió la manipulación de datos con Pandas, la visualización con Matplotlib y Seaborn, la creación de dashboards interactivos con storytelling en Power BI, y una introducción de Machine Learning para análisis predictivo.',
    certificate: 'https://i.ibb.co/LD5sMpfX/ADD25-A-1-Certificado-de-Aprobaci-n-An-lisis-de-Datos.jpg'
  },
  {
    year: '2025',
    title: 'Curso Testing - Informatorio',
    desc: 'Curso que cubrió pruebas funcionales y no funcionales para web, mobile y APIs, técnicas de prueba (caja negra, caja blanca y basadas en experiencia), creación y ejecución de casos de prueba basados en historias de usuario y reporte de errores.',
    certificate: 'https://i.ibb.co/DfZXryRJ/QA25-A-Certificado-de-Aprobaci-n-Testing.jpg'
  }
];

export default function Education() {
  return (
    <section id='education' className='w-full py-20 border-b border-b-[rgba(148,163,184,0.2)]'>
      <div className='max-w-[75rem] mx-[auto] my-[0] px-6 py-[0]'>
        <h2>Mi Formación</h2>

        <div className='relative max-w-[800px] mt-12 mx-[auto] mb-[0]'>
          <div className='absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-[var(--secondary)]' />

          {experiences.map((exp, i) => {
            const side = i % 2 === 0 ? 'right' : 'left';

            return (
              <div
                key={i}
                className={`flex mb-16 relative items-start justify-start ${side === 'right' ? 'md:justify-end' : 'md:justify-start'}`}
              >
                <div className='absolute top-6 left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-[var(--secondary)] z-10' />

                <div
                  data-aos='fade-in'
                  data-aos-duration='500'
                  data-aos-anchor-placement='top-bottom'
                  className={`w-full ml-12 md:w-[calc(50%_-_2rem)] md:ml-0 bg-[rgba(30,41,59,0.5)] p-6 rounded-[16px] relative`}
                >
                  <span className='inline-block bg-[var(--secondary)] text-[white] px-3 py-1 rounded-[50px] text-[0.85rem] font-semibold mb-4'>{exp.year}</span>
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                  <a
                    href={exp.certificate}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[1.1rem] inline-block text-[var(--secondary)] font-medium hover:underline'
                  >
                    Ver certificado
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
