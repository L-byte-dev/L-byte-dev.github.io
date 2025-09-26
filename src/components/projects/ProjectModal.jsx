import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export default function ProjectModal({ isOpen, closeModal, project }) {
  const modalRef = useRef(null);
  const previousActiveRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      setTimeout(() => modalRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = '';
      previousActiveRef.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      } else if (e.key === 'Tab') {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen || !project) return null;

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const modalContent = (
    <div
      onClick={onBackdropClick}
      aria-hidden={!isOpen}
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm'
    >
      <div
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
        aria-describedby='modal-desc'
        tabIndex={-1}
        ref={modalRef}
        className='relative bg-[#1e293b] max-w-2xl w-full rounded-xl overflow-hidden shadow-xl max-h-[90vh] overflow-y-auto no-scrollbar'
      >
        <div className='relative top-0 z-10 flex justify-between items-center p-4 bg-[#1e293b]'>
          <h3 id='modal-title' className='text-2xl font-bold text-[#f97316]'>
            {project.title}
          </h3>
          <button
            onClick={closeModal}
            aria-label='Cerrar modal'
            className='p-2 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='p-6'>
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-[21rem] object-cover rounded-lg mb-6'
          />
          <p id='modal-desc' className='text-[#94a3b8] mb-6'>
            {project.description}
          </p>
          <div className='flex flex-wrap gap-2 mb-6'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='bg-[rgba(249,115,22,0.1)] px-3 py-1 rounded-full text-sm font-medium text-[#f97316]'
              >
                {tech}
              </span>
            ))}
          </div>
          <div className='flex gap-4'>
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
                className='inline-block px-8 py-3 rounded-[3.125rem] no-underline font-semibold [transition:all_0.3s_ease] cursor-pointer border-[none] text-[1rem] bg-transparent text-[var(--secondary)] border-[0.125rem] border-[solid] border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[white] hover:-translate-y-[0.125rem] hover:[box-shadow:0_10px_25px_rgba(249,_115,_22,_0.3)]'
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')
  );
}