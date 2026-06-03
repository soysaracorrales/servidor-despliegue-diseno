/* Diapositiva15.jsx: Resumen visual de los pasos del módulo */

// Array con los 6 pasos del módulo en orden
const PASOS = [
  { numero: 1, titulo: 'Instalar Docker Desktop' },
  { numero: 2, titulo: 'Crear el Dockerfile' },
  { numero: 3, titulo: 'Crear docker-compose.yml' },
  { numero: 4, titulo: 'Actualizar el archivo de conexión a la base de datos' },
  { numero: 5, titulo: 'Arrancar el proyecto' },
  { numero: 6, titulo: 'Ver tu proyecto en el navegador' },
];

export function Diapositiva15() {
  {/* Diapositiva de resumen visual con todos los pasos */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Resumen de pasos</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">Los 6 pasos para desplegar con Docker</h3>

      {/* Lista de pasos en dos columnas */}
      <div className="grid grid-cols-2 gap-2 max-w-2xl w-full">
        {PASOS.map((paso) => (
          <div key={paso.numero} className="flex items-center gap-3 bg-(--color-tag-bg) rounded-xl px-4 py-3 border border-(--color-card-border)">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--color-dark-text) text-white text-xs font-bold flex items-center justify-center">
              {paso.numero}
            </span>
            <p className="text-sm text-(--color-subtle-text)">{paso.titulo}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
