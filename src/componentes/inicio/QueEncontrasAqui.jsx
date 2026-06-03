/* QueEncontrasAqui.jsx: Sección con tarjetas de acceso rápido
a cada una de las cuatro secciones del proyecto */
import { Link } from 'react-router-dom'

// Array de secciones con su ruta, número, título y descripción
const SECCIONES = [
  {
    ruta: '/servidor',
    numero: '01',
    titulo: 'Servidor',
    descripcion: 'Qué son los servidores web, sus principales tipos y cómo implementarlos con PHP.',
  },
  {
    ruta: '/despliegue',
    numero: '02',
    titulo: 'Despliegue',
    descripcion: 'Qué es Docker, cómo se despliega una aplicación con Docker y por qué es útil.',
  },
  {
    ruta: '/diseno',
    numero: '03',
    titulo: 'Diseño',
    descripcion: 'Con qué tecnologías se ha construido este proyecto y por qué se han elegido.',
  },
  {
    ruta: '/conclusion',
    numero: '04',
    titulo: 'Conclusión',
    descripcion: 'Reflexión final sobre lo aprendido a lo largo de 2º DAW y cómo seguir avanzando en el futuro.',
  },
]

export function QueEncontrasAqui() {
  {/* Sección de tarjetas de navegación a las secciones */}
  return (
    <section id="secciones" className="mx-3 sm:mx-5 bg-(--color-dark-gray) rounded-[14px] px-10 py-16">

      {/* Encabezado de la sección */}
      <div className="mb-6 sm:mb-8 text-center">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-(--color-mid-gray) mb-2">Contenido</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Qué encontrarás aquí</h2>
      </div>

      {/* Cuadrícula de tarjetas, una por sección */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
        {/* Recorro el array de secciones para mostrar cada tarjeta con enlace */}
        {SECCIONES.map(({ ruta, numero, titulo, descripcion }) => (
          <Link key={ruta} to={ruta} className="group flex flex-col gap-3 bg-(--color-near-black) rounded-[10px] p-5 no-underline transition-colors duration-200 hover:bg-(--color-code-border)">
            {/* Número de orden de la sección */}
            <span className="text-xs font-semibold text-(--color-mid-gray) tracking-[0.2em]">{numero}</span>
            <h3 className="text-sm font-semibold text-white m-0">{titulo}</h3>
            <p className="text-sm text-(--color-muted-gray) leading-relaxed m-0 flex-1">{descripcion}</p>
            <span className="self-start mt-1 rounded-lg bg-white px-3.5 py-1.5 text-xs font-medium text-(--color-dark-text) transition-opacity duration-200 group-hover:opacity-75">Ver más</span>
          </Link>
        ))}
      </div>

    </section>
  )
}
