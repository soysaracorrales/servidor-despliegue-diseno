/* SobreProyecto.jsx: Sección con tres tarjetas que explican qué es
el proyecto, su contenido y las tecnologías utilizadas */

export function SobreProyecto() {
  {/* Sección de contexto del proyecto en cuadrícula de tres tarjetas */}
  return (
    <section className="mx-5 px-10 py-16">
      <div className="max-w-6xl mx-auto text-center">

        {/* Encabezado de la sección */}
        <div className="mb-8">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-(--color-mid-gray) mb-2">Contexto</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-dark-text)">Sobre este proyecto</h2>
        </div>

        {/* Tarjetas de contexto: qué es, contenido y tecnologías */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Tarjeta: qué es el proyecto */}
          <div className="flex flex-col gap-3 bg-white/60 rounded-[10px] p-6 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-text)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="8"/>
              <line x1="12" y1="12" x2="12" y2="16"/>
            </svg>
            <span className="font-semibold text-(--color-dark-text) text-sm mb-1">Qué es</span>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">
              Presentación interactiva desarrollada como proyecto para los módulos de Entorno Servidor, Despliegue de Aplicaciones Web y Diseño de Interfaces Web.
            </p>
          </div>

          {/* Tarjeta: contenido del proyecto */}
          <div className="flex flex-col gap-3 bg-white/60 rounded-[10px] p-6 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-text)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <polyline points="3 6 4 6"/>
              <polyline points="3 12 4 12"/>
              <polyline points="3 18 4 18"/>
            </svg>
            <span className="font-semibold text-(--color-dark-text) text-sm mb-1">Contenido</span>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">
              Tres módulos del ciclo DAW: Entorno Servidor, Despliegue de Aplicaciones Web y Diseño de Interfaces Web.
            </p>
          </div>

          {/* Tarjeta: tecnologías utilizadas */}
          <div className="flex flex-col gap-3 bg-white/60 rounded-[10px] p-6 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-text)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            <span className="font-semibold text-(--color-dark-text) text-sm mb-1">Tecnologías utilizadas</span>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">
              Construida con React y Tailwind CSS, sin plantillas. Cada detalle, desde el diseño hasta el código, está hecho a mano.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
