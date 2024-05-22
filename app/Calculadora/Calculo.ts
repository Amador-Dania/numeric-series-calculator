class Calculo {
  public calcularNumeroTriangular(n: number) {
    if (n <= 0) return 0;
    return (n * (n + 1)) / 2;
  }

  public calcularNumeroPrimo(n: number) {
    let contador = 0;
    let number = 2;

    while (true) {
      if (this.esPrimo(number)) {
        contador++;
        if (contador === n) {
          return number;
        }
      }
      number++;
    }
  }

  public esPrimo(number: number) {
    if (number <= 1) return false;

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  public calcularFibonacci(n: number): number {
    let a = 0;
    let b = 1;

    if (n === 0) {
      return a;
    }

    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }

    return b;
  }

  public serie(n: number) {
    if (n < 0) {
      return 0;
    }

    const terminoTriangular = this.calcularNumeroTriangular(n + 2);
    // console.log({ terminoTriangular });
    const terminoPrimo = this.calcularNumeroPrimo(n + 1);
    // console.log({ terminoPrimo });
    const terminoFib = this.calcularFibonacci(n);
    // console.log({ terminoFib });
    return 2 * terminoTriangular - 3 * terminoPrimo - 7 * terminoFib;
  }
}

export default Calculo;
