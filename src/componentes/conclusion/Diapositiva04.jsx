/* Diapositiva04.jsx: Herramientas favoritas del curso */

// Array de herramientas con su nombre y nivel de dominio en porcentaje
const HERRAMIENTAS = [
  { nombre: 'React', nivel: 90 },
  { nombre: 'Tailwind CSS', nivel: 90 },
  { nombre: 'Vite', nivel: 80 },
  { nombre: 'Supabase', nivel: 65 },
  { nombre: 'Netlify', nivel: 70 },
  { nombre: 'Figma', nivel: 80 },
  { nombre: 'VS Code', nivel: 90 },
  { nombre: 'Git Hub', nivel: 90 },
  { nombre: 'WordPress', nivel: 90 },
  { nombre: 'Bricks Builder', nivel: 80 },
];

export function Diapositiva04() {
  {/* Diapositiva de herramientas con barras de nivel */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Encabezado de la sección */}
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2">Mis herramientas favoritas</h2>
        <p className="text-sm sm:text-base text-(--color-subtle-text)">Las tecnologías con las que más disfruté trabajando</p>
      </div>

      {/* Lista de barras de progreso por herramienta */}
      <div className="flex flex-col gap-3 w-full max-w-xl">
        {/* Recorro el array de herramientas para mostrar cada barra con su nivel */}
        {HERRAMIENTAS.map(({ nombre, nivel }, i) => (
          <div key={i} className="flex items-center gap-4">
            {/* Nombre de la herramienta alineado a la derecha */}
            <span className="w-28 text-right text-xs sm:text-sm font-semibold text-(--color-dark-text) shrink-0">{nombre}</span>
            {/* Barra de fondo con relleno proporcional al nivel */}
            <div className="flex-1 h-2.5 rounded-full bg-(--color-progress-bg)">
              <div
                className="h-2.5 rounded-full bg-(--color-dark-text)"
                style={{ width: `${nivel}%` }}
              />
            </div>
            {/* Porcentaje numérico del nivel */}
            <span className="w-8 text-xs text-(--color-subtle-text) font-mono shrink-0">{nivel}%</span>
          </div>
        ))}
      </div>

    </div>
  );
}
