/* Diapositiva07.jsx: Paso 1 — Instalar Docker Desktop */

const PASOS = [
  'Abre docker.com en tu navegador',
  'Descarga Docker Desktop para tu sistema operativo',
  'Instálalo y reinicia el ordenador si te lo pide',
  'Abre Docker Desktop y espera a que el motor arranque',
];

export function Diapositiva07() {
  {/* Diapositiva de instalación de Docker con pasos numerados */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16">

      {/* Etiqueta de paso */}
      <span className="inline-flex items-center bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-5 sm:mb-6">
        Paso 1
      </span>

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Instalar Docker</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-4 sm:mb-6 text-center">Descarga e instalación de Docker Desktop</h3>

      {/* Lista de pasos numerados */}
      <div className="flex flex-col gap-2 max-w-lg w-full">
        {PASOS.map((paso, i) => (
          <div key={i} className="flex items-center gap-3 bg-(--color-tag-bg) rounded-xl px-4 py-3 border border-(--color-card-border)">
            <span className="shrink-0 w-6 h-6 rounded-full bg-(--color-dark-text) text-white text-xs font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <p className="text-sm text-(--color-subtle-text)">{paso}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
