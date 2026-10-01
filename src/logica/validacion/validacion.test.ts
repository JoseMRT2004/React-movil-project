import { describe, expect, it } from 'vitest'

import {
  VALIDADOR_ENTERO,
  VALIDADOR_ENTERO_1_1000,
  VALIDADOR_NUMERO,
} from './campos'
import { ResultadoValidacion } from './ResultadoValidacion'
import type { ReglaValidacion } from './ReglaValidacion'
import { EnRango } from './Reglas'
import { Validador } from './Validador'

describe('VALIDADOR_NUMERO', () => {
  it('acepta números decimales, negativos y cero', () => {
    expect(VALIDADOR_NUMERO.validar(0).esValido).toBe(true)
    expect(VALIDADOR_NUMERO.validar(-3).esValido).toBe(true)
    expect(VALIDADOR_NUMERO.validar(2.5).esValido).toBe(true)
    expect(VALIDADOR_NUMERO.validar(1000).esValido).toBe(true)
  })

  it('rechaza NaN, Infinity, texto y null', () => {
    expect(VALIDADOR_NUMERO.validar(Number.NaN).esValido).toBe(false)
    expect(VALIDADOR_NUMERO.validar(Number.POSITIVE_INFINITY).esValido).toBe(false)
    expect(VALIDADOR_NUMERO.validar('abc').esValido).toBe(false)
    expect(VALIDADOR_NUMERO.validar(null).esValido).toBe(false)
  })
})

describe('VALIDADOR_ENTERO', () => {
  it('acepta cero y enteros negativos', () => {
    expect(VALIDADOR_ENTERO.validar(0).esValido).toBe(true)
    expect(VALIDADOR_ENTERO.validar(-7).esValido).toBe(true)
    expect(VALIDADOR_ENTERO.validar(13).esValido).toBe(true)
  })

  it('rechaza decimales, NaN y texto', () => {
    expect(VALIDADOR_ENTERO.validar(2.5).esValido).toBe(false)
    expect(VALIDADOR_ENTERO.validar(Number.NaN).esValido).toBe(false)
    expect(VALIDADOR_ENTERO.validar('abc').esValido).toBe(false)
  })
})

describe('VALIDADOR_ENTERO_1_1000', () => {
  it('acepta el rango completo 1..1000', () => {
    expect(VALIDADOR_ENTERO_1_1000.validar(1).esValido).toBe(true)
    expect(VALIDADOR_ENTERO_1_1000.validar(231).esValido).toBe(true)
    expect(VALIDADOR_ENTERO_1_1000.validar(1000).esValido).toBe(true)
  })

  it('rechaza lo que está fuera del rango o no es entero', () => {
    expect(VALIDADOR_ENTERO_1_1000.validar(0).esValido).toBe(false)
    expect(VALIDADOR_ENTERO_1_1000.validar(1001).esValido).toBe(false)
    expect(VALIDADOR_ENTERO_1_1000.validar(2.5).esValido).toBe(false)
    expect(VALIDADOR_ENTERO_1_1000.validar(Number.NaN).esValido).toBe(false)
  })

  it('informa el mensaje de la regla que falla', () => {
    expect(VALIDADOR_ENTERO_1_1000.validar(2.5).mensaje).toBe('Debe ser un número entero')
    expect(VALIDADOR_ENTERO_1_1000.validar(0).mensaje).toBe('Debe estar entre 1 y 1000')
  })
})

describe('ResultadoValidacion', () => {
  it('ok() es válido y sin mensaje', () => {
    const resultado = ResultadoValidacion.ok()
    expect(resultado.esValido).toBe(true)
    expect(resultado.mensaje).toBeNull()
  })

  it('error() es inválido y conserva el mensaje', () => {
    const resultado = ResultadoValidacion.error('x')
    expect(resultado.esValido).toBe(false)
    expect(resultado.mensaje).toBe('x')
  })
})

class EsPar implements ReglaValidacion {
  readonly mensaje = 'Debe ser un número par'

  esValida(valor: unknown): boolean {
    return typeof valor === 'number' && Number.isInteger(valor) && valor % 2 === 0
  }
}

describe('Validador (Open/Closed)', () => {
  it('acepta una regla nueva sin modificar las clases existentes', () => {
    const validadorDePares = new Validador([new EsPar()])

    expect(validadorDePares.validar(4).esValido).toBe(true)
    expect(validadorDePares.validar(5).esValido).toBe(false)
    expect(validadorDePares.validar(5).mensaje).toBe('Debe ser un número par')
  })

  it('combina la regla nueva con las reglas existentes sin modificarlas', () => {
    const validadorDeParesEnRango = new Validador([new EsPar(), new EnRango(1, 10)])

    expect(validadorDeParesEnRango.validar(6).esValido).toBe(true)
    expect(validadorDeParesEnRango.validar(6).mensaje).toBeNull()
    expect(validadorDeParesEnRango.validar(5).mensaje).toBe('Debe ser un número par')
    expect(validadorDeParesEnRango.validar(20).mensaje).toBe('Debe estar entre 1 y 10')
  })

  it('es intercambiable: la misma clase nueva sirve en varios validadores', () => {
    const regla = new EsPar()

    expect(new Validador([regla]).validar(8).esValido).toBe(true)
    expect(new Validador([regla, new EsPar()]).validar(9).esValido).toBe(false)
  })
})