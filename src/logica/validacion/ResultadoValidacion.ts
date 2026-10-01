export class ResultadoValidacion {
  readonly esValido: boolean
  readonly mensaje: string | null

  private constructor(esValido: boolean, mensaje: string | null) {
    this.esValido = esValido
    this.mensaje = mensaje
  }

  static ok(): ResultadoValidacion {
    return new ResultadoValidacion(true, null)
  }

  static error(mensaje: string): ResultadoValidacion {
    return new ResultadoValidacion(false, mensaje)
  }
}