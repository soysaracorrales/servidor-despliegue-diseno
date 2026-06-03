/* SobreMi.jsx: Sección de presentación personal con foto, texto,
etiquetas de habilidades y enlaces a redes sociales */
import sobreMi from '../../recursos/sobre-mi.jpg'

// Array de habilidades técnicas para mostrar como etiquetas
const HABILIDADES = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'PHP', 'Figma', 'WordPress', 'Bricks Builder', 'Divi', 'GitHub', 'SEO', 'Diseño UI/UX']

export function SobreMi() {
  {/* Sección de presentación personal en dos columnas */}
  return (
    <section className="mx-5 bg-(--color-dark-gray) rounded-[14px] px-10 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Foto de perfil */}
        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto aspect-square rounded-[10px] overflow-hidden">
          <img src={sobreMi} alt="Sara Corrales" className="w-full h-full object-cover object-center" />
        </div>

        {/* Columna de texto: nombre, descripción, habilidades y redes */}
        <div className="flex flex-col gap-6">

          {/* Nombre y rol */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-(--color-mid-gray) mb-4">Sobre mí</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1 leading-tight">Sara Corrales</h2>
            <p className="text-sm text-(--color-muted-gray)">Desarrolladora web | Cáceres, Extremadura</p>
          </div>

          {/* Texto de presentación */}
          <div className="flex flex-col gap-2 text-sm text-(--color-muted-gray) leading-relaxed">
            <p>¡Hola! Soy de Trujillo, uno de los pueblos más bonitos de España, aunque ahora vivo en Cáceres.</p>
            <p>Acabo de graduarme en Desarrollo de Aplicaciones Web. Lo que más me apasiona es coger una idea y darle vida, que pase de ser un boceto en papel a algo que funciona.</p>
          </div>

          {/* Etiquetas de habilidades técnicas */}
          <div className="flex flex-wrap gap-2">
            {HABILIDADES.map(habilidad => (
              <span key={habilidad} className="px-2.5 py-1 rounded-full bg-white/10 text-(--color-muted-gray) text-xs font-medium">{habilidad}</span>
            ))}
          </div>

          {/* Redes sociales: GitHub, LinkedIn y correo */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/soysaracorrales" target="_blank" rel="noopener noreferrer" className="text-(--color-muted-gray) hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width={18} height={18} fill="currentColor">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.5 8 244.8 8z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sara-corrales-rol/" target="_blank" rel="noopener noreferrer" className="text-(--color-muted-gray) hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={18} height={18} fill="currentColor">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
            <a href="mailto:soysaracorralesrol@gmail.com" className="text-(--color-muted-gray) hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
