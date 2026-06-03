/* Introduccion.jsx: Pantalla de introducción animada que muestra el título
del proyecto letra a letra y desaparece con un fundido antes de mostrar la web */
import { useEffect, useState } from 'react';

// Texto completo que se escribe letra a letra en la introducción
const TEXTO_COMPLETO = 'Servidor, Despliegue y Diseño';

// Velocidad en milisegundos entre cada letra al escribir
const VELOCIDAD_ESCRITURA = 55;

export function Introduccion({ alTerminar }) {
  // Estado con el fragmento de texto que se ha escrito hasta el momento
  const [escrito, setEscrito] = useState('');

  // Estado para controlar si la pantalla de introducción es visible u oculta
  const [visible, setVisible] = useState(true);

  // Efecto que anima la escritura letra a letra y luego desvanece la pantalla
  useEffect(() => {
    let i = 0;

    // Intervalo que añade una letra al texto cada VELOCIDAD_ESCRITURA milisegundos
    const intervaloEscritura = setInterval(() => {
      i++;
      setEscrito(TEXTO_COMPLETO.slice(0, i));
      if (i === TEXTO_COMPLETO.length) {
        clearInterval(intervaloEscritura);
      }
    }, VELOCIDAD_ESCRITURA);

    // Tiempo total que tarda en escribirse el texto completo
    const tiempoEscritura = TEXTO_COMPLETO.length * VELOCIDAD_ESCRITURA;

    // Temporizador para iniciar el fundido de salida tras terminar de escribir
    const temporizadorFundido = setTimeout(() => setVisible(false), tiempoEscritura + 800);

    // Temporizador para avisar al padre que la introducción ha terminado
    const temporizadorFin = setTimeout(() => alTerminar(), tiempoEscritura + 1500);

    return () => {
      clearInterval(intervaloEscritura);
      clearTimeout(temporizadorFundido);
      clearTimeout(temporizadorFin);
    };
  }, [alTerminar]);

  {/* Pantalla de introducción */}
  return (
    <div className={`fixed inset-0 z-9999 flex items-center justify-center bg-black transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Texto animado con cursor parpadeante */}
      <p className="text-white text-sm sm:text-xl lg:text-2xl font-semibold tracking-[0.15em] sm:tracking-[0.3em] uppercase">
        {escrito}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
}
