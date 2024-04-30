import React from "react";

interface ResultadoProps {
  numero: number;
}

export default function Resultado({ numero }: ResultadoProps) {
  return (
    <div>
      <h2 className="text-center text-xl font-semibold mb-4">
        El resultado es : {numero}
      </h2>
    </div>
  );
}
