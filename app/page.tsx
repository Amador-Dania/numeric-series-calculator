"use client";
import { useState } from "react";
import Form from "./components/Form/Form";
import Resultado from "./components/Resultado";
import useCalculacion from "./components/CalculationComponent";

export default function Home() {
  const [numero, setNumero] = useState("");

  const result = useCalculacion({ input: numero });

  return (
    <main>
      <div className="mt-[200px] sm:mt-[100px] p-4 min-h-screen">
        <div className="mb-8">
          <Form numero={numero} setNumero={setNumero} />
        </div>
        <div>
          <Resultado numero={result} />
        </div>
      </div>
    </main>
  );
}
