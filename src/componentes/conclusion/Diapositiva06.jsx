/* Diapositiva06.jsx: Cierre del deslizador con la mirada al año siguiente */

export function Diapositiva06() {
  {/* Diapositiva de cierre centrada */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16 text-center relative overflow-hidden">

      {/* Etiqueta de categoría superior */}
      <span className="inline-flex items-center bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-6 sm:mb-8">
        El año que viene
      </span>

      {/* Título principal de cierre */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-(--color-dark-text) mb-4 sm:mb-6 leading-[1.1]">
        ¡Y al año que viene...<br className="hidden sm:block" /> más y peor, digo, mejor!
      </h1>

      {/* Descripción del siguiente paso formativo */}
      <p className="max-w-lg text-sm sm:text-base text-(--color-subtle-text) leading-relaxed">
        El año que viene me meto a DAM y sí, ya me han avisado de que viene fuerte. Más Java, más lógica, más quebraderos de cabeza. Pero oye, si he sobrevivido a DAW, algo se puede hacer. Allá vamos.
      </p>

    </div>
  );
}
