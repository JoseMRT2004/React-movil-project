import { describe, expect, it } from 'vitest'

import { numeroALetras } from '../numeroALetras'
import { NORMALIZADOR_NUMERO } from './Normalizadores'
import { VALIDADOR_ENTERO_1_1000 } from '../validacion/campos'

describe('NORMALIZADOR_NUMERO', () => {
  it('recorta los espacios sobrantes', () => {
    expect(NORMALIZADOR_NUMERO.normalizar(' 231 ')).toBe('231')
  })

  it('elimina los separadores de miles', () => {
    expect(NORMALIZADOR_NUMERO.normalizar('1.000')).toBe('1000')
    expect(NORMALIZADOR_NUMERO.normalizar('1,000')).toBe('1000')
  })

  it('convierte la coma decimal en punto', () => {
    expect(NORMALIZADOR_NUMERO.normalizar('1,5')).toBe('1.5')
    expect(NORMALIZADOR_NUMERO.normalizar('12,34')).toBe('12.34')
  })

  it('resuelve miles con y sin parte decimal', () => {
    expect(NORMALIZADOR_NUMERO.normalizar('1.234,5')).toBe('1234.5')
    expect(NORMALIZADOR_NUMERO.normalizar('1,234.5')).toBe('1234.5')
  })

  it('deja intacto lo que no tiene forma numérica', () => {
    expect(NORMALIZADOR_NUMERO.normalizar('')).toBe('')
    expect(NORMALIZADOR_NUMERO.normalizar('abc')).toBe('abc')
  })

  it('nunca borra espacios internos', () => {
    expect(NORMALIZADOR_NUMERO.normalizar('1 2')).toBe('1 2')
  })
})

describe('normalización + validación (integración)', () => {
  it('un 1000 escrito con punto de miles es válido para el traductor', () => {
    const normalizado = NORMALIZADOR_NUMERO.normalizar('1.000')
    expect(normalizado).toBe('1000')
    expect(VALIDADOR_ENTERO_1_1000.validar(Number(normalizado)).esValido).toBe(true)
    expect(numeroALetras(Number(normalizado))).toBe('mil')
  })

  it('la basura no se repara: sigue siendo inválida', () => {
    expect(VALIDADOR_ENTERO_1_1000.validar(Number(NORMALIZADOR_NUMERO.normalizar('abc'))).esValido).toBe(false)
    expect(VALIDADOR_ENTERO_1_1000.validar(Number(NORMALIZADOR_NUMERO.normalizar('1 2'))).esValido).toBe(false)
  })
})