export interface Normalizador {
  normalizar(entrada: string): string
}

export class CadenaNormalizadores implements Normalizador {
  private readonly pasos: Normalizador[]

  constructor(pasos: Normalizador[]) {
    this.pasos = pasos
  }

  normalizar(entrada: string): string {
    return this.pasos.reduce((acumulado, paso) => paso.normalizar(acumulado), entrada)
  }
}