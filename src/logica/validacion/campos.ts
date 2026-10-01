import { EnRango, EsEntero, EsNumero } from './Reglas'
import { Validador } from './Validador'

export const RANGO_TRADUCTOR = { min: 1, max: 1000 } as const

export const VALIDADOR_NUMERO = new Validador([new EsNumero()])

export const VALIDADOR_ENTERO = new Validador([new EsNumero(), new EsEntero()])

// EsNumero must come first so NaN gets the right message
export const VALIDADOR_ENTERO_1_1000 = new Validador([
  new EsNumero(),
  new EsEntero(),
  new EnRango(RANGO_TRADUCTOR.min, RANGO_TRADUCTOR.max),
])