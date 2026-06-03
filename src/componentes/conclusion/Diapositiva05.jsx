/* Diapositiva05.jsx: Reflexión personal sobre el año de curso */

export function Diapositiva05() {
  {/* Diapositiva de reflexión personal con tarjeta oscura centrada */}
  return (
    <div className="min-w-full h-full flex flex-col items-center justify-center px-6 sm:px-16 text-center">

      {/* Tarjeta de reflexión con fondo oscuro */}
      <div className="bg-(--color-dark-text) rounded-2xl px-8 py-10 sm:px-12 sm:py-12 max-w-xl w-full">

        {/* Encabezado de la tarjeta */}
        <div className="mb-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Reflexión personal</h2>
          <p className="text-xs sm:text-sm text-(--color-muted-gray)">Lo que me llevo más allá de los apuntes</p>
        </div>

        {/* Párrafo sobre las personas conocidas durante el curso */}
        <p className="text-sm text-(--color-muted-gray) leading-relaxed">
          Este año me llevo muchas cosas, pero lo que más me llevo es la gente. He conocido personas maravillosas con las que me he quejado de todo,
          pero también me he reído muchísimo. Y luego he conocido profesores increíbles, que se han dejado la piel para enseñarnos y ayudarnos en todo lo que han podido.
        </p>

        {/* Párrafo sobre el crecimiento personal con el proyecto final */}
        <p className="text-sm text-(--color-muted-gray) leading-relaxed mt-4">
          A nivel personal también he crecido mucho, sobre todo con el proyecto final, donde he aprendido tecnologías por mi cuenta y he descubierto que soy capaz
          de organizarme y sacar las cosas adelante.
        </p>

      </div>

    </div>
  );
}
