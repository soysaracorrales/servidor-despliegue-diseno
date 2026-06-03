/* Diapositiva03.jsx: Servidor local de Vite — comandos para arrancar el proyecto */

export function Diapositiva03() {
  {/* Diapositiva con bloque de código de terminal */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8">

      {/* Título y subtítulo */}
      <div className="text-center mb-3 sm:mb-5 shrink-0">
        <h2 className="text-xl sm:text-3xl font-bold text-(--color-dark-text) mb-1 sm:mb-2">Servidor local en Vite</h2>
        <h3 className="text-sm sm:text-base font-medium text-(--color-mid-gray)">Cómo crear y arrancar el proyecto</h3>
      </div>

      {/* Bloque de código con apariencia de terminal */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[60%]">
        {/* Barra superior con puntos de semáforo y nombre del archivo */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">Terminal</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`# 1. Crear un proyecto nuevo con Vite + React
npm create vite@latest mi-proyecto -- --template react

# 2. Entrar en la carpeta e instalar dependencias
cd mi-proyecto
npm install

# 3. Arrancar el servidor local de desarrollo
npm run dev

# Vite levanta el servidor y muestra algo así:
#
#   VITE v5.4.0  ready in 212 ms
#
#   ➜  Local:   http://localhost:5173/
#   ➜  Network: use --host to expose
#
# Abre http://localhost:5173 en el navegador
# y los cambios se reflejan al instante sin recargar.`}
        </pre>
      </div>

    </div>
  );
}
