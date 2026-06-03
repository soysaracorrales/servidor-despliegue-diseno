/* Diapositiva13.jsx: Comandos básicos de Docker */

// Array de comandos útiles con su título y comando
const COMANDOS = [
  { titulo: 'Ver contenedores', codigo: 'docker ps' },
  { titulo: 'Crear y arrancar', codigo: 'docker run' },
  { titulo: 'Construir imagen', codigo: 'docker build' },
  { titulo: 'Parar / arrancar', codigo: 'docker stop/start' },
  { titulo: 'Entrar dentro', codigo: 'docker exec -it' },
  { titulo: 'Ver logs', codigo: 'docker logs' },
];

export function Diapositiva13() {
  {/* Diapositiva de referencia rápida de comandos Docker */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Comandos básicos</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-8 text-center">Los que más vas a usar en el día a día</h3>

      {/* Cuadrícula de tres columnas */}
      <div className="grid grid-cols-3 gap-3 max-w-3xl w-full">
        {COMANDOS.map((cmd, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-(--color-card-border) flex flex-col gap-2">
            <p className="font-semibold text-(--color-dark-text) text-sm">{cmd.titulo}</p>
            <code className="text-xs font-mono bg-(--color-code-bg) text-(--color-code-text) px-3 py-2 rounded-lg">
              {cmd.codigo}
            </code>
          </div>
        ))}
      </div>

    </div>
  );
}
