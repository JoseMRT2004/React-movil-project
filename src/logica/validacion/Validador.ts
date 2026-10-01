import { ResultadoValidacion } from './ResultadoValidacion'
import type { ReglaValidacion } from './ReglaValidacion'

export class Validador {
  private readonly reglas: ReglaValidacion[]

  constructor(reglas: ReglaValidacion[]) {
    this.reglas = reglas
  }

  validar(valor: unknown): ResultadoValidacion {
    for (const regla of this.reglas) {
      if (!regla.esValida(valor)) return ResultadoValidacion.error(regla.mensaje)
    }
    return ResultadoValidacion.ok()
  }
}