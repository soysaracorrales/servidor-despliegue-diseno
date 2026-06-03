/* Diapositiva06.jsx: Ejemplo de componente en React */

export function Diapositiva06() {
  {/* Diapositiva con ejemplo de componente React con estado */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-12 py-8">

      {/* Título */}
      <div className="text-center mb-5 shrink-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-(--color-dark-text) mb-2">Ejemplo de componente en React</h2>
      </div>

      {/* Bloque de código con apariencia de editor */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[55%]">
        {/* Barra superior con puntos de semáforo y nombre del archivo */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">Contador.jsx</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`import { useState } from 'react'
// Un componente guarda su propio estado con useState
function Contador() {
  const [cuenta, setCuenta] = useState(0)

  return (
    <div>
      <p>Has hecho clic {cuenta} veces</p>
      <button onClick={() => setCuenta(cuenta + 1)}>
        Sumar
      </button>
      <button onClick={() => setCuenta(0)}>
        Reiniciar
      </button>
    </div>
  )
}

export default Contador`}
        </pre>
      </div>

    </div>
  );
}