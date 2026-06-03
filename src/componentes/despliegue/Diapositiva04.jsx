/* Diapositiva04.jsx: ¿Por qué usar Docker? */

// Array de ventajas de usar Docker con su título, descripción e icono SVG inline
const VENTAJAS = [
  {
    titulo: 'Portabilidad',
    descripcion: 'Funciona igual en cualquier máquina, ya sea tu PC, un servidor o la nube.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    titulo: 'Aislamiento',
    descripcion: 'Cada contenedor va por su cuenta, si lo rompes no afecta a tu sistema ni a otros proyectos.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    titulo: 'Rapidez',
    descripcion: 'Levantar un contenedor tarda segundos, mucho más rápido que una máquina virtual.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    titulo: 'Escalabilidad',
    descripcion: 'Si tu aplicación necesita más potencia, puedes levantar más contenedores.',
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-(--color-docker-blue)">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export function Diapositiva04() {
  {/* Diapositiva de ventajas de Docker en tarjetas */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">¿Por qué usar Docker?</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">Descubre las ventajas de desplegar aplicaciones con Docker</h3>

      {/* Tarjetas de ventajas, una por cada punto */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-4xl w-full">
        {VENTAJAS.map((ventaja, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl p-5 border border-(--color-card-border) flex flex-col items-center text-center gap-3">
            {ventaja.icono}
            <p className="font-semibold text-(--color-dark-text) text-sm">{ventaja.titulo}</p>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">{ventaja.descripcion}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
