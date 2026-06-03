/* Diapositiva06.jsx: Apache HTTP Server — el servidor web más usado del mundo */
import logoApache from '../../recursos/logo-apache.png';

// Características clave de Apache para destacar en etiquetas
const CARACTERISTICAS = ['Código abierto', 'Multiplataforma', 'Gran comunidad'];

export function Diapositiva06() {
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Logo de Apache */}
      <img src={logoApache} alt="Apache" className="w-20 h-20 object-contain mb-4 sm:mb-6" />

      {/* Título */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Apache HTTP Server</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-6 text-center">El servidor web más usado del mundo</h3>

      {/* Descripción */}
      <p className="max-w-2xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-3 sm:mb-5 mx-auto text-center">
        Apache es el servidor web más popular del mundo. Es gratuito, de código abierto y funciona en cualquier sistema operativo. Tiene una comunidad enorme, muchísimos módulos disponibles y es el más fácil de encontrar en cualquier hosting. Si has montado alguna vez un servidor local con XAMPP, ya has usado Apache sin saberlo.
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
