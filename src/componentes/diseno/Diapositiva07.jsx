/* Diapositiva07.jsx: Estructura de un proyecto Vite + React */

export function Diapositiva07() {
  {/* Diapositiva con árbol de estructura de carpetas */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8">

      {/* Título y subtítulo */}
      <div className="text-center mb-3 sm:mb-5 shrink-0">
        <h2 className="text-xl sm:text-3xl font-bold text-(--color-dark-text) mb-1 sm:mb-2">Estructura del proyecto</h2>
        <h3 className="text-sm sm:text-base font-medium text-(--color-mid-gray)">Cómo se organiza un proyecto Vite + React</h3>
      </div>

      {/* Bloque de código con apariencia de explorador de archivos */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[60%]">
        {/* Barra superior con puntos de semáforo y nombre del panel */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">Explorador de archivos</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`mi-proyecto/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Imágenes, fuentes, etc.
│   ├── components/      # Componentes reutilizables
│   ├── pages/           # Páginas de la aplicación
│   ├── hooks/           # Hooks personalizados
│   ├── App.jsx          # Componente raíz
│   ├── App.css
│   ├── index.css        # Estilos globales
│   └── main.jsx         # Punto de entrada de React
├── index.html           # HTML base de la app
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias del proyecto`}
        </pre>
      </div>

    </div>
  );
}

