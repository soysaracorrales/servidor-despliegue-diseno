/* Diapositiva10.jsx: ¿Por qué Vite + React + Tailwind? */
import logoVite from '../../recursos/logo-vite.png';
import logoReact from '../../recursos/logo-react.png';
import logoTailwind from '../../recursos/logo-tailwind.png';

// Array de herramientas con su logo, nombre y descripción
const HERRAMIENTAS = [
  {
    logo: logoVite,
    nombre: 'Vite',
    descripcion: 'Servidor de desarrollo ultrarrápido con recarga instantánea.',
  },
  {
    logo: logoReact,
    nombre: 'React',
    descripcion: 'Interfaz por componentes reutilizables con DOM virtual.',
  },
  {
    logo: logoTailwind,
    nombre: 'Tailwind CSS',
    descripcion: 'Estilos con clases predefinidas directamente en el JSX.',
  },
];

export function Diapositiva10() {
  {/* Diapositiva de cierre con las tres herramientas del stack */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">¿Por qué Vite + React + Tailwind?</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">El stack frontend más popular del momento</h3>

      {/* Tarjetas de cada herramienta del stack */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-4xl w-full">
        {/* Recorro el array de herramientas para mostrar cada tarjeta */}
        {HERRAMIENTAS.map((herramienta, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl p-5 border border-(--color-card-border) flex flex-col items-center text-center gap-3">
            <img src={herramienta.logo} alt={herramienta.nombre} className="w-12 h-12 object-contain" />
            <p className="font-semibold text-(--color-dark-text) text-sm">{herramienta.nombre}</p>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">{herramienta.descripcion}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
