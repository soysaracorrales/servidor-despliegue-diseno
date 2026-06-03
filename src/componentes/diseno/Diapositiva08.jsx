/* Diapositiva08.jsx: Tailwind CSS — framework de estilos por utilidades */
import logoTailwind from '../../recursos/logo-tailwind.png';

// Array de características clave de Tailwind CSS para mostrar en etiquetas
const CARACTERISTICAS = ['Clases predefinidas', 'Desarrollo rápido', 'Estilo consistente'];

export function Diapositiva08() {
  {/* Diapositiva de presentación de Tailwind CSS */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Logo de Tailwind */}
      <img src={logoTailwind} alt="Tailwind CSS" className="w-20 h-20 object-contain mb-4 sm:mb-6" />

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Tailwind CSS</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-6 text-center">El framework de estilos más popular del momento</h3>

      {/* Descripción */}
      <p className="max-w-2xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-3 sm:mb-5 mx-auto text-center">
        Tailwind CSS es un framework de CSS que permite diseñar interfaces directamente desde el HTML usando clases predefinidas. En vez de escribir CSS personalizado, aplicas clases como bg-black o text-center directamente en el elemento. Esto acelera mucho el desarrollo y mantiene el estilo consistente en todo el proyecto.
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
