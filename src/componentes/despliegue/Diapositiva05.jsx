/* Diapositiva05.jsx: ¿Cuándo usar Docker? */

// Array de casos de uso con título, descripción e icono SVG inline
const CASOS = [
  {
    titulo: 'Compartir proyectos',
    descripcion: 'Puedes enviar tu proyecto a otros con la seguridad de que funcionará igual en cualquier máquina.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    titulo: 'Un comando y listo',
    descripcion: 'Cualquiera arranca el proyecto con docker-compose up, sin instalar nada más.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    titulo: 'Producción',
    descripcion: 'Despliega en cualquier servidor con la misma configuración que usas en local.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    titulo: 'Probar sin miedo',
    descripcion: 'Experimenta y rompe cosas; si algo falla, borras el contenedor y empiezas de cero.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    ),
  },
];

export function Diapositiva05() {
  {/* Diapositiva de casos de uso en tarjetas */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">¿Cuándo usar Docker?</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">Casos de uso ideales</h3>

      {/* Tarjetas de casos, una por cada punto */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-4xl w-full">
        {CASOS.map((caso, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl p-5 border border-(--color-card-border) flex flex-col items-center text-center gap-3">
            {caso.icono}
            <p className="font-semibold text-(--color-dark-text) text-sm">{caso.titulo}</p>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">{caso.descripcion}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
