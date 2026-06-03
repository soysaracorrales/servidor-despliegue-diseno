/* App.jsx: Componente raíz que monta todos los componentes y define las rutas de la aplicación */
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Introduccion } from './componentes/comunes/Introduccion'
import { BarraNavegacion } from './componentes/comunes/BarraNavegacion'
import { PiePagina } from './componentes/comunes/PiePagina'
import { BotonFlotanteGithub } from './componentes/comunes/BotonFlotanteGithub'
import { BotonVolverArriba } from './componentes/comunes/BotonVolverArriba'
import { Inicio } from './paginas/Inicio'
import { Despliegue } from './paginas/Despliegue'
import { Diseno } from './paginas/Diseno'
import { Servidor } from './paginas/Servidor'
import { Conclusion } from './paginas/Conclusion'
import { Contacto } from './paginas/Contacto'

export function App() {
  // Estado para controlar si la introducción animada ya ha terminado
  const [introTerminada, setIntroTerminada] = useState(false);

  {/* Estructura principal */}
  return (
    <>
      {/* Pantalla de introducción animada, se oculta al terminar */}
      {!introTerminada && <Introduccion alTerminar={() => setIntroTerminada(true)} />}

      {/* Barra de navegación fija */}
      <BarraNavegacion />

      {/* Botón flotante de GitHub */}
      <BotonFlotanteGithub />

      {/* Botón para volver al inicio de la página */}
      <BotonVolverArriba />

      {/* Rutas de la aplicación, una por sección */}
      <main>
        <Routes>
          <Route path="/" element={<Inicio />}     />
          <Route path="/servidor" element={<Servidor />}   />
          <Route path="/despliegue" element={<Despliegue />} />
          <Route path="/diseno" element={<Diseno />}     />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/contacto" element={<Contacto />}   />
        </Routes>
      </main>

      {/* Pie de página */}
      <PiePagina />
    </>
  )
}

