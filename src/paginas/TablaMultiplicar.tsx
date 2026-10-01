import { Encabezado } from '../componentes/Encabezado'
import { useCampoNumerico } from '../hooks/useCampoNumerico'
import { tablaDeMultiplicar } from '../logica/operaciones'
import { VALIDADOR_ENTERO } from '../logica/validacion/campos'

export function TablaMultiplicar() {
  const campo = useCampoNumerico(VALIDADOR_ENTERO)

  function mostrarTabla() {
    if (campo.error !== null) {
      return <p className="error">{campo.error}</p>
    }

    if (campo.valor === null) {
      return <p className="pista">Escribe un número entero para ver su tabla de multiplicar.</p>
    }

    return (
      <ul className="tabla">
        {tablaDeMultiplicar(campo.valor).map(({ factor, producto }) => (
          <li className="tabla__fila" key={factor}>
            {campo.valor} × {factor} = {producto}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className="pagina">
      <Encabezado
        titulo="Tabla de multiplicar"
        descripcion="Tabla del 1 al 13 para el número que ingreses"
      />

      <div className="tarjeta">
        <form className="formulario" onSubmit={(evento) => evento.preventDefault()}>
          <label className="campo">
            <span className="campo__etiqueta">Número</span>
            <input
              className="campo__control"
              type="number"
              inputMode="numeric"
              step="1"
              value={campo.texto}
              onChange={(evento) => campo.setTexto(evento.target.value)}
              placeholder="Ej: 7"
            />
          </label>
        </form>

        {mostrarTabla()}
      </div>
    </section>
  )
}
