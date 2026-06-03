/* PiePagina.jsx: Pie de página con logo, información del proyecto,
enlaces de contacto y navegación a las secciones */
import { Link } from 'react-router-dom';
import logo from '../../recursos/logo.svg';

// Array de enlaces de navegación del pie de página con su ruta y etiqueta
const ENLACES = [
  {
    ruta: '/',
    etiqueta: 'Inicio'
  },
  {
    ruta: '/servidor',
    etiqueta: 'Servidor'
  },
  {
    ruta: '/despliegue',
    etiqueta: 'Despliegue'
  },
  {
    ruta: '/diseno',
    etiqueta: 'Diseño'
  },
  {
    ruta: '/conclusion',
    etiqueta: 'Conclusión'
  },
  {
    ruta: '/contacto',
    etiqueta: 'Contacto'
  },
];

export function PiePagina() {
  {/* Pie de página */}
  return (
    <footer className="mx-3 lg:mx-5 mb-5 grid grid-cols-1 md:grid-cols-4 items-start gap-6 rounded-[14px] bg-(--color-dark-gray) px-6 lg:px-10 py-7">

      {/* Logo */}
      <Link to="/" className="flex items-center no-underline">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </Link>

      {/* Información del proyecto */}
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Proyecto</p>
        <p className="text-sm text-(--color-muted-gray)">Servidor, Despliegue y Diseño</p>
        <p className="text-sm text-(--color-muted-gray)">Desarrollo Web</p>
        <p className="text-sm text-(--color-muted-gray)">2º DAW | 2026</p>
      </div>

      {/* Enlaces de contacto */}
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Contacto</p>
        <a href="mailto:soysaracorralesrol@gmail.com" className="text-sm text-(--color-muted-gray) no-underline hover:text-white transition-colors">Correo electrónico</a>
        <a href="https://www.linkedin.com/in/sara-corrales-rol/" target="_blank" rel="noopener noreferrer" className="text-sm text-(--color-muted-gray) no-underline hover:text-white transition-colors">LinkedIn</a>
        <a href="https://github.com/soysaracorrales" target="_blank" rel="noopener noreferrer" className="text-sm text-(--color-muted-gray) no-underline hover:text-white transition-colors">GitHub</a>
      </div>

      {/* Navegación por las secciones del proyecto */}
      <div className="flex flex-col gap-2">
        {/* Recorro el array de enlaces para mostrar cada sección en el pie */}
        {ENLACES.map(({ ruta, etiqueta }) => (
          <Link key={ruta} to={ruta} className="text-sm text-(--color-muted-gray) no-underline transition-colors hover:text-white">
            {etiqueta}
          </Link>
        ))}
      </div>

      {/* Barra inferior con créditos y derechos */}
      <div className="col-span-1 md:col-span-4 border-t border-(--color-border-gray) pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p className="text-xs text-(--color-muted-gray)">Hecho con cariño por Sara Corrales</p>
        <p className="text-xs text-(--color-muted-gray)">© 2026 Todos los derechos reservados</p>
      </div>

    </footer>
  );
}
