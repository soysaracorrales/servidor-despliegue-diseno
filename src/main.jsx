/* main.jsx: Punto de entrada de la aplicación React, monta el componente
raíz App dentro de BrowserRouter para habilitar el enrutamiento */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './App.jsx'

// Monta la aplicación en el elemento raíz del HTML
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
