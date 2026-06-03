/* Diapositiva02.jsx: Vite — herramienta de desarrollo frontend */
import logoVite from '../../recursos/logo-vite.png';

// Array de características clave de Vite para mostrar en etiquetas
const CARACTERISTICAS = ['Servidor local', 'Empaquetado rápido', 'Listo para producción'];

export function Diapositiva02() {
  {/* Diapositiva de presentación de Vite */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Logo de Vite */}
      <img src={logoVite} alt="Vite" className="w-20 h-20 object-contain mb-4 sm:mb-6" />

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Vite</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-6 text-center">La herramienta de desarrollo más rápida del momento</h3>

      {/* Descripción */}
      <p className="max-w-2xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-3 sm:mb-5 mx-auto text-center">
        Vite es una herramienta de desarrollo frontend que destaca por su velocidad. Arranca el servidor en segundos y actualiza los cambios en el navegador de forma instantánea sin recargar toda la página. Está diseñado para trabajar con frameworks modernos como React.
      </p>

      {/* Etiquetas de características */}
      <div className="flex gap-2 flex-wrap justify-center">
        {CARACTERISTICAS.map((etiqueta, i) => (
          <span key={i} className="bg-(--color-tag-bg) border border-(--color-card-border) text-(--color-mid-gray) text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            {etiqueta}
          </span>
        ))}
      </div>

    </div>
  );
}
