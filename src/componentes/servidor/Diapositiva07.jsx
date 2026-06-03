/* Diapositiva07.jsx: Ejemplo de configuración de Apache con PHP mediante mod_php */

export function Diapositiva07() {
  {/* Diapositiva con bloque de código de configuración Apache + PHP */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8">

      {/* Título y subtítulo */}
      <div className="text-center mb-3 sm:mb-5 shrink-0">
        <h2 className="text-xl sm:text-3xl font-bold text-(--color-dark-text) mb-1 sm:mb-2">Apache + PHP</h2>
        <h3 className="text-sm sm:text-base font-medium text-(--color-mid-gray)">Implementación con mod_php</h3>
      </div>

      {/* Bloque de código con apariencia de editor */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[60%]">
        {/* Barra superior con puntos de semáforo y nombre del archivo */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">mi-app.conf</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`# /etc/apache2/sites-available/mi-app.conf
<VirtualHost *:80>
    ServerName mi-app.local
    DocumentRoot /var/www/mi-app
    DirectoryIndex index.php

    <Directory /var/www/mi-app>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>

# Activar el sitio y recargar Apache
# sudo a2ensite mi-app.conf && sudo systemctl reload apache2

# index.php — PHP ejecutado directamente por mod_php
<?php
$software = $_SERVER['SERVER_SOFTWARE'] ?? 'Apache';
header('Content-Type: text/html; charset=UTF-8');
echo "<h1>Servidor: " . htmlspecialchars($software) . "</h1>";
echo "<p>PHP " . PHP_VERSION . " — " . date('Y-m-d H:i:s') . "</p>";`}</pre>
      </div>

    </div>
  );
}
