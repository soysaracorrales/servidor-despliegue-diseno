/* Diapositiva13.jsx: ¿Cuál servidor elegir? — guía por caso de uso */

// Array de casos de uso con su situación, recomendación, razón y etiqueta
const CASOS = [
  {
    situacion: 'Empiezas un proyecto con PHP',
    recomendacion: 'Apache',
    razon: 'Es el más fácil de configurar con PHP, funciona con XAMPP en local y cualquier hosting compartido lo incluye por defecto.',
    etiqueta: 'Uso general',
  },
  {
    situacion: 'Tu sitio recibe mucho tráfico',
    recomendacion: 'Nginx',
    razon: 'Es más eficiente gestionando muchas conexiones simultáneas, consume menos recursos y mejora la velocidad de carga en sitios con mucho tráfico.',
    etiqueta: 'Alto rendimiento',
  },
  {
    situacion: 'Montas un WordPress o CMS similar',
    recomendacion: 'LiteSpeed',
    razon: 'Es compatible con configuraciones Apache, tiene caché integrada de alto rendimiento y está optimizado para WordPress.',
    etiqueta: 'WordPress / CMS',
  },
];

export function Diapositiva13() {
  {/* Diapositiva de guía para elegir servidor según el caso de uso */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">¿Cuál elegir?</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">Depende de tu caso de uso</h3>

      {/* Tarjetas de casos de uso, una por escenario */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-4xl w-full">
        {/* Recorro el array de casos para mostrar cada tarjeta */}
        {CASOS.map((caso, i) => (
          <div key={i} className="flex-1 bg-(--color-tag-bg) rounded-xl p-5 border border-(--color-card-border) flex flex-col gap-3">

            {/* Etiqueta de categoría */}
            <span className="self-start bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
              {caso.etiqueta}
            </span>

            {/* Situación y explicación */}
            <p className="text-sm font-semibold text-(--color-dark-text)">{caso.situacion}</p>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">{caso.razon}</p>

            {/* Recomendación final */}
            <p className="text-sm font-bold text-(--color-dark-text) mt-auto">
              Usa <span className="underline underline-offset-2">{caso.recomendacion}</span>
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}
