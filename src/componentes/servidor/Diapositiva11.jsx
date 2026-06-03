/* Diapositiva11.jsx: Ejemplo de configuración de LiteSpeed con PHP mediante LsAPI */

export function Diapositiva11() {
  {/* Diapositiva con bloque de código de configuración LiteSpeed + PHP */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8">

      {/* Título y subtítulo */}
      <div className="text-center mb-3 sm:mb-5 shrink-0">
        <h2 className="text-xl sm:text-3xl font-bold text-(--color-dark-text) mb-1 sm:mb-2">LiteSpeed + PHP</h2>
        <h3 className="text-sm sm:text-base font-medium text-(--color-mid-gray)">Implementación con LsAPI</h3>
      </div>

      {/* Bloque de código con apariencia de editor */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[60%]">
        {/* Barra superior con puntos de semáforo y nombre del archivo */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">vhconf.conf</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`# /usr/local/lsws/conf/vhosts/mi-app/vhconf.conf
virtualHost mi-app {
  vhRoot         /var/www/mi-app
  configFile     $SERVER_ROOT/conf/vhosts/mi-app/vhconf.conf
  allowSymbolLink 1
  scriptAlias    /lsapi/ /usr/local/lsws/lsapi/

  context / {
    location      /var/www/mi-app
    allowBrowse   1
    indexFiles    index.php, index.html
  }

  context /*.php {
    type          lsapi
    handler       lsapi
    addDefaultCharset off
  }
}

# index.php — PHP ejecutado por LiteSpeed vía LsAPI
<?php
header('Content-Type: text/html; charset=UTF-8');
$servidor = $_SERVER['SERVER_SOFTWARE'] ?? 'LiteSpeed';
echo "<h1>" . htmlspecialchars($servidor) . " + PHP " . PHP_VERSION . "</h1>";
echo "<p>URI: " . htmlspecialchars($_SERVER['REQUEST_URI']) . "</p>";`}</pre>
      </div>

    </div>
  );
}
