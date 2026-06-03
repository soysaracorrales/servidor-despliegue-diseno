/* Inicio.jsx: Página de inicio con portada, que encontrás aquí, 
sobre el proyecto, sobre mí y llamada a la acción */
import { Portada } from '../componentes/inicio/Portada'
import { QueEncontrasAqui } from '../componentes/inicio/QueEncontrasAqui'
import { SobreProyecto } from '../componentes/inicio/SobreProyecto'
import { SobreMi } from '../componentes/inicio/SobreMi'
import { CTA } from '../componentes/inicio/CTA'

// Componente principal de la página de inicio
export function Inicio() {
  {/* Página de inicio compuesta por secciones apiladas */}
  return (
    <>
      {/* Sección principal de portada con título y descripción del proyecto */}
      <Portada />
      {/* Sección que describe qué se encuentra en el proyecto, con íconos y texto explicativo */}
      <QueEncontrasAqui />
      {/* Descripción del proyecto */}
      <SobreProyecto />
      {/* Presentación personal */}
      <SobreMi />
      {/* Llamada a la acción final */}
      <CTA />
    </>
  )
}
