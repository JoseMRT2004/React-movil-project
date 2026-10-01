import { CadenaNormalizadores, type Normalizador } from './Normalizador'

export class RecortarTexto implements Normalizador {
  normalizar(entrada: string): string {
    return entrada.trim()
  }
}

const MILES_CON_PUNTO = /^-?\d{1,3}(?:\.\d{3})+(?:,\d+)?$/ // 1.234  /  1.234,5
const MILES_CON_COMA = /^-?\d{1,3}(?:,\d{3})+(?:\.\d+)?$/  // 1,234  /  1,234.5
const COMA_DECIMAL = /^-?\d+,\d+$/                         // 1,5

export class SeparadorMilesYDecimal implements Normalizador {
  normalizar(entrada: string): string {
    const texto = entrada.trim()
    if (MILES_CON_PUNTO.test(texto)) return texto.split('.').join('').replace(',', '.')
    if (MILES_CON_COMA.test(texto)) return texto.split(',').join('')
    if (COMA_DECIMAL.test(texto)) return texto.replace(',', '.')
    return texto
  }
}

export const NORMALIZADOR_NUMERO = new CadenaNormalizadores([
  new RecortarTexto(),
  new SeparadorMilesYDecimal(),
])