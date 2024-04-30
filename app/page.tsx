"use client";
import { useState } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import useCalculation from "./components/CalculationComponent";

export default function Home() {
  const [numero, setNumero] = useState("");

  const result = useCalculation({ input: numero });

  return (
    <main>
      <div className="mt-[200px] sm:mt-[100px] p-4 min-h-screen">
        <div className="mb-8">
          <Formulario numero={numero} setNumero={setNumero} />
        </div>
        <div>
          <Resultado numero={result} />
        </div>
      </div>
    </main>
  );
}
