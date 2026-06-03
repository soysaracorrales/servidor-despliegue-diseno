/* Diapositiva03.jsx: Mejoras que propondría para el curso */

// Array de mejoras con su etiqueta y descripción
const MEJORAS = [
  {
    etiqueta: 'Contenidos más actualizados',
    descripcion: 'Actualizar los temarios con las tecnologías y herramientas que se usan de verdad hoy en día en el mercado laboral.',
  },
  {
    etiqueta: 'Marketing digital',
    descripcion: 'Añadir nociones de SEO, analítica web y contenido para entender cómo un proyecto web llega a su audiencia.',
  },
  {
    etiqueta: 'Menos teoría, más práctica',
    descripcion: 'Menos temario y más proyectos reales desde el primer día. Se aprende mucho más haciendo que leyendo.',
  },
  {
    etiqueta: 'Diseño UX/UI',
    descripcion: 'Incluir bases de diseño de interfaces y experiencia de usuario, algo cada vez más valorado en perfiles web.',
  },
  {
    etiqueta: 'Freelance y emprendimiento',
    descripcion: 'Aprender a gestionar clientes, presupuestos y proyectos propios para quienes quieran trabajar por su cuenta.',
  },
  {
    etiqueta: 'Gestión de proyectos',
    descripcion: 'Conocer metodologías como Scrum o Kanban y herramientas de organización para trabajar en equipo de forma profesional.',
  },
];

export function Diapositiva03() {
  {/* Diapositiva de mejoras propuestas en cuadrícula */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Encabezado de la sección */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2">Las mejoras que propondría</h2>
        <p className="text-sm sm:text-base text-(--color-subtle-text)">Ideas para hacer el curso más cercano al mundo real</p>
      </div>

      {/* Cuadrícula de tarjetas de mejora */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
        {/* Recorro el array de mejoras para mostrar cada tarjeta numerada */}
        {MEJORAS.map(({ etiqueta, descripcion }, i) => (
          <div key={i} className="flex gap-4 rounded-xl border border-(--color-card-border) bg-(--color-card-bg) p-4 sm:p-5">
            {/* Número de orden de la mejora */}
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--color-dark-text) text-white text-[10px] font-bold">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-(--color-dark-text) mb-1">{etiqueta}</p>
              <p className="text-sm text-(--color-subtle-text) leading-relaxed">{descripcion}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
