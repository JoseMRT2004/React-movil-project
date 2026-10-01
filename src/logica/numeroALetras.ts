import { VALIDADOR_ENTERO_1_1000 } from './validacion/campos'

const UNIDADES = [
  '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
  'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete',
  'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés',
  'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve',
]

const DECENAS = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']

const CENTENAS = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']

export function esNumeroValido(n: number): boolean {
  return VALIDADOR_ENTERO_1_1000.validar(n).esValido
}

function menorQueCien(n: number): string {
  if (n < 30) return UNIDADES[n]
  const decena = Math.floor(n / 10)
  const unidad = n % 10
  return DECENAS[decena] + (unidad ? ' y ' + UNIDADES[unidad] : '')
}

function menorQueMil(n: number): string {
  if (n < 100) return menorQueCien(n)
  if (n === 100) return 'cien'
  const centena = Math.floor(n / 100)
  const resto = n % 100
  return CENTENAS[centena] + (resto ? ' ' + menorQueCien(resto) : '')
}

export function numeroALetras(n: number): string {
  const resultado = VALIDADOR_ENTERO_1_1000.validar(n)
  if (!resultado.esValido) throw new Error(resultado.mensaje ?? 'Número inválido')
  if (n === 1000) return 'mil'
  return menorQueMil(n)
}
