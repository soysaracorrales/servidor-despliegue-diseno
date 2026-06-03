/* BarraNav.jsx: Barra de navegación fija con enlaces a las secciones del proyecto
y menú desplegable para dispositivos móviles */
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../recursos/logo.svg'

// Array de enlaces de navegación con su ruta y etiqueta
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
    etiqueta: 'Despliegue' }
    ,
  { 
    ruta: '/diseno',     
    etiqueta: 'Diseño'     
  },
  { 
    ruta: '/conclusion', 
    etiqueta: 'Conclusión' 
  },
]

export function BarraNavegacion() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [abierto, setAbierto] = useState(false);

  // Función para cerrar el menú móvil al hacer clic en un enlace o en el logo
  function cerrarMenu() {
    setAbierto(false);
  }

  // Función para alternar el estado abierto/cerrado del menú móvil
  function alternarMenu() {
    setAbierto(!abierto);
  }

  {/* Barra de navegación */}
  return (
    <nav className="fixed top-5 left-5 right-5 z-1000 rounded-[14px] bg-(--color-dark-gray) px-6 py-3.5">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center" onClick={cerrarMenu}>
          <img src={logo} alt="Logo" className="h-9 w-auto" />
        </Link>

        {/* Navegación en escritorio */}
        <div className="hidden md:flex items-center gap-2">

          {/* Lista de enlaces */}
          <ul className="m-0 flex list-none gap-0.5 p-0">
            {/* Recorro el array de enlaces para mostrar cada sección del proyecto */}
            {ENLACES.map(({ ruta, etiqueta }) => (
              <li key={ruta}>
                <NavLink to={ruta} end
                  /* Si está activo, se resalta el enlace con un fondo y texto blanco, si no, se muestra en gris */
                  className={({ estaActivo }) =>
                    `flex items-center gap-1.5 rounded-lg px-3 py-1.75 text-sm no-underline transition-colors duration-200 hover:bg-(--color-mid-gray-50) hover:text-white ${
                      estaActivo ? 'bg-(--color-mid-gray-50) text-white' : 'text-(--color-muted-gray)'
                    }`
                  }>
                  {etiqueta}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Botón de contacto */}
          <div className="ml-2">
            <Link to="/contacto" className="ml-1 rounded-lg bg-white px-4.5 py-2 text-sm font-medium text-(--color-dark-text) no-underline transition-opacity duration-200 hover:opacity-85">
              Contacto
            </Link>
          </div>
        </div>

        {/* Botón de menú hamburguesa */}
        <button onClick={alternarMenu} className="md:hidden cursor-pointer text-(--color-muted-gray) hover:text-white transition-colors">

          {abierto ? (
            /* Icono de X */
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            /* Icono de hamburguesa */
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {abierto && (
        <div className="md:hidden border-t border-(--color-border-gray) mt-3 pt-3 flex flex-col gap-1">
          {/* Recorro el array de enlaces para mostrar cada sección en el menú móvil */}
          {ENLACES.map(({ ruta, etiqueta }) => (
            <NavLink key={ruta} to={ruta} end onClick={cerrarMenu}
              /* Si está activo, se resalta el enlace con un fondo y texto blanco, si no, se muestra en gris */
              className={({ estaActivo }) =>
                `rounded-lg px-3 py-2 text-sm no-underline transition-colors duration-200 hover:bg-(--color-mid-gray-50) hover:text-white ${
                  estaActivo ? 'bg-(--color-mid-gray-50) text-white' : 'text-(--color-muted-gray)'
                }`
              }>
              {etiqueta}
            </NavLink>
          ))}

          {/* Enlace de contacto al final del menú móvil */}
          <Link to="/contacto" onClick={cerrarMenu} className="mt-1 rounded-lg bg-white px-3 py-2 text-sm font-medium text-(--color-dark-text) no-underline text-center transition-opacity duration-200 hover:opacity-85">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  )
}

