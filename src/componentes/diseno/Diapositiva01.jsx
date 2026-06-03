/* Diapositiva01.jsx: Introducción al módulo de diseño web */

export function Diapositiva01() {
  {/* Diapositiva de portada centrada */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16 text-center relative overflow-hidden">

      {/* Etiqueta de categoría superior */}
      <span className="inline-flex items-center bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-6 sm:mb-8">
        Diseño de interfaces web
      </span>

      {/* Título principal */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-(--color-dark-text) mb-4 sm:mb-6 leading-[1.1]">
        Diseño
      </h1>

      {/* Descripción breve del contenido de la sección */}
      <p className="max-w-lg text-sm sm:text-base text-(--color-subtle-text) leading-relaxed">
        En esta sección veremos las herramientas con las que está construida esta web: Vite para el desarrollo, React para los componentes y Tailwind CSS para darle estilo.
      </p>

    </div>
  );
}
