export interface ReglaValidacion {
  readonly mensaje: string
  esValida(valor: unknown): boolean
}