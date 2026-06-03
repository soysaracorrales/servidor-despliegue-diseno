/* Diapositiva04.jsx: Servidor web — qué es y cómo funciona */
import imagenServidorWeb from '../../recursos/servidor-web.png';

// Características clave del servidor web para destacar en etiquetas
const CARACTERISTICAS = ['HTTP/HTTPS', 'Peticiones', 'Respuestas'];

export function Diapositiva04() {
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16 py-4 sm:py-8 gap-3 sm:gap-5 text-center relative overflow-hidden">

      {/* Texto principal */}
      <div className="z-10">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-(--color-dark-text) mb-2 sm:mb-3">Servidor Web</h2>
        <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-8 text-center">¿Qué es y cómo funciona?</h3>
        <p className="max-w-2xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-3 sm:mb-5 mx-auto">
          El servidor web es el encargado de recibir las peticiones de los clientes a través del protocolo HTTP o HTTPS y devolver el contenido solicitado, normalmente páginas web, imágenes o archivos.
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

      {/* Imagen ilustrativa */}
      <img src={imagenServidorWeb} alt="Servidor web" className="w-full max-w-2xl h-28 sm:h-54 object-cover rounded-2xl border border-(--color-card-border) z-10" />

    </div>
  );
}
