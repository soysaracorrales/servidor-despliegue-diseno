/* Diapositiva03.jsx: Tipos de servidores — clasificación según su función */

// Definición de los tipos de servidores con iconos, nombres y descripciones
const TIPOS = [
  {
    icono: 
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>,
    nombre: 'Servidor web',
    descripcion: 'Recibe peticiones HTTP/HTTPS y devuelve páginas web al cliente.',
  },
  {
    icono:
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          </svg>,
    nombre: 'Servidor de aplicaciones',
    descripcion: 'Ejecuta la lógica de negocio y actúa de intermediario entre el servidor web y la base de datos',
  },
  {
    icono:
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
          </svg>,
    nombre: 'Servidor de base de datos',
    descripcion: 'Almacena y gestiona los datos de una aplicación, respondiendo a las consultas recibidas.',
  },
  {
    icono:
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>,
    nombre: 'Servidor de archivos',
    descripcion: 'Centraliza el almacenamiento y permite el acceso a archivos desde otros dispositivos de la red.',
  },
  {
    icono:
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
          </svg>,
    nombre: 'Servidor de correo',
    descripcion: 'Gestiona el envío y recepción de correos electrónicos entre usuarios.',
  },
  {
    icono:
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>,
    nombre: 'Servidor DNS',
    descripcion: 'Traduce nombres de dominio en direcciones IP para localizar recursos en la red.',
  },
];

export function Diapositiva03() {
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16 py-2 sm:py-8">

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-4xl font-bold text-(--color-dark-text) mb-2 text-center">Tipos de servidores</h2>
      <h3 className="text-sm sm:text-lg font-medium text-(--color-mid-gray) mb-2 sm:mb-8 text-center">Clasificación según su función</h3>

      {/* Cuadrícula de tipos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-4xl w-full">
        {TIPOS.map((tipo, i) => (
          <div key={i} className="bg-(--color-tag-bg) rounded-xl p-3 sm:p-4 border border-(--color-card-border)">
            <span className="block mb-1">{tipo.icono}</span>
            <p className="font-semibold text-(--color-dark-text) text-sm mb-1">{tipo.nombre}</p>
            <p className="text-sm text-(--color-subtle-text) leading-relaxed">{tipo.descripcion}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
