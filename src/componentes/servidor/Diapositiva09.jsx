/* Diapositiva09.jsx: Ejemplo de configuración de Nginx con PHP-FPM mediante FastCGI */

export function Diapositiva09() {
  {/* Diapositiva con bloque de código de configuración Nginx + PHP-FPM */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8">

      {/* Título y subtítulo */}
      <div className="text-center mb-3 sm:mb-5 shrink-0">
        <h2 className="text-xl sm:text-3xl font-bold text-(--color-dark-text) mb-1 sm:mb-2">Nginx + PHP-FPM</h2>
        <h3 className="text-sm sm:text-base font-medium text-(--color-mid-gray)">Implementación con FastCGI</h3>
      </div>

      {/* Bloque de código con apariencia de editor */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-(--color-code-border) flex flex-col bg-(--color-code-bg) max-h-[60%]">
        {/* Barra superior con puntos de semáforo y nombre del archivo */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-(--color-near-black) border-b border-(--color-code-border) shrink-0">
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="w-3 h-3 rounded-full bg-white" />
          <span className="ml-2 text-xs text-(--color-code-dim) font-mono">nginx.conf</span>
        </div>
        <pre className="overflow-auto p-4 text-xs font-mono text-(--color-code-text) leading-relaxed">{`# /etc/nginx/sites-available/mi-app
server {
    listen 80;
    server_name mi-app.local;
    root /var/www/mi-app;
    index index.php;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \\.php$ {
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}

# index.php — PHP ejecutado por el proceso PHP-FPM
<?php
header('Content-Type: text/html; charset=UTF-8');
echo "<h1>Nginx + PHP-FPM " . PHP_VERSION . "</h1>";
echo "<p>URI: " . htmlspecialchars($_SERVER['REQUEST_URI']) . "</p>";`}</pre>
      </div>

    </div>
  );
}
