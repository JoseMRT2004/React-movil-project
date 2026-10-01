import { useMemo, useState } from 'react'
import { NORMALIZADOR_NUMERO } from '../logica/normalizacion/Normalizadores'
import type { Validador } from '../logica/validacion/Validador'

export function useCampoNumerico(validador: Validador) {
  const [texto, setTexto] = useState('')

  const { valor, error } = useMemo(() => {
    const normalizado = NORMALIZADOR_NUMERO.normalizar(texto)
    if (normalizado === '') return { valor: null, error: 'Ingresa un número' }
    const resultado = validador.validar(Number(normalizado))
    return resultado.esValido
      ? { valor: Number(normalizado), error: null }
      : { valor: null, error: resultado.mensaje }
  }, [texto, validador])

  return { texto, setTexto, valor, error }
}