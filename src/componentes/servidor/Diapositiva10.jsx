/* Diapositiva10.jsx: LiteSpeed — alto rendimiento compatible con Apache */
import logoLiteSpeed from '../../recursos/logo-litespeed.png';

// Características clave de LiteSpeed para destacar en la presentación
const CARACTERISTICAS = ['Alto rendimiento', 'Compatible con Apache', 'Optimizado para WordPress'];

export function Diapositiva10() {
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Logo de LiteSpeed */}
      <img src={logoLiteSpeed} alt="LiteSpeed" className="w-20 h-20 object-contain mb-4 sm:mb-6" />

      {/* Título */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">LiteSpeed</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-6 text-center">Alto rendimiento compatible con Apache</h3>

      {/* Descripción */}
      <p className="max-w-2xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-3 sm:mb-5 mx-auto text-center">
        Es un servidor web de alto rendimiento compatible con las configuraciones de Apache, lo que hace muy fácil migrar desde él. Consume menos recursos, carga las páginas más rápido y es especialmente popular en hostings optimizados para WordPress y PHP.
      </p>

      {/* Etiquetas */}
      <div className="flex gap-2 flex-wrap justify-center">
        {CARACTERISTICAS.map((caracteristica, i) => (
          <span key={i} className="bg-(--color-tag-bg) border border-(--color-card-border) text-(--color-mid-gray) text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            {caracteristica}
          </span>
        ))}
      </div>

    </div>
  );
}
