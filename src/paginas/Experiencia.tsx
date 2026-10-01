import { YOUTUBE_ID } from '../datos'
import { Encabezado } from '../componentes/Encabezado'

export function Experiencia() {
  return (
    <section className="pagina">
      <Encabezado
        titulo="Experiencia"
        descripcion="Mi experiencia, con este proyecto"
      />

      <div className="tarjeta">
        {YOUTUBE_ID && (
          <div className="video">
            <iframe
              className="video__marco"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="Video de experiencia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <p className="parrafo">
          
        </p>
      </div>
    </section>
  )
}
