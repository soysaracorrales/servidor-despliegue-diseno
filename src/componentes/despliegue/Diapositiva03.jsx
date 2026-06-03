/* Diapositiva03.jsx: Conceptos clave de Docker */

// Array de términos y definiciones básicas de Docker
const CONCEPTOS = [
  { 
    titulo: 'Imagen', 
    descripcion: 'Plantilla que contiene todo lo necesario para ejecutar una aplicación.'
  },
  { 
    titulo: 'Contenedor', 
    descripcion: 'Una imagen en ejecución, aislado del resto del sistema y puedes tener varios a la vez.'
  },
  { 
    titulo: 'Dockerfile', 
    descripcion: 'El archivo donde escribes las instrucciones para crear tu imagen personalizada.'
  },
  { 
    titulo: 'Docker Hub', 
    descripcion: 'Repositorio online donde se guardan y descargan imágenes públicas.' 
  },
  { 
    titulo: 'Volumen', 
    descripcion: 'Carpeta compartida entre tu ordenador y el contenedor para que los datos no se pierdan al pararlo.'
  },
  { 
    titulo: 'Docker Compose', 
    descripcion: 'Herramienta para arrancar varios contenedores a la vez con un solo comando.' 
  },
];

export function Diapositiva03() {
  {/* Diapositiva de conceptos clave de Docker */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Conceptos clave</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">Palabras que vas a escuchar todo el tiempo</h3>

      {/* Cuadrícula de tres columnas */}
      <div className="grid grid-cols-3 gap-3 max-w-4xl w-full">
        {CONCEPTOS.map((concepto, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-(--color-card-border) flex flex-col gap-2">
            <p className="font-semibold text-(--color-dark-text) text-sm">{concepto.titulo}</p>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">{concepto.descripcion}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
