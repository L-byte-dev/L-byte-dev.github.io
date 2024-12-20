import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    setStatusMessage('');

    emailjs
      .sendForm('service_fzofbtr', 'template_airg3if', form.current, 'Lr8vMGGFB0ycSUTg-') 
      .then(
        () => {
          setStatusMessage('Mensaje enviado correctamente.');
          form.current.reset(); 
        },
        (error) => {
          setStatusMessage(`Hubo un error: ${error.text}`); 
        }
      );
  };

  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contacto</h2>
        <form ref={form} id="form" onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="user_email" className="block mb-2 text-xl font-medium text-white">Email</label>
            <input 
              ref={emailRef}
              name="user_email"
              type="email"
              id="user_email"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="email@ejemplo.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-xl font-medium text-white">Mensaje</label>
            <textarea 
              ref={messageRef}
              name="message"
              rows="6"
              id="message"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Deja un comentario..."
              required
            />
          </div>
          <button type="submit" className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg">
            Enviar Mensaje
          </button>
        </form>

        {statusMessage && (
          <div className="mt-4 text-center text-white text-lg">
            {statusMessage}
          </div>
        )}
      </div>
    </section>
  );
}
