/* Diapositiva06.jsx: Requisitos previos para usar Docker */

// Array de requisitos con título, descripción e icono SVG inline
const REQUISITOS = [
  {
    titulo: 'Sistema operativo compatible',
    descripcion: 'Windows 10/11, macOS o Linux. Docker funciona en los tres.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    titulo: 'Tener Docker Desktop instalado',
    descripcion: 'La app oficial que incluye todo lo necesario para empezar.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    titulo: 'Conocimientos básicos de terminal',
    descripcion: 'Saber moverte por la consola y ejecutar comandos simples.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    titulo: 'Se necesita activar WSL 2 en Windows',
    descripcion: 'En Windows, se necesita tener WSL 2 (subsistema de Linux) activado.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
];

export function Diapositiva06() {
  {/* Diapositiva de requisitos previos en tarjetas */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Requisitos previos</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">Lo que necesitas antes de empezar</h3>

      {/* Tarjetas de requisitos, una por cada elemento */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-4xl w-full">
        {REQUISITOS.map((requisito, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl p-5 border border-(--color-card-border) flex flex-col items-center text-center gap-3">
            {requisito.icono}
            <p className="font-semibold text-(--color-dark-text) text-sm">{requisito.titulo}</p>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">{requisito.descripcion}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
