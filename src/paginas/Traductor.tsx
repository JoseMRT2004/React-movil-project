import { Encabezado } from '../componentes/Encabezado'
import { useCampoNumerico } from '../hooks/useCampoNumerico'
import { numeroALetras } from '../logica/numeroALetras'
import { VALIDADOR_ENTERO_1_1000 } from '../logica/validacion/campos'

export function Traductor() {
  const campo = useCampoNumerico(VALIDADOR_ENTERO_1_1000)

  function mostrarResultado() {
    if (campo.error !== null) {
      return <p className="error">{campo.error}</p>
    }
    if (campo.valor !== null) {
      return <p className="resultado resultado--letras">{numeroALetras(campo.valor)}</p>
    }
    return <p className="pista">Escribe un número para ver su escritura en letras.</p>
  }

  return (
    <section className="pagina">
      <Encabezado
        titulo="Traductor"
        descripcion="Convierte un número del 1 al 1000 a texto en español"
      />

      <div className="tarjeta">
        <form className="formulario" onSubmit={(evento) => evento.preventDefault()}>
          <label className="campo">
            <span className="campo__etiqueta">Número (1 - 1000)</span>
            <input
              className="campo__control"
              type="number"
              inputMode="numeric"
              step="1"
              min="1"
              max="1000"
              value={campo.texto}
              onChange={(evento) => campo.setTexto(evento.target.value)}
              placeholder="Ej: 231"
            />
          </label>
        </form>

        {mostrarResultado()}
      </div>
    </section>
  )
}
