/* Diapositiva09.jsx: Paso 3 — Crear docker-compose.yml */

export function Diapositiva09() {
  {/* Diapositiva con bloque de código del docker-compose.yml */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8">

      {/* Título con etiqueta de paso */}
      <div className="text-center mb-3 sm:mb-5 shrink-0">
        <span className="inline-flex items-center bg-(--color-dark-text) text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-3">
          Paso 3
        </span>
        <h2 className="text-xl sm:text-3xl font-bold text-(--color-dark-text) mb-1 sm:mb-2">Crear docker-compose.yml</h2>
        <h3 className="text-sm sm:text-base font-medium text-(--color-mid-gray)">En la raíz de tu carpeta</h3>
      </div>

      {/* Bloque de código con apariencia de editor */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[60%]">
        {/* Barra superior con puntos de semáforo y nombre del archivo */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">docker-compose.yml</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`services:
  web:
    build: .
    ports:
      - "8080:80"
    depends_on:
      db:
        condition: service_healthy

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: ""
      MYSQL_ROOT_HOST: "%"
      MYSQL_DATABASE: mirecetario
      MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
    volumes:
      - ./base-datos/db.sql:/docker-entrypoint-initdb.d/db.sql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "--silent"]
      interval: 5s
      timeout: 5s
      retries: 10`}</pre>
      </div>

    </div>
  );
}
