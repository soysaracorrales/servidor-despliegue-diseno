/* Diapositiva10.jsx: Paso 4 — Actualizar conexion.php */

export function Diapositiva10() {
  {/* Diapositiva con bloque de código de conexion.php */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8">

      {/* Título con etiqueta de paso */}
      <div className="text-center mb-3 sm:mb-5 shrink-0">
        <span className="inline-flex items-center bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-3">
          Paso 4
        </span>
        <h2 className="text-xl sm:text-3xl font-bold text-(--color-dark-text) mb-1 sm:mb-2">Actualizar el archivo de conexión a la base de datos</h2>
        <h3 className="text-sm sm:text-base font-medium text-(--color-mid-gray)">Se necesita actualizar el host para apuntar al contenedor de MySQL</h3>
      </div>

      {/* Bloque de código con apariencia de editor */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[60%]">
        {/* Barra superior con puntos de semáforo y nombre del archivo */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">conexion.php</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`<?php
// El host ya no es 'localhost' sino el nombre del servicio en docker-compose.yml
$host     = 'db';
$usuario  = 'usuario';
$password = 'password';
$base     = 'recetario';

$conexion = new PDO(
    "mysql:host=$host;dbname=$base;charset=utf8",
    $usuario,
    $password
);`}</pre>
      </div>

    </div>
  );
}
