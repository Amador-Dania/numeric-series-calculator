import { expect, test, describe } from "vitest";

import Calculo from "./Calculo";
const calculadora = new Calculo();

describe("Función de Números Triangulares", () => {
  test("debería devolver el valor correcto para el primer término", () => {
    expect(calculadora.calcularNumeroTriangular(1)).toBe(1);
  });

  test("debería devolver el valor correcto para el segundo término", () => {
    expect(calculadora.calcularNumeroTriangular(2)).toBe(3);
  });

  test("debería devolver el valor correcto para el tercer término", () => {
    expect(calculadora.calcularNumeroTriangular(3)).toBe(6);
  });

  test("debería devolver el valor correcto para el cuarto término", () => {
    expect(calculadora.calcularNumeroTriangular(4)).toBe(10);
  });

  test("debería devolver el valor correcto para el quinto término", () => {
    expect(calculadora.calcularNumeroTriangular(5)).toBe(15);
  });

  test("debería devolver el valor correcto para el décimo término", () => {
    expect(calculadora.calcularNumeroTriangular(10)).toBe(55);
  });

  test("debería devolver el valor correcto para el término número 100", () => {
    expect(calculadora.calcularNumeroTriangular(100)).toBe(5050);
  });
});

describe("Función de Números Primos", () => {
  test("debería devolver el valor correcto para el primer número primo", () => {
    expect(calculadora.calcularNumeroPrimo(1)).toBe(2);
  });

  test("debería devolver el valor correcto para el segundo número primo", () => {
    expect(calculadora.calcularNumeroPrimo(2)).toBe(3);
  });

  test("debería devolver el valor correcto para el tercer número primo", () => {
    expect(calculadora.calcularNumeroPrimo(3)).toBe(5);
  });

  test("debería devolver el valor correcto para el cuarto número primo", () => {
    expect(calculadora.calcularNumeroPrimo(4)).toBe(7);
  });

  test("debería devolver el valor correcto para el quinto número primo", () => {
    expect(calculadora.calcularNumeroPrimo(5)).toBe(11);
  });

  test("debería devolver el valor correcto para el noveno número primo", () => {
    expect(calculadora.calcularNumeroPrimo(9)).toBe(23);
  });

  test("debería devolver el valor correcto para el décimo número primo", () => {
    expect(calculadora.calcularNumeroPrimo(10)).toBe(29);
  });

  test("debería devolver el valor correcto para el centésimo número primo", () => {
    expect(calculadora.calcularNumeroPrimo(100)).toBe(541);
  });
});

describe("Función de Números Fibonacci", () => {
  test("debería devolver el valor correcto para el primer número Fibonacci", () => {
    expect(calculadora.calcularFibonacci(1)).toBe(1);
  });

  test("debería devolver el valor correcto para el segundo número Fibonacci", () => {
    expect(calculadora.calcularFibonacci(2)).toBe(1);
  });

  test("debería devolver el valor correcto para el tercer número Fibonacci", () => {
    expect(calculadora.calcularFibonacci(3)).toBe(2);
  });

  test("debería devolver el valor correcto para el cuarto número Fibonacci", () => {
    expect(calculadora.calcularFibonacci(4)).toBe(3);
  });

  test("debería devolver el valor correcto para el quinto número Fibonacci", () => {
    expect(calculadora.calcularFibonacci(5)).toBe(5);
  });

  test("debería devolver el valor correcto para el décimo número Fibonacci", () => {
    expect(calculadora.calcularFibonacci(10)).toBe(55);
  });

  test("debería devolver el valor correcto para el decimoquinto número Fibonacci", () => {
    expect(calculadora.calcularFibonacci(15)).toBe(610);
  });
});

describe("SerieCalculator", () => {
  test("debería devolver el valor correcto para el primer término", () => {
    expect(calculadora.serie(1)).toBe(-4);
  });

  test("debería devolver el valor correcto para el segundo término", () => {
    expect(calculadora.serie(2)).toBe(-2);
  });

  test("debería devolver el valor correcto para el tercer término", () => {
    expect(calculadora.serie(3)).toBe(-5);
  });

  test("debería devolver el valor correcto para el cuarto término", () => {
    expect(calculadora.serie(4)).toBe(-12);
  });

  test("debería devolver el valor correcto para el quinto término", () => {
    expect(calculadora.serie(5)).toBe(-18);
  });

  test("debería devolver el valor correcto para el sexto término", () => {
    expect(calculadora.serie(6)).toBe(-35);
  });

  test("debería devolver el valor correcto para el séptimo término", () => {
    expect(calculadora.serie(7)).toBe(-58);
  });

  test("debería devolver el valor correcto para el octavo término", () => {
    expect(calculadora.serie(8)).toBe(-106);
  });

  test("debería devolver el valor correcto para el noveno término", () => {
    expect(calculadora.serie(9)).toBe(-193);
  });

  test("debería devolver el valor correcto para el décimo término", () => {
    expect(calculadora.serie(10)).toBe(-322);
  });

  test("debería devolver el valor correcto para el término -1", () => {
    expect(calculadora.serie(-1)).toBe(0);
  });
});
