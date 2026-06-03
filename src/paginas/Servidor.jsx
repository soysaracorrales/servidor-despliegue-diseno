/* Servidor.jsx: Página de servidores que muestra el deslizador
con las diapositivas sobre tipos y configuración de servidores web */
import { Deslizador } from '../componentes/servidor/Deslizador'

// Componente principal de la página de servidores
export function Servidor() {
  {/* Sección principal de servidores */}
  return (
    <section className="flex min-h-screen flex-col px-6 pt-24 pb-6">
      {/* Deslizador con el contenido del módulo de servidores */}
      <Deslizador />
    </section>
  )
}

