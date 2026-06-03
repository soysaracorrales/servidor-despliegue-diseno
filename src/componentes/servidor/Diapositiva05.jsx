/* Diapositiva05.jsx: Servidores web más conocidos — Apache, Nginx y LiteSpeed */
import logoApache from '../../recursos/logo-apache.png';
import logoNginx from '../../recursos/logo-nginx.png';
import logoLiteSpeed from '../../recursos/logo-litespeed.png';

// Los tres servidores web más utilizados con su logo, nombre y descripción resumida
const SERVIDORES = [
  { 
    logo: logoApache,    
    nombre: 'Apache HTTP Server', 
    descripcion: 'El servidor web más usado del mundo. Flexible, fácil de configurar y presente en casi cualquier hosting con PHP.' 
  },
  { 
    logo: logoNginx,     
    nombre: 'Nginx',              
    descripcion: 'Super rápido y ligero. Se usa como servidor web principal y también como proxy inverso.' 
  },
  { logo: logoLiteSpeed, 
    nombre: 'LiteSpeed',          
    descripcion: 'Muy rápido y compatible con Apache. Es la opción favorita en hostings que buscan alto rendimiento.' 
  },
];

export function Diapositiva05() {
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Servidores web más conocidos</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-8 text-center">Más utilizados hoy en día</h3>
      <p className="max-w-2xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-3 sm:mb-5 mx-auto text-center">
        Existen varios servidores web muy populares, cada uno pensado para distintas necesidades y situaciones.
      </p>

      {/* Tarjetas de servidores */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-4xl w-full">
        {SERVIDORES.map((servidor, i) => (
          <div key={i} className="flex-1 bg-(--color-tag-bg) rounded-xl p-5 border border-(--color-card-border)">

            {/* Logo pequeño y nombre */}
            <div className="flex items-center gap-2 mb-2">
              <img src={servidor.logo} alt={servidor.nombre} className="w-10 h-10 object-contain" />
              <p className="font-semibold text-(--color-dark-text) text-sm">{servidor.nombre}</p>
            </div>

            {/* Descripción */}
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">{servidor.descripcion}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
