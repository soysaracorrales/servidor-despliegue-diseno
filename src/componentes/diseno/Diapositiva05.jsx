/* Diapositiva05.jsx: JSX — la sintaxis de React */

export function Diapositiva05() {
  {/* Diapositiva con bloque de código de JSX */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8">

      {/* Título y subtítulo */}
      <div className="text-center mb-3 sm:mb-5 shrink-0">
        <h2 className="text-xl sm:text-3xl font-bold text-(--color-dark-text) mb-1 sm:mb-2">JSX</h2>
        <h3 className="text-sm sm:text-base font-medium text-(--color-mid-gray)">La sintaxis que mezcla HTML con JavaScript</h3>
      </div>

      {/* Bloque de código con apariencia de editor */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[60%]">
        {/* Barra superior con puntos de semáforo y nombre del archivo */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">Saludo.jsx</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`// JSX mezcla HTML y JavaScript en el mismo archivo.
// React lo transforma en llamadas a funciones del DOM.

function Saludo({ nombre }) {
  const hora = new Date().getHours()
  const mensaje = hora < 12 ? 'Buenos días' : 'Buenas tardes'

  return (
    <div>
      <h1>{mensaje}, {nombre}</h1>
      <p>Son las {hora}h</p>
    </div>
  )
}

// Las expresiones JS van entre llaves { }
// Los atributos HTML usan camelCase: className, onClick...
// Todo componente debe devolver un único elemento raíz.`}
        </pre>
      </div>

    </div>
  );
}
