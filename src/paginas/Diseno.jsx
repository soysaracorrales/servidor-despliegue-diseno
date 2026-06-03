/* Diseno.jsx: Página de diseño que muestra el deslizador
con las diapositivas sobre Vite, React y Tailwind CSS */
import { Deslizador } from '../componentes/diseno/Deslizador'

// Componente principal de la página de diseño
export function Diseno() {
  {/* Sección principal de diseño */}
  return (
    <section className="flex min-h-screen flex-col px-6 pt-24 pb-6">
      {/* Deslizador con el contenido del módulo de diseño */}
      <Deslizador />
    </section>
  )
}