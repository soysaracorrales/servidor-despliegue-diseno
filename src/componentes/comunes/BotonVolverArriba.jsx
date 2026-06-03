/* BotonVolverArriba.jsx: Botón flotante fijo que aparece al hacer scroll
y al pulsarlo lleva al usuario de vuelta al inicio de la página */
import { useEffect, useState } from 'react';

export function BotonVolverArriba() {
  // Estado para controlar si el botón es visible según la posición del scroll
  const [visible, setVisible] = useState(false);

  // Efecto que escucha el scroll y muestra el botón al superar los 300px
  useEffect(() => {
    function alHacerScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener('scroll', alHacerScroll);
    return () => window.removeEventListener('scroll', alHacerScroll);
  }, []);

  // Función para desplazarse suavemente al inicio de la página
  function subirAlInicio() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  {/* Botón volver arriba */}
  return (
    <button onClick={subirAlInicio} className={`fixed bottom-20 right-6 z-1000 flex h-11 w-11 items-center justify-center rounded-full bg-white text-(--color-dark-text) transition-opacity duration-300 hover:opacity-80 
    cursor-pointer ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Icono de flecha hacia arriba */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
