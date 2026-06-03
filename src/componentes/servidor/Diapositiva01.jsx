/* Diapositiva01.jsx: Introducción al módulo de servidores web */

export function Diapositiva01() {
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16 text-center relative overflow-hidden">

      {/* Etiqueta superior */}
      <span className="inline-flex items-center bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-6 sm:mb-8">
        Despliegue de aplicaciones web
      </span>

      {/* Título y descripción */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-(--color-dark-text) mb-4 sm:mb-6 leading-[1.1]">
        Servidores
      </h1>
      <p className="max-w-lg text-sm sm:text-base text-(--color-subtle-text) leading-relaxed">
        En esta sección aprenderemos qué son, los principales tipos de servidores y algunos de los más utilizados, junto con su implementación con PHP.
      </p>

    </div>
  );
}
