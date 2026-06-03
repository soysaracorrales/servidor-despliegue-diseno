/* Despliegue.jsx: Página de despliegue que muestra el deslizador
con las diapositivas sobre el proceso de despliegue de aplicaciones */
import { Deslizador } from '../componentes/despliegue/Deslizador'

// Componente principal de la página de despliegue
export function Despliegue() {
  {/* Sección principal de despliegue */}
  return (
    <section className="flex min-h-screen flex-col px-6 pt-24 pb-6">
      {/* Deslizador con el contenido del módulo de despliegue */}
      <Deslizador />
    </section>
  )
}

