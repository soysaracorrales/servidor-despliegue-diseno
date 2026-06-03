/* SobreMiContacto.jsx: Panel lateral con foto, datos personales, redes,
habilidades técnicas, experiencia, formación e idiomas */
import sobreMi from '../../recursos/sobre-mi.jpg'

// Array de habilidades técnicas
const HABILIDADES_TECNICAS = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'PHP', 'Figma', 'Framer', 'WordPress', 'Bricks Builder', 'Divi', 'Elementor', 'GitHub', 'SEO', 'Diseño UI/UX'];

// Array de idiomas con su nombre, nivel y porcentaje para la barra
const IDIOMAS = [
  { nombre: 'Español', nivel: 'Nativo', porcentaje: 100 },
  { nombre: 'Inglés', nivel: 'B1', porcentaje: 60  },
]

export function SobreMiContacto() {
  {/* Dos columnas con foto, datos personales, redes sociales, CV y sobre mí a la izquierda, y habilidades técnicas, experiencia, formación e idiomas a la derecha */}
  return (
    <div className="lg:h-full grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-(--color-border-gray) overflow-hidden">

      {/* Columna izquierda: foto, identidad, redes, CV y sobre mí */}
      <div className="flex flex-col gap-5 p-5 lg:p-7 lg:overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none">

        {/* Foto de perfil */}
        <div className="w-full aspect-square rounded-xl overflow-hidden">
          <img src={sobreMi} alt="Sara Corrales" className="w-full h-full object-cover object-center" />
        </div>

        {/* Identidad: nombre, rol y ubicación */}
        <div>
          <h2 className="text-base font-bold text-white leading-snug">Sara Corrales</h2>
          <p className="text-(--color-muted-gray) text-xs">Desarrolladora web</p>
          <div className="flex items-center gap-1 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={11} height={11} fill="currentColor" className="text-(--color-dim-gray)">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <p className="text-(--color-dim-gray) text-xs">Cáceres, Extremadura</p>
          </div>
        </div>

        {/* Redes sociales: GitHub, LinkedIn y correo */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/soysaracorrales" target="_blank" rel="noopener noreferrer" className="text-(--color-dim-gray) hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width={15} height={15} fill="currentColor">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.5 8 244.8 8z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sara-corrales-rol/" target="_blank" rel="noopener noreferrer" className="text-(--color-dim-gray) hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} height={15} fill="currentColor">
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </a>
          <a href="mailto:soysaracorralesrol@gmail.com" className="text-(--color-dim-gray) hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={15} height={15} fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>

        {/* Botón de descarga del CV */}
        <a href="/cv-sara-corrales.pdf" download
          className="flex items-center justify-center gap-2 w-full py-2 rounded-full border border-(--color-border-gray) text-white text-xs font-medium hover:bg-(--color-border-gray) transition-colors no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={13} height={13} fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Descargar CV
        </a>

        {/* Texto de presentación personal */}
        <div className="flex flex-col gap-1.5">
          <p className="text-(--color-white-20) text-xs uppercase tracking-[0.35em]">Sobre mí</p>
          <div className="flex flex-col gap-2 text-(--color-muted-gray) text-xs leading-relaxed">
            <p>¡Hola! Soy de Trujillo, uno de los pueblos más bonitos de España, aunque ahora vivo en Cáceres.</p>
            <p>Acabo de graduarme en Desarrollo de Aplicaciones Web. Lo que más me apasiona es coger una idea y darle vida, que pase de ser un boceto en papel a algo que funciona.</p>
            <p>Me considero una persona creativa, detallista y con muchas ganas de aprender.</p>
            <p>Cuando no estoy programando, me gusta correr, escuchar música o ver alguna peli de Marvel.</p>
          </div>
        </div>

      </div>

      {/* Columna derecha: habilidades, experiencia, formación e idiomas */}
      <div className="flex flex-col gap-5 p-5 lg:p-7 border-t lg:border-t-0 border-(--color-border-gray) lg:overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none">

        {/* Habilidades técnicas como etiquetas */}
        <div className="flex flex-col gap-2">
          <p className="text-(--color-white-20) text-xs uppercase tracking-[0.35em]">Habilidades técnicas</p>
          <div className="flex flex-wrap gap-1.5">
            {/* Recorro el array de técnicas para mostrar cada etiqueta */}
            {HABILIDADES_TECNICAS.map(habilidad => (
              <span key={habilidad} className="px-2 py-0.5 rounded-full bg-white/10 text-(--color-dim-gray) text-xs font-medium">
                {habilidad}
              </span>
            ))}
          </div>
        </div>

        {/* Experiencia laboral */}
        <div className="flex flex-col gap-3.5">
          <p className="text-(--color-white-20) text-xs uppercase tracking-[0.35em]">Experiencia</p>
          <div className="border-l border-(--color-border-gray) pl-3 flex flex-col gap-1">
            <p className="text-(--color-dim-gray) text-xs uppercase tracking-widest">Rommel & Montgomery</p>
            <p className="text-white text-xs font-semibold leading-snug">Desarrolladora Web - Prácticas</p>
            <p className="text-(--color-dim-gray) text-xs leading-relaxed">
              Desarrollo y mantenimiento de sitios web, maquetación con WordPress y Bricks Builder, optimización SEO y colaboración en proyectos de diseño UI/UX.
            </p>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={10} height={10} fill="currentColor" className="text-(--color-dim-gray)">
                <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
              </svg>
              <p className="text-(--color-dim-gray) text-xs">Dic 2025 - May 2026 | Cáceres</p>
            </div>
          </div>
        </div>

        {/* Formación académica */}
        <div className="flex flex-col gap-3.5">
          <p className="text-(--color-white-20) text-xs uppercase tracking-[0.35em]">Formación</p>
          <div className="border-l border-(--color-border-gray) pl-3 flex flex-col gap-1">
            <p className="text-(--color-dim-gray) text-xs uppercase tracking-widest">IES Ágora</p>
            <p className="text-white text-xs font-semibold leading-snug">Grado Superior en Desarrollo de Aplicaciones Web</p>
            <p className="text-(--color-dim-gray) text-xs leading-relaxed">
              Aprendizaje de desarrollo web frontend y backend, bases de datos y despliegue de aplicaciones, con proyectos prácticos para aplicar los conocimientos adquiridos.
            </p>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={10} height={10} fill="currentColor" className="text-(--color-dim-gray)">
                <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
              </svg>
              <p className="text-(--color-dim-gray) text-xs">Sep 2024 - Jun 2026 | Cáceres</p>
            </div>
          </div>
        </div>

        {/* Idiomas con barra de nivel */}
        <div className="flex flex-col gap-2">
          <p className="text-(--color-white-20) text-xs uppercase tracking-[0.35em]">Idiomas</p>
          <div className="flex flex-col gap-2.5">
            {/* Recorro el array de idiomas para mostrar cada barra con su nivel */}
            {IDIOMAS.map(({ nombre, nivel, porcentaje }) => (
              <div key={nombre}>
                <div className="flex justify-between mb-1">
                  <span className="text-(--color-muted-gray) text-xs">{nombre}</span>
                  <span className="text-(--color-dim-gray) text-xs">{nivel}</span>
                </div>
                {/* Barra de fondo con relleno proporcional al porcentaje */}
                <div className="w-full h-0.5 bg-(--color-border-gray) rounded-full">
                  <div className="h-0.5 bg-white rounded-full" style={{ width: `${porcentaje}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

