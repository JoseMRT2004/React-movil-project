import { Encabezado } from '../componentes/Encabezado'
import { useCampoNumerico } from '../hooks/useCampoNumerico'
import { sumar } from '../logica/operaciones'
import { VALIDADOR_NUMERO } from '../logica/validacion/campos'

export function Sumadora() {
  const primer = useCampoNumerico(VALIDADOR_NUMERO)
  const segundo = useCampoNumerico(VALIDADOR_NUMERO)

  const hayAlguno = primer.texto.trim() !== '' || segundo.texto.trim() !== ''
  const resultado = primer.valor !== null && segundo.valor !== null ? sumar(primer.valor, segundo.valor) : null

  return (
    <section className="pagina">
      <Encabezado titulo="Sumadora" descripcion="La suma se calcula mientras escribes" />

      <div className="tarjeta">
        <form className="formulario" onSubmit={(evento) => evento.preventDefault()}>
          <label className="campo">
            <span className="campo__etiqueta">Primer número</span>
            <input
              className="campo__control"
              type="number"
              inputMode="numeric"
              step="any"
              value={primer.texto}
              onChange={(evento) => primer.setTexto(evento.target.value)}
              placeholder="Ej: 8"
            />
          </label>
          {primer.error !== null ? <p className="error">{primer.error}</p> : null}

          <label className="campo">
            <span className="campo__etiqueta">Segundo número</span>
            <input
              className="campo__control"
              type="number"
              inputMode="numeric"
              step="any"
              value={segundo.texto}
              onChange={(evento) => segundo.setTexto(evento.target.value)}
              placeholder="Ej: 12"
            />
          </label>
          {segundo.error !== null ? <p className="error">{segundo.error}</p> : null}
        </form>

        {resultado !== null ? (
          <p className="resultado">
            Resultado: <strong>{resultado}</strong>
          </p>
        ) : (
          <p className="pista">
            {hayAlguno
              ? 'Completa ambos campos con números válidos para ver el resultado.'
              : 'Escribe dos números para obtener su suma.'}
          </p>
        )}
      </div>
    </section>
  )
}
