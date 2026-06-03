/* Diapositiva02.jsx: Lista de los principales aprendizajes del curso */

// Array de aprendizajes con su etiqueta y descripción
const APRENDIZAJES = [
  {
    etiqueta: 'Despliegue de aplicaciones web',
    descripcion: 'Aprender a desplegar aplicaciones con XAMPP y Apache, configurar servidores y entender cómo funciona el entorno de producción.',
  },
  {
    etiqueta: 'Diseño de interfaces con React y Tailwind',
    descripcion: 'Construir interfaces atractivas y responsive usando componentes React y utilidades de Tailwind CSS.',
  },
  {
    etiqueta: 'Gestión de bases de datos con Supabase',
    descripcion: 'Diseñar bases de datos relacionales e integrarlas con aplicaciones web usando Supabase.',
  },
  {
    etiqueta: 'Control de versiones con Git',
    descripcion: 'Gestionar el código con Git y GitHub: ramas, commits y pull requests para trabajar de forma eficiente.',
  },
  {
    etiqueta: 'Desarrollo de proyectos reales de principio a fin',
    descripcion: 'Llevar un proyecto desde la idea hasta el despliegue, pasando por diseño, desarrollo y pruebas.',
  },
  {
    etiqueta: 'Trabajo con WordPress y Bricks Builder',
    descripcion: 'Crear y personalizar sitios web con WordPress usando Bricks Builder para el diseño visual.',
  },
];

export function Diapositiva02() {
  {/* Diapositiva de aprendizajes en cuadrícula */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Encabezado de la sección */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2">Lo que he aprendido</h2>
        <p className="text-sm sm:text-base text-(--color-subtle-text)">Lo más importante que me llevo de este año de 2º DAW</p>
      </div>

      {/* Cuadrícula de tarjetas de aprendizaje */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
        {/* Recorro el array de aprendizajes para mostrar cada tarjeta numerada */}
        {APRENDIZAJES.map(({ etiqueta, descripcion }, i) => (
          <div key={i} className="flex gap-4 rounded-xl border border-(--color-card-border) bg-(--color-card-bg) p-4 sm:p-5">
            {/* Número de orden del aprendizaje */}
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
