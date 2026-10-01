import type { ReglaValidacion } from './ReglaValidacion'

export class EsNumero implements ReglaValidacion {
  readonly mensaje = 'Debe ser un número'

  esValida(valor: unknown): boolean {
    return typeof valor === 'number' && Number.isFinite(valor)
  }
}

export class EsEntero implements ReglaValidacion {
  readonly mensaje = 'Debe ser un número entero'

  esValida(valor: unknown): boolean {
    return typeof valor === 'number' && Number.isInteger(valor)
  }
}

export class EnRango implements ReglaValidacion {
  readonly mensaje: string
  private readonly min: number
  private readonly max: number

  constructor(min: number, max: number) {
    this.min = min
    this.max = max
    this.mensaje = `Debe estar entre ${min} y ${max}`
  }

  esValida(valor: unknown): boolean {
    return typeof valor === 'number' && Number.isFinite(valor) && valor >= this.min && valor <= this.max
  }
}