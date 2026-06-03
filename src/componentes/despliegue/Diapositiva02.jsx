/* Diapositiva02.jsx: ¿Qué es Docker? */
import logoDocker from '../../recursos/logo-docker.png';

// Array de características clave de Docker para mostrar como etiquetas
const CARACTERISTICAS = ['Contenedores', 'Ligero', 'Portable', 'Multiplataforma'];

export function Diapositiva02() {
  {/* Diapositiva de presentación de Docker */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Logo de Docker */}
      <img src={logoDocker} alt="Docker" className="w-20 h-20 object-contain mb-4 sm:mb-6" />

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">¿Qué es Docker?</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-6 text-center">Empaqueta y despliega tu aplicación de forma sencilla</h3>

      {/* Descripción */}
      <p className="max-w-2xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-3 sm:mb-5 mx-auto text-center">
        Docker es una plataforma que empaqueta tu aplicación y todas sus dependencias en un contenedor.
        Esto hace que tu aplicación sea fácil de desplegar y ejecutar en cualquier entorno sin preocuparte por las configuraciones o instalaciones previas.
      </p>

      {/* Etiquetas de características */}
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
