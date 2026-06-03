/* Deslizador.jsx: Componente principal de la conclusión que gestiona
la navegación entre diapositivas con botones anterior, siguiente y puntos */
import { useState } from 'react';
import { Diapositiva01 } from './Diapositiva01';
import { Diapositiva02 } from './Diapositiva02';
import { Diapositiva03 } from './Diapositiva03';
import { Diapositiva04 } from './Diapositiva04';
import { Diapositiva05 } from './Diapositiva05';
import { Diapositiva06 } from './Diapositiva06';

// Array con todos los componentes de diapositiva en orden
const DIAPOSITIVAS = [
  Diapositiva01,
  Diapositiva02,
  Diapositiva03,
  Diapositiva04,
  Diapositiva05,
  Diapositiva06,
];

export function Deslizador() {
  // Estado para controlar qué diapositiva se muestra actualmente
  const [actual, setActual] = useState(0);

  // Función para retroceder a la diapositiva anterior (con bucle al final)
  function irAnterior() {
    setActual((a) => (a === 0 ? DIAPOSITIVAS.length - 1 : a - 1));
  }

  // Función para avanzar a la diapositiva siguiente (con bucle al inicio)
  function irSiguiente() {
    setActual((a) => (a === DIAPOSITIVAS.length - 1 ? 0 : a + 1));
  }

  // Función para saltar directamente a una diapositiva por su índice
  function irADiapositiva(indice) {
    setActual(indice);
  }

  // Devuelve el handler de click para cada punto de navegación
  function alClickarPunto(indice) {
    return () => irADiapositiva(indice);
  }

  {/* Contenedor principal del deslizador */}
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-(--color-dark-gray) bg-transparent h-[calc(100vh-110px)]">
      {/* Pista de diapositivas que se desplaza horizontalmente */}
      <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${actual * 100}%)` }}>
        {/* Recorro el array de diapositivas para renderizar cada una */}
        {DIAPOSITIVAS.map((Diapositiva, i) => (
          <div key={i} className="min-w-full h-full pb-24 sm:pb-0">
            <Diapositiva />
          </div>
        ))}
      </div>

      {/* Contador numérico de diapositiva actual sobre total */}
      <span className="absolute bottom-18 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-[0.25em] text-(--color-muted-gray) uppercase">
        {actual + 1} / {DIAPOSITIVAS.length}
      </span>

      {/* Controles de navegación: botón anterior, puntos y botón siguiente */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">

        {/* Botón anterior */}
        <button onClick={irAnterior}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-dark-text) text-white transition-all hover:bg-black cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>


        {/* Puntos de navegación, uno por diapositiva */}
        <div className="flex gap-2">
          {/* Si está activo, el punto se expande; si no, se muestra pequeño */}
          {DIAPOSITIVAS.map((_, i) => (
            <button key={i} onClick={alClickarPunto(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer 
                ${i === actual ? 'w-6 bg-(--color-dark-text)' : 'w-2 bg-(--color-dark-text)/50'}`}/>
          ))}
        </div>

        {/* Botón siguiente */}
        <button onClick={irSiguiente}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-dark-text) text-white transition-all hover:bg-black cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

      </div>
    </div>
  );
}
