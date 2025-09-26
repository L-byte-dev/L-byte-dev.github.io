import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn } from "react-icons/fa";


export default function Contact() {
  const form = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const timerRef = useRef(null);

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('');
    setStatusType('');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage('¡Mensaje enviado con éxito! Te responderé pronto.');
          setStatusType('success');
          form.current.reset();
        },
        (error) => {
          setStatusMessage(
            `Hubo un error: ${error?.text ?? 'Intenta de nuevo más tarde.'}`
          );
          setStatusType('error');
        }
      );
  };

  useEffect(() => {
    if (!statusMessage) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setStatusMessage('');
      setStatusType('');
      timerRef.current = null;
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [statusMessage]);

  const liveValue = statusType === 'error' ? 'assertive' : 'polite';

  return (
    <section id='contact'>
      <div className='max-w-[75rem] mx-[auto] my-[0] px-6 py-[0]'>
        <h2>Contacto</h2>
        <div className='grid md:grid-cols-[1fr_1fr] gap-12 mt- sm:grid-cols-[1fr]'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center'>
              <svg
                className='mt-4 mr-4 text-[1.5rem] text-[var(--secondary)]'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                <polyline points='22,6 12,13 2,6'></polyline>
              </svg>
              <div>
                <h3>Email</h3>
                <p>lucasgabrielg2001@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center'>
              <svg
                className='mt-4 mr-4 text-[1.5rem] text-[var(--secondary)]'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                <circle cx='12' cy='10' r='3'></circle>
              </svg>
              <div>
                <h3>Ubicación</h3>
                <p>Argentina, Chaco, Resistencia</p>
              </div>
            </div>
            <div className='flex items-center'>
              <svg
                className='mt-4 mr-4 text-[1.5rem] text-[var(--secondary)]'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
              </svg>
              <div>
                <h3>Teléfono</h3>
                <p>+54 9 362 493 7090</p>
              </div>
            </div>
            <div className='flex items-center'>
              <FaLinkedinIn className='mt-11 mr-4 text-[1.5rem] text-[var(--secondary)]' />
              <div>
                <h3>LinkedIn</h3>
                <a
                  className='mb-6 text-[1.1rem] text-[var(--gray)]'
                  href='https://www.linkedin.com/in/lucas-gabriel-gómez'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  linkedin.com/in/lucas-gabriel-gómez
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos='fade-in'
            data-aos-duration='500'
            data-aos-anchor-placement='top-bottom'
            className='bg-[rgba(30,_41,_59,_0.5)] p-8 rounded-[1rem]'
          >
            <form ref={form} id='form' onSubmit={sendEmail}>
              <div className='mb-6'>
                <label htmlFor='name' className='block mb-2 font-medium'>
                  Nombre
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-4 py-3 bg-[rgba(15,_23,_42,_0.5)] border-[0.063rem] border-[solid] border-[rgba(255,255,255,0.1)] rounded-[0.5rem] text-[1rem] [transition:all_0.3s_ease] text-[var(--light)] focus:outline-[none]'
                  required
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='user_email' className='block mb-2 font-medium'>
                  Email
                </label>
                <input
                  ref={emailRef}
                  aria-label='Ingresa tu email'
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                  name='user_email'
                  type='email'
                  id='user_email'
                  className='w-full px-4 py-3 bg-[rgba(15,_23,_42,_0.5)] border-[0.063rem] border-[solid] border-[rgba(255,255,255,0.1)] rounded-[0.5rem] text-[1rem] [transition:all_0.3s_ease] text-[var(--light)] focus:outline-[none]'
                  required
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='message' className='block mb-2 font-medium'>
                  Mensaje
                </label>
                <textarea
                  ref={messageRef}
                  name='message'
                  id='message'
                  className='min-h-[9.375rem] resize-y w-full px-4 py-3 bg-[rgba(15,_23,_42,_0.5)] border-[0.063rem] border-[solid] border-[rgba(255,255,255,0.1)] rounded-[0.5rem] text-[1rem] [transition:all_0.3s_ease] text-[var(--light)] focus:outline-[none]'
                  required
                />
              </div>
              <button
                type='submit'
                className='inline-block px-8 py-3 rounded-[3.125rem] no-underline font-semibold [transition:all_0.3s_ease] cursor-pointer border-[none] text-[1rem] bg-[var(--primary)] text-[white] hover:bg-[var(--primary-dark)] hover:-translate-y-[0.125rem] hover:[box-shadow:0_10px_25px_rgba(37,_99,_235,_0.3)]'
              >
                Enviar Mensaje
              </button>
            </form>
            {statusMessage && (
              <div
                className={`mt-4 text-center text-lgpx-4 py-3 rounded-[8px] mt-4 font-medium ${
                  statusType === 'success'
                    ? 'bg-[rgba(16,_185,_129,_0.1)] border-[1px] border-[solid] border-[rgba(16,185,129,0.2)]'
                    : 'bg-[rgba(239,_68,_68,_0.1)] border-[1px] border-[solid] border-[rgba(239,68,68,0.2)]'
                }`}
                role='status'
                aria-live={liveValue}
                aria-atomic='true'
              >
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
