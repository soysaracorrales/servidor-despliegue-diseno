/* Diapositiva12.jsx: Comparativa de los tres servidores web */
import logoApache from '../../recursos/logo-apache.png';
import logoNginx from '../../recursos/logo-nginx.png';
import logoLiteSpeed from '../../recursos/logo-litespeed.png';

// Array de servidores con su logo, nombre, subtítulo y puntos clave
const SERVIDORES = [
  {
    logo: logoApache,
    nombre: 'Apache',
    subtitulo: 'El clásico',
    puntos: ['Configuración sencilla con .htaccess', 'Ideal para PHP y hosting compartido', 'Comunidad enorme y mucha documentación'],
  },
  {
    logo: logoNginx,
    nombre: 'Nginx',
    subtitulo: 'El más rápido',
    puntos: ['Gestiona miles de conexiones simultáneas', 'Consume muy poca memoria RAM', 'Muy usado como proxy inverso'],
  },
  {
    logo: logoLiteSpeed,
    nombre: 'LiteSpeed',
    subtitulo: 'El más eficiente',
    puntos: ['Compatible con configuraciones Apache', 'Caché integrada de alto rendimiento', 'Optimizado para WordPress y PHP'],
  },
];

export function Diapositiva12() {
  {/* Diapositiva de comparativa entre los tres servidores */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Comparativa de los tres servidores web</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">Características y rendimiento</h3>

      {/* Tarjetas de comparativa, una por servidor */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-4xl w-full">
        {/* Recorro el array de servidores para mostrar cada tarjeta */}
        {SERVIDORES.map((servidor, i) => (
          <div key={i} className="flex-1 bg-(--color-tag-bg) rounded-xl p-5 border border-(--color-card-border) flex flex-col gap-3">

            {/* Logo y nombre del servidor */}
            <div className="flex items-center gap-3">
              <img src={servidor.logo} alt={servidor.nombre} className="w-10 h-10 object-contain shrink-0" />
              <div>
                <p className="font-bold text-(--color-dark-text) text-sm">{servidor.nombre}</p>
                <p className="text-sm text-(--color-subtle-text)">{servidor.subtitulo}</p>
              </div>
            </div>

            {/* Lista de puntos clave */}
            <ul className="flex flex-col gap-1.5">
              {servidor.puntos.map((punto, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-(--color-mid-gray)">
                  <span className="shrink-0">-</span>
                  {punto}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </div>
  );
}
