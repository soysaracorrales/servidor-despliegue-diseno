/* Diapositiva14.jsx: ¿Y si quiero hacerlo en otro PC? Solo 3 pasos */

// Array de pasos para reproducir el proyecto en otro PC
const PASOS = [
  {
    titulo: 'Instalar Docker Desktop',
    descripcion: 'Descárgatelo e instálalo desde la web oficial de Docker.',
  },
  {
    titulo: 'Copiar la carpeta del proyecto',
    descripcion: 'Con todos los archivos: PHP, SQL, Dockerfile y docker-compose.yml.',
  },
  {
    titulo: 'Ejecutar un solo comando',
    descripcion: 'Abre la terminal en esa carpeta y escribe: ',
    codigo: 'docker compose up --build',
  },
];

export function Diapositiva14() {
  {/* Diapositiva de cierre con los 3 pasos para otro PC */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">¿Y cómo puedo usarlo en otro ordenador?</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">Solo 3 pasos. Sin instalar PHP. Sin instalar MySQL. Sin configurar nada.</h3>

      {/* Tarjetas de pasos, una por cada acción */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-4xl w-full">
        {PASOS.map((paso, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl p-5 border border-(--color-card-border) flex flex-col gap-3">

            <div className="flex items-center gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-(--color-dark-text) text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="font-semibold text-(--color-dark-text) text-sm">{paso.titulo}</p>
            </div>

            <p className="text-sm text-(--color-subtle-text) leading-relaxed">{paso.descripcion}</p>

            {paso.codigo && (
              <code className="text-xs font-mono bg-(--color-code-bg) text-(--color-code-text) px-3 py-2 rounded-lg">
                {paso.codigo}
              </code>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}
