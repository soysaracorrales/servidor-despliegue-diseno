# Servidor, Despliegue y Diseño

Presentación interactiva desarrollada como proyecto para los módulos de **Entorno Servidor**, **Despliegue de Aplicaciones Web** y **Diseño de Interfaces Web**.

🔗 **Accede a la aplicación aquí:** [servidor-despliegue-diseno.netlify.app](https://servidor-despliegue-diseno.netlify.app/)

## Secciones

- `/` - Inicio: presentación y acceso rápido a cada sección
- `/servidor` - Tipos de servidores, Apache, Nginx y LiteSpeed con ejemplos de configuración
- `/despliegue` - Qué es Docker, cómo se despliega una aplicación con Docker y por qué es útil
- `/diseno` - Vite, React, JSX y Tailwind CSS con ejemplos de código
- `/conclusion` - Reflexión final, aprendizajes, mejoras y herramientas favoritas
- `/contacto` - Formulario de contacto y perfil personal

---

## Stack

- **Vite 8** - servidor de desarrollo y empaquetado
- **React 19** - interfaz por componentes
- **Tailwind CSS 4** - estilos con clases predefinidas
- **React Router 7** - enrutamiento client-side
- **EmailJS** - envío de correos desde el formulario de contacto sin backend

---

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Previsualizar el build
npm run preview
```

---

## Variables de entorno

El formulario de contacto usa [EmailJS](https://www.emailjs.com). Para que funcione en local, crea un archivo `.env` en la raíz con estas variables:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

---

## Estructura del proyecto

```
src/
├── componentes/
│   ├── comunes/        # BarraNavegacion, PiePagina, Introduccion...
│   ├── inicio/         # Hero, TarjetasSecciones, SobreMi...
│   ├── servidor/       # Deslizador + 13 diapositivas
│   ├── despliegue/     # Deslizador + 15 diapositivas
│   ├── diseno/         # Deslizador + 10 diapositivas
│   └── conclusion/     # Deslizador + 6 diapositivas
├── paginas/            # Inicio, Servidor, Despliegue, Diseno, Conclusion, Contacto
├── recursos/           # Imágenes, logos y fuentes
├── App.jsx             # Enrutador principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales y animaciones
```

---

## Autora

**Sara Corrales** | Desarrolladora web - Cáceres, Extremadura  
[GitHub](https://github.com/soysaracorrales) · [LinkedIn](https://www.linkedin.com/in/sara-corrales-rol/) · [soysaracorralesrol@gmail.com](mailto:soysaracorralesrol@gmail.com)
