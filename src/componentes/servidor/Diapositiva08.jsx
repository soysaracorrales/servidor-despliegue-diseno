/* Diapositiva08.jsx: Nginx — velocidad y bajo consumo de recursos */
import logoNginx from '../../recursos/logo-nginx.png';

// Características clave de Nginx para destacar en la presentación
const CARACTERISTICAS = ['Alto rendimiento', 'Proxy inverso', 'Bajo consumo'];

export function Diapositiva08() {
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Logo de Nginx */}
      <img src={logoNginx} alt="Nginx" className="w-20 h-20 object-contain mb-4 sm:mb-6" />

      {/* Título */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Nginx</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-6 text-center">Velocidad y bajo consumo de recursos</h3>

      {/* Descripción */}
      <p className="max-w-2xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-3 sm:mb-5 mx-auto text-center">
        Nació como alternativa a Apache para solucionar problemas de rendimiento con muchas conexiones simultáneas. Es extremadamente rápido, consume muy pocos recursos y se ha convertido en uno de los servidores más usados del mundo, especialmente en sitios con mucho tráfico.
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
