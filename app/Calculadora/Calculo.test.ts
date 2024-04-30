import { expect, test, describe } from "vitest";

import Calculo from "./Calculo";
const calculadora = new Calculo();

describe("Triangular Number Function", () => {
  test("should return the correct value for the 1st term", () => {
    expect(calculadora.calcularNumeroTriangular(1)).toBe(1);
  });

  test("should return the correct value for the 2nd term", () => {
    expect(calculadora.calcularNumeroTriangular(2)).toBe(3);
  });

  test("should return the correct value for the 3rd term", () => {
    expect(calculadora.calcularNumeroTriangular(3)).toBe(6);
  });

  test("should return the correct value for the 4th term", () => {
    expect(calculadora.calcularNumeroTriangular(4)).toBe(10);
  });

  test("should return the correct value for the 5th term", () => {
    expect(calculadora.calcularNumeroTriangular(5)).toBe(15);
  });

  test("should return the correct value for the 10th term", () => {
    expect(calculadora.calcularNumeroTriangular(10)).toBe(55);
  });

  test("should return the correct value for the 100th term", () => {
    expect(calculadora.calcularNumeroTriangular(100)).toBe(5050);
  });
});

describe("Prime Number Function", () => {
  test("should return the correct value for the 1st prime", () => {
    expect(calculadora.calcularNumeroPrimo(1)).toBe(2);
  });

  test("should return the correct value for the 2nd prime", () => {
    expect(calculadora.calcularNumeroPrimo(2)).toBe(3);
  });

  test("should return the correct value for the 3rd prime", () => {
    expect(calculadora.calcularNumeroPrimo(3)).toBe(5);
  });

  test("should return the correct value for the 4th prime", () => {
    expect(calculadora.calcularNumeroPrimo(4)).toBe(7);
  });

  test("should return the correct value for the 5th prime", () => {
    expect(calculadora.calcularNumeroPrimo(5)).toBe(11);
  });

  test("should return the correct value for the 10th prime", () => {
    expect(calculadora.calcularNumeroPrimo(10)).toBe(29);
  });

  test("should return the correct value for the 100th prime", () => {
    expect(calculadora.calcularNumeroPrimo(100)).toBe(541);
  });
});
describe("Fibonacci Number Function", () => {
  test("should return the correct value for the 1st Fibonacci number", () => {
    expect(calculadora.calcularFibonacci(1)).toBe(1);
  });

  test("should return the correct value for the 2nd Fibonacci number", () => {
    expect(calculadora.calcularFibonacci(2)).toBe(1);
  });

  test("should return the correct value for the 3rd Fibonacci number", () => {
    expect(calculadora.calcularFibonacci(3)).toBe(2);
  });

  test("should return the correct value for the 4th Fibonacci number", () => {
    expect(calculadora.calcularFibonacci(4)).toBe(3);
  });

  test("should return the correct value for the 5th Fibonacci number", () => {
    expect(calculadora.calcularFibonacci(5)).toBe(5);
  });

  test("should return the correct value for the 10th Fibonacci number", () => {
    expect(calculadora.calcularFibonacci(10)).toBe(55);
  });

  test("should return the correct value for the 15th Fibonacci number", () => {
    expect(calculadora.calcularFibonacci(15)).toBe(610);
  });
});

describe("SerieCalculator", () => {
  test("should return the correct value for the 1st term", () => {
    expect(calculadora.serie(1)).toBe(-4);
  });

  test("should return the correct value for the 2st term", () => {
    expect(calculadora.serie(2)).toBe(-2);
  });

  test("should return the correct value for the 3st term", () => {
    expect(calculadora.serie(3)).toBe(-5);
  });

  test("should return the correct value for the 4st term", () => {
    expect(calculadora.serie(4)).toBe(-12);
  });

  test("should return the correct value for the 5st term", () => {
    expect(calculadora.serie(5)).toBe(-18);
  });

  test("should return the correct value for the 6st term", () => {
    expect(calculadora.serie(6)).toBe(-35);
  });

  test("should return the correct value for the 7st term", () => {
    expect(calculadora.serie(7)).toBe(-58);
  });

  test("should return the correct value for the 8st term", () => {
    expect(calculadora.serie(8)).toBe(-106);
  });

  test("should return the correct value for the 9st term", () => {
    expect(calculadora.serie(9)).toBe(-193);
  });

  test("should return the correct value for the 55st term", () => {
    expect(calculadora.serie(10)).toBe(-322);
  });

  test("should return the correct value for the -1 term", () => {
    expect(calculadora.serie(-1)).toBe(0);
  });
});
