export function sumar(a: number, b: number): number {
  return a + b
}

export function tablaDeMultiplicar(n: number): { factor: number; producto: number }[] {
  return Array.from({ length: 13 }, (_, i) => {
    const factor = i + 1
    return { factor, producto: n * factor }
  })
}
