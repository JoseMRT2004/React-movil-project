import { perfil } from '../datos'
import { Encabezado } from '../componentes/Encabezado'

export function Inicio() {
  return (
    <section className="pagina">
      <Encabezado titulo="Inicio" descripcion="Mis datos personales" />

      <article className="tarjeta tarjeta--perfil">
        <img className="foto" src={perfil.foto} alt={`Foto de ${perfil.nombre} ${perfil.apellido}`} />

        <div className="perfil__datos">
          <h3 className="perfil__nombre">
            {perfil.nombre} {perfil.apellido}
          </h3>
          <p className="perfil__matricula">Matrícula: {perfil.matricula}</p>
          <p className="perfil__correo">{perfil.correo}</p>
        </div>
      </article>
    </section>
  )
}
