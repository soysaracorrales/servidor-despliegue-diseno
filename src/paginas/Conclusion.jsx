/* Conclusion.jsx: Página de conclusión que muestra el deslizador
con el resumen final del proyecto */
import { Deslizador } from '../componentes/conclusion/Deslizador'

// Componente principal de la página de conclusión
export function Conclusion() {
  {/* Sección principal de conclusión */}
  return (
    <section className="flex min-h-screen flex-col px-6 pt-24 pb-6">
      {/* Deslizador con el contenido de conclusión */}
      <Deslizador />
    </section>
  )
}

