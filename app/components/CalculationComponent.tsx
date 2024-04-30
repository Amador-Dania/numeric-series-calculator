import { useMemo } from "react";
import Calculo from "../Calculadora/Calculo";

interface useCalculacionProps {
  input: string;
}

export default function useCalculacion({ input }: useCalculacionProps) {
  const resultado = useMemo(() => {
    const calculadora = new Calculo();

    const parsedInput = parseInt(input);

    if (isNaN(parsedInput)) {
      return 0;
    }
    return calculadora.serie(parsedInput);
  }, [input]);

  return resultado;
}
