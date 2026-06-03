/* Diapositiva09.jsx: Ejemplo de estilos con Tailwind CSS */

export function Diapositiva09() {
  {/* Diapositiva con ejemplo de Tailwind en un componente */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-12 py-8">

      {/* Título */}
      <div className="text-center mb-5 shrink-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-(--color-dark-text) mb-2">Ejemplo de estilos con Tailwind CSS</h2>
      </div>

      {/* Bloque de código con apariencia de editor */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[55%]">
        {/* Barra superior con puntos de semáforo y nombre del archivo */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">Tarjeta.jsx</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`// Sin Tailwind necesitarías un archivo .css aparte.
// Con Tailwind los estilos van directamente en el JSX.

function Tarjeta({ titulo, texto }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-2 text-xl font-bold text-gray-900">
        {titulo}
      </h2>

      <p className="text-sm leading-relaxed text-gray-500">
        {texto}
      </p>

      <button className="mt-4 rounded-lg bg-black px-4 py-2 text-sm
                        text-white transition hover:opacity-80">
        Ver más
      </button>

    </div>
  )
}`}
        </pre>
      </div>

    </div>
  );
}
