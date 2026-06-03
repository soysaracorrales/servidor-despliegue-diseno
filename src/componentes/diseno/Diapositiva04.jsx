/* Diapositiva04.jsx: React — biblioteca de interfaces de usuario */
import logoReact from '../../recursos/logo-react.png';

// Array de características clave de React para mostrar en etiquetas
const CARACTERISTICAS = ['Componentes reutilizables', 'DOM virtual', 'Desarrollado por Meta'];

export function Diapositiva04() {
  {/* Diapositiva de presentación de React */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Logo de React */}
      <img src={logoReact} alt="React" className="w-20 h-20 object-contain mb-4 sm:mb-6" />

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">React</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-6 text-center">La biblioteca de interfaces más popular del mundo</h3>

      {/* Descripción */}
      <p className="max-w-2xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-3 sm:mb-5 mx-auto text-center">
        React es una biblioteca de JavaScript creada por Meta en 2013 para construir interfaces de usuario. Su gran ventaja es el uso de componentes reutilizables y el DOM virtual, que actualiza solo las partes de la página que cambian. Esto permite desarrollar aplicaciones web dinámicas y rápidas con un código limpio y fácil de mantener.
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
