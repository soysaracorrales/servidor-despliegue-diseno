/* Portada.jsx: Sección hero de la página de inicio con título, descripción,
botones de acción y marquee de logos de tecnologías */
import { Link } from 'react-router-dom'
import logoApache from '../../recursos/logo-apache.png'
import logoNginx from '../../recursos/logo-nginx.png'
import logoReact from '../../recursos/logo-react.png'
import logoTailwind from '../../recursos/logo-tailwind.png'
import logoVite from '../../recursos/logo-vite.png'
import logoLiteSpeed from '../../recursos/logo-litespeed.png'

// Array de tecnologías que se muestran en el marquee inferior
const TECNOLOGIAS = [
  { 
    nombre: 'Apache', 
    logo: logoApache 
  },
  { 
    nombre: 'Nginx', 
    logo: logoNginx 
  },
  { 
    nombre: 'LiteSpeed', 
    logo: logoLiteSpeed },
  { 
    nombre: 'React', 
    logo: logoReact },
  { 
    nombre: 'Tailwind CSS', 
    logo: logoTailwind 
  },
  { 
    nombre: 'Vite', 
    logo: logoVite 
  },
];

export function Portada() {
  {/* Sección hero centrada con título, botones y marquee */}
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 pt-52 pb-28">

      {/* Etiqueta de categoría superior */}
      <span className="inline-flex items-center bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-8">
        2º Desarrollo de Aplicaciones Web
      </span>

      {/* Título principal */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-(--color-dark-text) mb-6 leading-[1.1] max-w-3xl">
        Servidor, Despliegue y Diseño
      </h1>

      {/* Descripción breve del proyecto */}
      <p className="max-w-xl text-sm sm:text-base text-(--color-subtle-text) leading-relaxed mb-10">
        Un recorrido completo por los tres pilares fundamentales del desarrollo web: el servidor, el despliegue y el diseño. 
      </p>

      {/* Botones de acción: explorar y contacto */}
      <div className="flex flex-wrap gap-3 justify-center mb-20">
        <a href="#secciones" className="rounded-lg bg-(--color-dark-text) px-6 py-2.5 text-sm font-medium text-white no-underline transition-opacity duration-200 hover:opacity-75">
          Explorar
        </a>
        <Link to="/contacto" className="rounded-lg border border-(--color-silver) px-6 py-2.5 text-sm font-medium text-(--color-subtle-text) no-underline transition-colors duration-200 hover:text-(--color-dark-text) hover:border-(--color-dark-text)">
          Contacto
        </Link>
      </div>

      {/* Marquee de logos con fundido en los bordes */}
      <div className="w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
        {/* Duplicamos el array de tecnologías para crear un efecto de scroll continuo sin espacios visibles */}
        <div className="flex items-center gap-16"
        style={{ animation: 'marquee 18s linear infinite', width: 'max-content' }}>
          {[...TECNOLOGIAS, ...TECNOLOGIAS, ...TECNOLOGIAS, ...TECNOLOGIAS].map(({ nombre, logo }, i) => (
            <div key={i} className="flex flex-col items-center gap-3 shrink-0">
              <img src={logo} alt={nombre} className="h-14 w-auto object-contain grayscale opacity-40" />
              <span className="text-xs text-(--color-muted-gray)">{nombre}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
