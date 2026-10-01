import { describe, expect, it } from 'vitest'

import { esNumeroValido, numeroALetras } from './numeroALetras'

describe('numeroALetras', () => {
  it('convierte los números del 1 al 29', () => {
    expect(numeroALetras(1)).toBe('uno')
    expect(numeroALetras(15)).toBe('quince')
    expect(numeroALetras(16)).toBe('dieciséis')
    expect(numeroALetras(21)).toBe('veintiuno')
    expect(numeroALetras(22)).toBe('veintidós')
    expect(numeroALetras(23)).toBe('veintitrés')
    expect(numeroALetras(26)).toBe('veintiséis')
  })

  it('convierte las decenas', () => {
    expect(numeroALetras(30)).toBe('treinta')
    expect(numeroALetras(31)).toBe('treinta y uno')
  })

  it('convierte las centenas', () => {
    expect(numeroALetras(100)).toBe('cien')
    expect(numeroALetras(101)).toBe('ciento uno')
    expect(numeroALetras(215)).toBe('doscientos quince')
    expect(numeroALetras(231)).toBe('doscientos treinta y uno')
  })

  it('convierte el 999 y el 1000', () => {
    expect(numeroALetras(999)).toBe('novecientos noventa y nueve')
    expect(numeroALetras(1000)).toBe('mil')
  })

  it('lanza un error fuera del rango 1-1000', () => {
    expect(() => numeroALetras(0)).toThrow()
    expect(() => numeroALetras(1001)).toThrow()
    expect(() => numeroALetras(2.5)).toThrow()
    expect(() => numeroALetras(Number.NaN)).toThrow()
  })
})

describe('esNumeroValido', () => {
  it('rechaza los valores fuera del rango o no enteros', () => {
    expect(esNumeroValido(0)).toBe(false)
    expect(esNumeroValido(1001)).toBe(false)
    expect(esNumeroValido(2.5)).toBe(false)
    expect(esNumeroValido(Number.NaN)).toBe(false)
  })

  it('acepta los extremos del rango', () => {
    expect(esNumeroValido(1)).toBe(true)
    expect(esNumeroValido(1000)).toBe(true)
  })
})
