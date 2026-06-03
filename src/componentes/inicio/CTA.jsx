/* CTA.jsx: Sección de llamada a la acción final con enlace al formulario
de contacto */
import { Link } from 'react-router-dom'

export function CTA() {
  {/* Sección de llamada a la acción centrada */}
  return (
    <section className="px-10 py-16 flex flex-col items-center text-center gap-6 max-w-6xl mx-auto">

      {/* Etiqueta de categoría */}
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-(--color-subtle-text)">Contacto</p>

      {/* Título y subtítulo */}
      <h2 className="text-2xl sm:text-3xl font-bold text-(--color-dark-text) leading-tight">¿Tienes alguna pregunta?</h2>
      <p className="text-sm text-(--color-subtle-text)">Estaré encantada de responderte.</p>

      {/* Botón de enlace al formulario de contacto */}
      <Link to="/contacto" className="rounded-lg bg-(--color-dark-text) px-7 py-3 text-sm font-medium text-white no-underline transition-opacity duration-200 hover:opacity-75">
        Escribir mensaje
      </Link>

    </section>
  )
}
