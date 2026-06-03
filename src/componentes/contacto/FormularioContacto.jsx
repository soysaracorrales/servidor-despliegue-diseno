/* FormularioContacto.jsx: Formulario de contacto con campos de nombre,
correo, asunto y mensaje, y confirmación al enviar */
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export function FormularioContacto() {
  // Estado con los valores de cada campo del formulario
  const [datosFormulario, setDatosFormulario] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  // Estado para mostrar mensaje de confirmación al enviar exitosamente
  const [enviado, setEnviado] = useState(false);
  // Estado para mostrar indicador de envío mientras se procesa el formulario
  const [enviando, setEnviando] = useState(false);
  // Estado para mostrar mensaje de error si falla el envío del formulario
  const [error, setError] = useState(false);

  // Actualiza el campo correspondiente al input que cambia
  function alCambiar(evento) {
    setDatosFormulario({ ...datosFormulario, [evento.target.name]: evento.target.value });
  }

  // Función que se ejecuta al enviar el formulario, envía los datos a EmailJS
  async function enviarFormulario(evento) {
    evento.preventDefault();
    setEnviando(true);
    setError(false);
    try {
      // Se envían los datos a EmailJS usando las variables de entorno para el servicio, plantilla y clave pública
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: datosFormulario.nombre,
          name: datosFormulario.nombre,
          email: datosFormulario.email,
          asunto: datosFormulario.asunto,
          title: datosFormulario.asunto,
          mensaje: datosFormulario.mensaje,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setEnviado(true);
    } catch {
      setError(true);
    } finally {
      setEnviando(false);
    }
  }

  {/* Contenedor del formulario centrado verticalmente */}
  return (
    <div className="h-full flex flex-col justify-center p-6 sm:p-8 md:p-12 gap-8 md:gap-10">

      {/* Encabezado del formulario */}
      <div>
        <p className="text-(--color-muted-gray) text-xs uppercase tracking-[0.3em] mb-3">Si quieres hablar conmigo</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--color-dark-text) leading-tight mb-3">
          ¿Hablamos?
        </h2>
        <p className="text-(--color-dim-gray) text-sm leading-relaxed">
          Cuéntame tu proyecto, tu idea o simplemente saluda. Estaré encantada de leerte y responderte.
        </p>
      </div>

      {error && (
        <p className="text-red-500 text-sm">Algo ha fallado. Por favor, inténtalo de nuevo.</p>
      )}

      {/* Si ya se envió, muestra confirmación; si no, muestra el formulario */}
      {enviado ? (
        <p className="text-(--color-mid-gray) text-base">¡Mensaje recibido, te responderé lo antes posible!</p>
      ) : (
        <form onSubmit={enviarFormulario} className="flex flex-col gap-8">

          {/* Fila de nombre y correo en dos columnas en pantallas grandes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col gap-1">
              <label className="text-(--color-muted-gray) text-xs uppercase tracking-widest">Nombre</label>
              <input type="text" name="nombre" placeholder="Tu nombre"
                value={datosFormulario.nombre} onChange={alCambiar} required
                className="w-full bg-transparent border-b border-(--color-dark-gray-20) text-(--color-dark-text) placeholder-(--color-muted-gray) focus:outline-none focus:border-(--color-dark-text) transition-colors duration-300 pb-2 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-(--color-muted-gray) text-xs uppercase tracking-widest">Correo</label>
              <input type="email" name="email" placeholder="tu@correo.com"
                value={datosFormulario.email} onChange={alCambiar} required
                className="w-full bg-transparent border-b border-(--color-dark-gray-20) text-(--color-dark-text) placeholder-(--color-muted-gray) focus:outline-none focus:border-(--color-dark-text) transition-colors duration-300 pb-2 text-sm" />
            </div>
          </div>

          {/* Campo de asunto */}
          <div className="flex flex-col gap-1">
            <label className="text-(--color-muted-gray) text-xs uppercase tracking-widest">Asunto</label>
            <input type="text" name="asunto" placeholder="¿De qué se trata?"
              value={datosFormulario.asunto} onChange={alCambiar} required
              className="w-full bg-transparent border-b border-(--color-dark-gray-20) text-(--color-dark-text) placeholder-(--color-muted-gray) focus:outline-none focus:border-(--color-dark-text) transition-colors duration-300 pb-2 text-sm" />
          </div>

          {/* Campo de mensaje */}
          <div className="flex flex-col gap-1">
            <label className="text-(--color-muted-gray) text-xs uppercase tracking-widest">Mensaje</label>
            <textarea name="mensaje" placeholder="Escribe aquí..." rows={4}
              value={datosFormulario.mensaje} onChange={alCambiar} required
              className="w-full bg-transparent border-b border-(--color-dark-gray-20) text-(--color-dark-text) placeholder-(--color-muted-gray) focus:outline-none focus:border-(--color-dark-text) transition-colors duration-300 pb-2 text-sm resize-none" />
          </div>

          {/* Botón de envío */}
          <button type="submit" disabled={enviando} className="flex items-center gap-2 self-start px-6 py-3 rounded-full bg-(--color-dark-text) text-white text-sm font-medium hover:bg-black transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
            {enviando ? 'Enviando...' : 'Enviar'}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>

        </form>
      )}

    </div>
  )
}
