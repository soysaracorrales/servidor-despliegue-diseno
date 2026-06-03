/* Contacto.jsx: Página de contacto dividida en dos columnas,
perfil personal a la izquierda y formulario a la derecha */
import { SobreMiContacto } from '../componentes/contacto/SobreMiContacto'
import { FormularioContacto } from '../componentes/contacto/FormularioContacto'

// Componente principal de la página de contacto
export function Contacto() {
  {/* Sección principal de contacto */}
  return (
    <section className="flex min-h-screen flex-col px-6 pt-24 pb-6">
      <div className="w-full flex flex-col lg:flex-row lg:min-h-[calc(100vh-110px)] gap-5">

        {/* Mitad izquierda — oscura */}
        <div className="w-full lg:w-2/5 bg-(--color-dark-gray) rounded-2xl shrink-0 overflow-hidden">
          <SobreMiContacto />
        </div>

        {/* Mitad derecha — clara */}
        <div className="flex-1 rounded-2xl border border-(--color-dark-gray) overflow-hidden">
          <FormularioContacto />
        </div>

      </div>
    </section>
  )
}
