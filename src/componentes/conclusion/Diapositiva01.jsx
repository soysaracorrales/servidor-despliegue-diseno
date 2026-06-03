/* Diapositiva01.jsx: Portada de la conclusión del curso de 2º */

export function Diapositiva01() {
  {/* Diapositiva de portada centrada */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16 text-center relative overflow-hidden">

      {/* Etiqueta de categoría superior */}
      <span className="inline-flex items-center bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-6 sm:mb-8">
        Reflexión final
      </span>

      {/* Título principal */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-(--color-dark-text) mb-4 sm:mb-6 leading-[1.1]">
        Conclusión del curso
      </h1>

      {/* Descripción breve del contenido de la sección */}
      <p className="max-w-lg text-sm sm:text-base text-(--color-subtle-text) leading-relaxed">
        Todo lo que me llevo de 2º DAW, lo que he aprendido, lo que mejoraría, las herramientas que más me han gustado y mi reflexión personal.
      </p>
    </div>
  );
}
