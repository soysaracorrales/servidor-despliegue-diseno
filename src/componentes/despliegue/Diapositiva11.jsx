/* Diapositiva11.jsx: Paso 5 — Arrancar el proyecto */

export function Diapositiva11() {
  {/* Diapositiva con el comando para arrancar el proyecto */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8">

      {/* Título con etiqueta de paso */}
      <div className="text-center mb-3 sm:mb-5 shrink-0">
        <span className="inline-flex items-center bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-3">
          Paso 5
        </span>
        <h2 className="text-xl sm:text-3xl font-bold text-(--color-dark-text) mb-1 sm:mb-2">Arrancar el proyecto</h2>
        <h3 className="text-sm sm:text-base font-medium text-(--color-mid-gray)">Ejecuta este comando en la terminal desde la carpeta del proyecto</h3>
      </div>

      {/* Bloque de código con apariencia de terminal */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[60%]">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">terminal</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`# Construye las imágenes y arranca todos los contenedores
docker compose up --build

# La primera vez tarda un poco. Cuando veas este mensaje, todo está listo:
# "ready for connections"

# Para detener el proyecto
docker compose down`}</pre>
      </div>

    </div>
  );
}
